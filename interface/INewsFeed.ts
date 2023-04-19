export interface INewsFeed {
  id?: number;
  name?: string;
  isForked?: boolean;
  updated_at?: string;
  message?: string;
  branch?: string;
  description?: string;
  owner?: string;
  repoUrl?: string;
  ownerImageUrl?: string;
}