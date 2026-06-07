export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  imageUrl: string;
  date: string;
  author: string;
}

export interface Match {
  id: string;
  team1: { name: string; code: string; flag: string; score: number | null };
  team2: { name: string; code: string; flag: string; score: number | null };
  status: 'Scheduled' | 'Live' | 'Finished';
  time: string;
  stadium: string;
  group: string;
}
