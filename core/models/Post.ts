export interface PostPaginated {
  content: PostSummary[];
}

export interface PostSummary {
  id: number;
  title: string;
  slug: string;
  tags: string[];
  editor: { name: string; avatarUrls: { small: string } };
  imageUrls: { medium: string; small: string; large: string };
  createdAt: string;
}

export interface PostDetailed {
  id: number;
  title: string;
  slug: string;
  tags: string[];
  body: string;
  editor: { name: string; avatarUrls: { small: string } };
  imageUrls: { medium: string; small: string; large: string };
  createdAt: string;
}
