import { ProjectType } from "./ProjectType";
import { PropertyType } from "./PropertyType";

export type DataBaseType = {
  object?: string | null;
  results: {
    id: string;
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
  }[];
  type: string;
}