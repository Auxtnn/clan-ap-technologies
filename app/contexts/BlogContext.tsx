"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { WordPressPost, PostSummary } from "@/app/types";

interface BlogContextType {
  currentPost: WordPressPost | null;
  featuredImage: string | null;
  isLoading: boolean;
  error: string | null;
}

const BlogContext = createContext<BlogContextType>({
  currentPost: null,
  featuredImage: null,
  isLoading: false,
  error: null,
});

export function useBlog() {
  return useContext(BlogContext);
}

interface BlogProviderProps {
  initialPost?: WordPressPost | null;
  initialFeaturedImage?: string | null;
  children: React.ReactNode;
}

export function BlogProvider({
  initialPost = null,
  initialFeaturedImage = null,
  children,
}: BlogProviderProps) {
  const [currentPost, setCurrentPost] = useState<WordPressPost | null>(
    initialPost
  );
  const [featuredImage, setFeaturedImage] = useState<string | null>(
    initialFeaturedImage
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const value = {
    currentPost,
    featuredImage,
    isLoading,
    error,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
