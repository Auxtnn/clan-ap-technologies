import { WordPressPost, PostSummary } from "../types";

/**
 
 * @param html String containing HTML entities to decode
 * @returns Decoded string
 */
export function decodeHtmlEntities(html: string): string {
  if (!html) return "";

  // Comprehensive replacement map for HTML entities
  const entityMap: Record<string, string> = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&apos;": "'",
    "&#x2F;": "/",
    "&#x27;": "'",
    "&#x60;": "`",
    "&ldquo;": "\u201C",
    "&rdquo;": "\u201D",
    "&lsquo;": "\u2018",
    "&rsquo;": "\u2019",
    "&mdash;": "\u2014",
    "&ndash;": "\u2013",
    "&hellip;": "\u2026",
    "&trade;": "\u2122",
    "&reg;": "\u00AE",
    "&copy;": "\u00A9",
    "&nbsp;": " ",
    "&cent;": "\u00A2",
    "&pound;": "\u00A3",
    "&yen;": "\u00A5",
    "&euro;": "\u20AC",
    "&sect;": "\u00A7",
    "&bull;": "\u2022",
    "&circ;": "\u02C6",
    "&deg;": "\u00B0",
    "&laquo;": "\u00AB",
    "&raquo;": "\u00BB",
    "&dagger;": "\u2020",
    "&Dagger;": "\u2021",
    "&permil;": "\u2030",
    "&prime;": "\u2032",
    "&Prime;": "\u2033",
    "&minus;": "\u2212",
    "&plusmn;": "\u00B1",
    "&times;": "\u00D7",
    "&divide;": "\u00F7",
    "&frasl;": "\u2044",
    "&lowast;": "\u2217",
    "&sim;": "\u223C",
    "&larr;": "\u2190",
    "&uarr;": "\u2191",
    "&rarr;": "\u2192",
    "&darr;": "\u2193",
    "&harr;": "\u2194",
    "&spades;": "\u2660",
    "&clubs;": "\u2663",
    "&hearts;": "\u2665",
    "&diams;": "\u2666",
    "&oelig;": "\u0153",
    "&scaron;": "\u0161",
    "&Scaron;": "\u0160",
    "&yuml;": "\u00FF",
    "&fnof;": "\u0192",
    "&ensp;": "\u2002",
    "&emsp;": "\u2003",
    "&thinsp;": "\u2009",
    "&zwnj;": "\u200C",
    "&zwj;": "\u200D",
    "&lrm;": "\u200E",
    "&rlm;": "\u200F",
  };

  // Replace numeric entities
  let decoded = html.replace(/&#(\d+);/g, (match, dec) => {
    return String.fromCharCode(dec);
  });

  // Replace hex entities
  decoded = decoded.replace(/&#x([0-9a-f]+);/gi, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });

  // Replace named entities
  decoded = decoded.replace(/&([^;]+);/g, (match, entity) => {
    return entityMap[match] || match;
  });

  return decoded;
}

/**
 * Fetches posts from WordPress API
 */
// utils/blog.ts - Update your fetchPosts function

/**
 * Fetches posts from WordPress API with pagination metadata
 */
export async function fetchPosts(page = 1, perPage = 10) {
  const response = await fetch(
    `https://blog.clanap.com/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}`,
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

  // console.log("posts: ", posts);

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
    `https://blog.clanap.com/wp-json/wp/v2/posts?slug=${slug}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) throw new Error("Failed to fetch post");

  const posts = (await response.json()) as WordPressPost[];

  // If post found, decode HTML entities in content
  if (posts && posts.length > 0) {
    // Decode HTML entities in content
    posts[0].content.rendered = decodeHtmlEntities(posts[0].content.rendered);
    posts[0].title.rendered = decodeHtmlEntities(posts[0].title.rendered);
    posts[0].excerpt.rendered = decodeHtmlEntities(posts[0].excerpt.rendered);
  }

  return posts[0] || null;
}

/**
 * Fetches featured media (image) for a post
 */
export async function fetchFeaturedMedia(mediaId: number) {
  if (!mediaId) return null;

  const response = await fetch(
    `https://blog.clanap.com/wp-json/wp/v2/media/${mediaId}`,
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

  // Decode HTML entities in title
  const decodedTitle = decodeHtmlEntities(post.title.rendered);

  // Remove HTML tags and decode HTML entities in excerpt
  const plainExcerpt = decodeHtmlEntities(
    post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "")
  ).trim();

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
    title: decodedTitle,
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
    `https://blog.clanap.com/wp-json/wp/v2/posts?search=${encodedQuery}&page=${page}&per_page=${perPage}`,
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

  // Decode HTML entities in search results
  posts.forEach((post) => {
    post.title.rendered = decodeHtmlEntities(post.title.rendered);
    post.excerpt.rendered = decodeHtmlEntities(post.excerpt.rendered);
    post.content.rendered = decodeHtmlEntities(post.content.rendered);
  });

  return {
    posts,
    totalPosts,
    totalPages,
  };
}
