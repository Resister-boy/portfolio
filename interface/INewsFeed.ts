export interface INewsFeed {
  id?: number;
  name?: string;
  isForked?: boolean;
  updated_at?: string;
  message?: string;
  description?: string;
  owner?: string;
  repoUrl?: string;
  ownerImageUrl?: string;
}