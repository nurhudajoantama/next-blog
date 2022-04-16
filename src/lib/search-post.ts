import elasticlunr, { SearchResults } from "elasticlunr";
import { getIndexSearch } from "./get-cache";

export const searchPost = (query: string): SearchResults[] => {
  const index_search = getIndexSearch();
  const idx = elasticlunr.Index.load(index_search);
  const res = idx.search(query, {
    expand: true,
    bool: "OR",
  });
  return res;
};
