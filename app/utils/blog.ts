import { WordPressPost, PostSummary } from "../types";

/**
 * Fetches posts from WordPress API
 */
// utils/blog.ts - Update your fetchPosts function

/**
 * Fetches posts from WordPress API with pagination metadata
 */
export async function fetchPosts(page = 1, perPage = 10) {
  const response = await fetch(
    `https://clanap.com/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}`,
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  );

  if (!response.ok) throw new Error("Failed to fetch posts");

  // Extract pagination information from headers
  const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0", 10);
  const totalPages = parseInt(
    response.headers.get("X-WP-TotalPages") || "0",
    10
  );

  const posts = (await response.json()) as WordPressPost[];

  return {
    posts,
    totalPosts,
    totalPages,
  };
}

/**
 * Fetches a single post by slug
 */
export async function fetchPostBySlug(slug: string) {
  const response = await fetch(
    `https://clanap.com/wp-json/wp/v2/posts?slug=${slug}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) throw new Error("Failed to fetch post");

  const posts = (await response.json()) as WordPressPost[];
  return posts[0] || null;
}

/**
 * Fetches featured media (image) for a post
 */
export async function fetchFeaturedMedia(mediaId: number) {
  if (!mediaId) return null;

  const response = await fetch(
    `https://clanap.com/wp-json/wp/v2/media/${mediaId}`,
    {
      next: { revalidate: 3600 }, // Cache for longer since images don't change often
    }
  );

  if (!response.ok) return null;

  const media = await response.json();
  return media.source_url || null;
}

/**
 * Formats WordPress post data for display
 */
export function formatPostData(post: WordPressPost): PostSummary {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Remove HTML tags and trim excerpt
  const plainExcerpt = post.excerpt.rendered
    .replace(/<\/?[^>]+(>|$)/g, "")
    .trim();

  const excerpt =
    plainExcerpt.length > 160
      ? plainExcerpt.substring(0, 157) + "..."
      : plainExcerpt;

  return {
    id: post.id,
    date: post.date,
    formattedDate,
    slug: post.slug,
    link: post.link,
    title: post.title.rendered,
    excerpt,
    featuredMediaId: post.featured_media,
    categories: post.categories || [],
  };
}

/**
 * Fetches search results from WordPress API
 *
 * @param query Search query string
 * @param page Current page number
 * @param perPage Number of posts per page
 * @returns Posts matching the search query and total count
 */
export async function fetchSearchResults(
  query: string,
  page = 1,
  perPage = 10
) {
  // Encode the search query for URL
  const encodedQuery = encodeURIComponent(query);

  // Use WordPress REST API's search parameter
  const response = await fetch(
    `https://clanap.com/wp-json/wp/v2/posts?search=${encodedQuery}&page=${page}&per_page=${perPage}`,
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  );

  if (!response.ok) {
    if (response.status === 400) {
      // Handle bad request (invalid search terms)
      return { posts: [], totalPosts: 0, totalPages: 0 };
    }
    throw new Error(`Failed to fetch search results: ${response.status}`);
  }

  // Extract pagination information from headers
  const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0", 10);
  const totalPages = parseInt(
    response.headers.get("X-WP-TotalPages") || "0",
    10
  );

  const posts = (await response.json()) as WordPressPost[];

  return {
    posts,
    totalPosts,
    totalPages,
  };
}

// /**
//  * Fetches comments for a specific post
//  * @param postId The ID of the post to fetch comments for
//  * @returns Array of comments
//  */
// export async function fetchComments(
//   postId: number
// ): Promise<WordPressComment[]> {
//   try {
//     const response = await fetch(
//       `https://clanap.com/wp-json/wp/v2/comments?post=${postId}&orderby=date&order=asc&per_page=100`,
//       {
//         next: { revalidate: 30 }, // Comments can update more frequently
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Failed to fetch comments: ${response.status}`);
//     }

//     const comments = (await response.json()) as WordPressComment[];
//     return comments;
//   } catch (error) {
//     console.error("Error fetching comments:", error);
//     return [];
//   }
// }

// /**
//  * Organizes comments into a nested structure (for threaded comments)
//  * @param comments Flat array of comments
//  * @returns Nested structure of comments
//  */
// export function organizeCommentThreads(comments: WordPressComment[]) {
//   const commentMap = new Map<
//     number,
//     WordPressComment & { replies?: WordPressComment[] }
//   >();
//   const rootComments: (WordPressComment & { replies?: WordPressComment[] })[] =
//     [];

//   // First, add all comments to the map
//   comments.forEach((comment) => {
//     commentMap.set(comment.id, { ...comment, replies: [] });
//   });

//   // Then organize them into threads
//   comments.forEach((comment) => {
//     const commentWithReplies = commentMap.get(comment.id)!;

//     if (comment.parent === 0) {
//       // This is a root level comment
//       rootComments.push(commentWithReplies);
//     } else {
//       // This is a reply to another comment
//       const parentComment = commentMap.get(comment.parent);
//       if (parentComment) {
//         if (!parentComment.replies) {
//           parentComment.replies = [];
//         }
//         parentComment.replies.push(commentWithReplies);
//       } else {
//         // Parent comment not found (unusual case), add to root
//         rootComments.push(commentWithReplies);
//       }
//     }
//   });

//   return rootComments;
// }

// /**
//  * Submits a new comment to WordPress
//  * @param commentData Comment data to submit
//  * @returns The created comment or null if there was an error
//  */
// export async function submitComment(
//   commentData: CommentFormData
// ): Promise<WordPressComment | null> {
//   try {
//     const response = await fetch("https://clanap.com/wp-json/wp/v2/comments", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(commentData),
//     });

//     if (!response.ok) {
//       // Check for specific error messages
//       const errorData = await response.json();
//       throw new Error(
//         errorData.message || `Failed to submit comment: ${response.status}`
//       );
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error submitting comment:", error);
//     throw error;
//   }
// }

// /**
//  * Formats a comment date for display
//  * @param dateString ISO date string from WordPress
//  * @returns Formatted date string
//  */
// export function formatCommentDate(dateString: string): string {
//   const date = new Date(dateString);
//   const now = new Date();
//   const diffMs = now.getTime() - date.getTime();
//   const diffSecs = Math.floor(diffMs / 1000);
//   const diffMins = Math.floor(diffSecs / 60);
//   const diffHours = Math.floor(diffMins / 60);
//   const diffDays = Math.floor(diffHours / 24);

//   if (diffDays > 7) {
//     // More than a week old, show full date
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   } else if (diffDays > 0) {
//     // Less than a week old
//     return `${diffDays} ${diffDays === 1 ? "day" : "days"} ago`;
//   } else if (diffHours > 0) {
//     return `${diffHours} ${diffHours === 1 ? "hour" : "hours"} ago`;
//   } else if (diffMins > 0) {
//     return `${diffMins} ${diffMins === 1 ? "minute" : "minutes"} ago`;
//   } else {
//     return "Just now";
//   }
// }
