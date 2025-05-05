// app/utils/cache.ts
import { WordPressPost } from "@/app/types";

// Type-safe cache interface
interface CacheStorage {
  posts: Map<string, WordPressPost>;
  media: Map<number, string | null>;
  lastFetched: Map<string, number>;
}

// Initialize cache
const cache: CacheStorage = {
  posts: new Map(),
  media: new Map(),
  lastFetched: new Map(),
};

// Cache TTL in seconds
const CACHE_TTL = 60; // 1 minute - adjust as needed

export function getCachedPost(slug: string): WordPressPost | null {
  const post = cache.posts.get(slug);
  const lastFetched = cache.lastFetched.get(`post-${slug}`);

  if (post && lastFetched && Date.now() - lastFetched < CACHE_TTL * 1000) {
    return post;
  }

  return null;
}

export function setCachedPost(slug: string, post: WordPressPost): void {
  cache.posts.set(slug, post);
  cache.lastFetched.set(`post-${slug}`, Date.now());
}

export function getCachedMedia(mediaId: number): string | null | undefined {
  const media = cache.media.get(mediaId);
  const lastFetched = cache.lastFetched.get(`media-${mediaId}`);

  if (
    media !== undefined &&
    lastFetched &&
    Date.now() - lastFetched < CACHE_TTL * 10 * 1000
  ) {
    // Media cache can live 10x longer since images rarely change
    return media;
  }

  return undefined;
}

export function setCachedMedia(mediaId: number, url: string | null): void {
  cache.media.set(mediaId, url);
  cache.lastFetched.set(`media-${mediaId}`, Date.now());
}

// Helper to clear expired items (call periodically if needed)
export function clearExpiredCache(): void {
  const now = Date.now();

  // Clear expired posts
  cache.lastFetched.forEach((timestamp, key) => {
    if (key.startsWith("post-") && now - timestamp > CACHE_TTL * 1000) {
      const slug = key.replace("post-", "");
      cache.posts.delete(slug);
      cache.lastFetched.delete(key);
    } else if (
      key.startsWith("media-") &&
      now - timestamp > CACHE_TTL * 10 * 1000
    ) {
      const mediaId = parseInt(key.replace("media-", ""), 10);
      cache.media.delete(mediaId);
      cache.lastFetched.delete(key);
    }
  });
}
