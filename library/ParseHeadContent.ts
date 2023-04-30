import { NotionCategoriesType } from "@/types/PropertyType";

const parseHeadContent = (categories: NotionCategoriesType) => {
  const head: string = categories.multi_select.join();
  return (head);
}

export default parseHeadContent