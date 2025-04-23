export interface WordPressPost {
  modified: string | undefined;
  id: number;
  date: string;
  date_gmt: string;
  slug: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;
  categories: number[];
  tags: number[];
  status: string;
  author: number;
  _links: {
    "wp:featuredmedia"?: Array<{
      href: string;
      embeddable?: boolean;
    }>;
    [key: string]: any;
  };
}

export interface PostSummary {
  id: number;
  date: string;
  formattedDate: string;
  slug: string;
  link: string;
  title: string;
  excerpt: string;
  featuredMediaId: number;
  featuredMediaUrl?: string;
  categories: number[];
}

export interface WordPressComment {
  replies: boolean;
  id: number;
  post: number;
  parent: number;
  author_name: string;
  author_url?: string;
  date: string;
  content: {
    rendered: string;
  };
  author_avatar_urls: {
    [key: string]: string;
  };
  status: string; // "approved", "pending", etc.
  _links?: {
    [key: string]: any;
  };
}

export interface CommentFormData {
  author_name: string;
  author_email: string;
  content: string;
  post: number;
  parent?: number;
}
