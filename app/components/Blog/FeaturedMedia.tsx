// components/FeaturedMedia.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchFeaturedMedia } from "@/app/utils/blog";
import { useBlogStore } from "@/app/store/blogstore";
import { enhancedFetchFeaturedMedia } from "@/app/utils/enhanced-blog";

interface FeaturedMediaProps {
  mediaId: number;
  title: string;
  className?: string;
  priority?: boolean;
}

export function FeaturedMedia({
  mediaId,
  title,
  className = "",
  priority = false,
}: FeaturedMediaProps) {
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const cachedMedia = useBlogStore((state) => state.getMedia(mediaId));

  useEffect(() => {
    if (!mediaId) {
      setIsLoading(false);
      return;
    }

    // If media is already in cache, use it
    if (cachedMedia !== undefined) {
      setMediaUrl(cachedMedia);
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    enhancedFetchFeaturedMedia(mediaId)
      .then((url) => {
        if (isMounted) {
          setMediaUrl(url);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError(true);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [mediaId, cachedMedia]);

  if (isLoading) {
    return (
      <div className={`bg-gray-100 animate-pulse ${className}`}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-yellow-500 animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (error || !mediaUrl) {
    return (
      <div className={`bg-yellow-500 bg-opacity-10 ${className}`}>
        <div className="w-full h-full flex items-center justify-center text-yellow-500 font-bold">
          CLANAP
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden h-full ${className}`}
      style={{ paddingBottom: "60%" }}
    >
      <Image
        src={mediaUrl}
        alt={title || "blog post"}
        fill
        onLoad={() => setIsLoading(false)}
        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={priority}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
}
