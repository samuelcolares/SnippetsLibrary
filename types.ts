export type SnippetType = {
  id: string;
  title: string;
  category: string;
  description: string;
  language: string;
  snippet: string;
};

export type CategoryType = {
  id: string;
  categoryTitle: string;
};

export type User = {
  id: string;
  username: string;
  password: string;
};
