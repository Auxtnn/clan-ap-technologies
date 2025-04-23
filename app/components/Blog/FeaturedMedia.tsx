// components/FeaturedMedia.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchFeaturedMedia } from "@/app/utils/blog";

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
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      if (!mediaId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const url = await fetchFeaturedMedia(mediaId);
        setImageUrl(url);
      } catch (err) {
        console.error("Failed to fetch featured media:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadImage();
  }, [mediaId]);

  if (loading) {
    return (
      <div className={`bg-gray-100 animate-pulse ${className}`}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-yellow-500 animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`bg-yellow-500 bg-opacity-10 ${className}`}>
        <div className="w-full h-full flex items-center justify-center text-yellow-500 font-bold">
          CLANAP
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
      />
    </div>
  );
}
