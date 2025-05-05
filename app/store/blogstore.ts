// store/blogStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { WordPressPost, PostSummary } from "@/app/types";
import { decodeHtmlEntities, formatPostData } from "@/app/utils/blog";

interface MediaCache {
  [key: number]: string | null;
}

interface BlogStore {
  // Posts data
  posts: PostSummary[];
  postsBySlug: Record<string, WordPressPost>;
  mediaCache: MediaCache;

  // Pagination
  totalPosts: number;
  totalPages: number;
  currentPage: number;

  // Status
  isLoading: boolean;
  error: string | null;

  // Actions
  setPostsData: (
    posts: PostSummary[],
    totalPosts: number,
    totalPages: number,
    page: number
  ) => void;
  setPost: (slug: string, post: WordPressPost) => void;
  setMedia: (mediaId: number, url: string | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;

  // Helper methods
  getPost: (slug: string) => WordPressPost | null;
  getMedia: (mediaId: number) => string | null | undefined;
}

// Safe storage implementation
const safeStorage = {
  getItem: (name: string) => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem(name);
    }
    return null;
  },
  setItem: (name: string, value: string) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(name, value);
    }
  },
  removeItem: (name: string) => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(name);
    }
  },
};

export const useBlogStore = create<BlogStore>()(
  persist(
    (set, get) => ({
      // Initial state
      posts: [],
      postsBySlug: {},
      mediaCache: {},
      totalPosts: 0,
      totalPages: 0,
      currentPage: 1,
      isLoading: false,
      error: null,

      // Actions
      setPostsData: (posts, totalPosts, totalPages, page) =>
        set({
          posts,
          totalPosts,
          totalPages,
          currentPage: page,
          isLoading: false,
        }),

      setPost: (slug, post) =>
        set((state) => ({
          postsBySlug: {
            ...state.postsBySlug,
            [slug]: post,
          },
        })),

      setMedia: (mediaId, url) =>
        set((state) => ({
          mediaCache: {
            ...state.mediaCache,
            [mediaId]: url,
          },
        })),

      setLoading: (loading) => set({ isLoading: loading }),

      setError: (error) => set({ error, isLoading: false }),

      clearError: () => set({ error: null }),

      // Helper methods
      getPost: (slug) => get().postsBySlug[slug] || null,

      getMedia: (mediaId) => get().mediaCache[mediaId],
    }),
    {
      name: "blog-storage",
      storage: createJSONStorage(() => safeStorage),

      partialize: (state) => ({
        // Only persist these parts of state to reduce storage size
        postsBySlug: state.postsBySlug,
        mediaCache: state.mediaCache,
      }),
      // Add this option to skip hydration in SSR
      skipHydration: true,
    }
  )
);

// Add a hydration function to be called in a useEffect
export function hydrateBlogStore() {
  if (typeof window !== "undefined") {
    useBlogStore.persist.rehydrate();
  }
}
