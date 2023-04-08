export interface Book {
    id: number;
    title: string;
    author: string;
    type: number; // 0 if physical, 1 if digital
    url?: string; // if it's a digital book, it has a URL
    publicationYear?: number;
    language?: string;
    pageCount?: number;
    description?: string;
    isAvailable: boolean;
  }