"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
  const cachedMedia = useBlogStore((state) => state.getMedia(mediaId));
  const [mediaUrl, setMediaUrl] = useState<string | null>(
    cachedMedia !== undefined ? (cachedMedia as string | null) : null
  );
  const [isLoading, setIsLoading] = useState(
    cachedMedia === undefined && !!mediaId
  );
  const [error, setError] = useState(false);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (!mediaId) {
      setIsLoading(false);
      return;
    }

    if (cachedMedia !== undefined) {
      setMediaUrl(cachedMedia as string | null);
      setIsLoading(false);
      return;
    }

    if (fetchedRef.current) return;
    fetchedRef.current = true;

    let cancelled = false;

    enhancedFetchFeaturedMedia(mediaId)
      .then((url) => {
        if (!cancelled) {
          setMediaUrl(url as string | null);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [mediaId, cachedMedia]);

  if (isLoading) {
    return (
      <div
        className={`bg-gray-100 animate-pulse ${className}`}
        style={{ aspectRatio: "16/9" }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#FE5300]/30 animate-pulse" />
        </div>
      </div>
    );
  }

  if (error || !mediaUrl) {
    return (
      <div
        className={`bg-[#FE5300]/10 ${className}`}
        style={{ aspectRatio: "16/9" }}
      >
        <div className="w-full h-full flex items-center justify-center text-[#FE5300] font-bold">
          CLANAP
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: "16/9" }}
    >
      <Image
        src={mediaUrl}
        alt={title || "blog post"}
        fill
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
