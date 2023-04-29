import { PropertyType } from "./PropertyType";

export type PageType = {
  page: {
    archived?: boolean;
    cover?: string | null;
    created_by?: {
      id?: string;
      object?: string;
    } | null;
    created_time?: string | null;
    icon?: string | null;
    last_edited_by?: {
      id?: string;
      object?: string;
    } | null;
    parent?: {
      database_id?: string;
      type?: string;
    } | null;
    properties: PropertyType;
    url?: string | null;
  }
}

