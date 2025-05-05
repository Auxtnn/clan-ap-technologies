"use client";

import { useEffect } from "react";
import { hydrateBlogStore } from "@/app/store/blogstore";

export function StoreHydration() {
  useEffect(() => {
    hydrateBlogStore();
  }, []);

  return null;
}
