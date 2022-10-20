export interface Moment {
  id?: number;
  title: string;
  description: string;
  image: string;
  crated_at?: string;
  updated_at?: string;
  comments?: [{ text: string; username: string }];
}
