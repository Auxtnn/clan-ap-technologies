// app/utils/enhanced-blog.ts
import { WordPressPost, PostSummary } from "@/app/types";
import { decodeHtmlEntities, formatPostData } from "./blog";
import { useBlogStore } from "@/app/store/blogstore";

/**
 * Helper to implement retry logic for fetch requests
 */
async function fetchWithRetry<T>(
  url: string,
  options: RequestInit = {},
  maxRetries = 3
): Promise<Response> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);

      if (response.ok) {
        return response;
      }

      // If rate limited or server error, retry after delay
      if (response.status === 429 || response.status >= 500) {
        // Increasing backoff delay with each retry
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 * Math.pow(2, attempt))
        );
        lastError = new Error(`Request failed with status ${response.status}`);
        continue;
      }

      // For other error status codes, don't retry
      throw new Error(`Request failed with status ${response.status}`);
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      if (attempt === maxRetries - 1) {
        break;
      }

      // Wait before retry with exponential backoff
      await new Promise((resolve) =>
        setTimeout(resolve, 1000 * Math.pow(2, attempt))
      );
    }
  }

  throw lastError || new Error("Request failed after multiple attempts");
}

/**
 * Enhanced version of fetchPosts with retry logic and store integration
 */
export async function enhancedFetchPosts(page = 1, perPage = 10) {
  const store = useBlogStore.getState();

  try {
    store.setLoading(true);
    store.clearError();

    const response = await fetchWithRetry(
      `https://clanap.com/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}`,
      { next: { revalidate: 60 } }
    );

    const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0", 10);
    const totalPages = parseInt(
      response.headers.get("X-WP-TotalPages") || "0",
      10
    );

    const posts = (await response.json()) as WordPressPost[];

    // Decode HTML entities in content
    posts.forEach((post) => {
      post.title.rendered = decodeHtmlEntities(post.title.rendered);
      post.excerpt.rendered = decodeHtmlEntities(post.excerpt.rendered);
      post.content.rendered = decodeHtmlEntities(post.content.rendered);

      // Cache post by slug
      store.setPost(post.slug, post);
    });

    const formattedPosts = posts.map(formatPostData);

    // Update store
    store.setPostsData(formattedPosts, totalPosts, totalPages, page);

    return {
      posts,
      formattedPosts,
      totalPosts,
      totalPages,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    store.setError(error instanceof Error ? error.message : String(error));
    throw error;
  }
}

/**
 * Enhanced version of fetchPostBySlug with retry logic and store integration
 */
export async function enhancedFetchPostBySlug(slug: string) {
  const store = useBlogStore.getState();

  // Check if post exists in store first
  const cachedPost = store.getPost(slug);
  if (cachedPost) {
    return cachedPost;
  }

  try {
    store.setLoading(true);
    store.clearError();

    const response = await fetchWithRetry(
      `https://clanap.com/wp-json/wp/v2/posts?slug=${slug}`,
      { next: { revalidate: 60 } }
    );

    const posts = (await response.json()) as WordPressPost[];

    if (!posts || posts.length === 0) {
      store.setLoading(false);
      return null;
    }

    // Decode HTML entities in content
    const post = posts[0];
    post.title.rendered = decodeHtmlEntities(post.title.rendered);
    post.excerpt.rendered = decodeHtmlEntities(post.excerpt.rendered);
    post.content.rendered = decodeHtmlEntities(post.content.rendered);

    // Cache the post
    store.setPost(slug, post);
    store.setLoading(false);

    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    store.setError(error instanceof Error ? error.message : String(error));
    store.setLoading(false);
    throw error;
  }
}

/**
 * Enhanced version of fetchFeaturedMedia with retry logic and store integration
 */
export async function enhancedFetchFeaturedMedia(mediaId: number) {
  if (!mediaId) return null;

  const store = useBlogStore.getState();

  // Check if media exists in store first
  const cachedMedia = store.getMedia(mediaId);
  if (cachedMedia !== undefined) {
    return cachedMedia;
  }

  try {
    // No need to set global loading state for media to avoid UI flicker
    const response = await fetchWithRetry(
      `https://clanap.com/wp-json/wp/v2/media/${mediaId}`,
      { next: { revalidate: 3600 } }
    );

    const media = await response.json();
    const mediaUrl = media.source_url || null;

    // Cache the media URL
    store.setMedia(mediaId, mediaUrl);

    return mediaUrl;
  } catch (error) {
    console.error("Error fetching media:", error);

    // Cache the failure to avoid repeated requests for same media
    store.setMedia(mediaId, null);

    return null;
  }
}

/**
 * Prefetch adjacent pages for faster navigation
 */
export function prefetchAdjacentPages(
  currentPage: number,
  totalPages: number,
  perPage = 10
) {
  // Don't prefetch if at the ends of the pagination
  if (currentPage <= 0 || currentPage > totalPages) return;

  // Prefetch next page if not the last page
  if (currentPage < totalPages) {
    setTimeout(() => {
      enhancedFetchPosts(currentPage + 1, perPage).catch(() => {
        // Silently fail prefetching
      });
    }, 1000);
  }

  // Prefetch previous page if not the first page
  if (currentPage > 1) {
    setTimeout(() => {
      enhancedFetchPosts(currentPage - 1, perPage).catch(() => {
        // Silently fail prefetching
      });
    }, 2000);
  }
}
