import { END_POINT } from "@/constants";
import { fetchData } from "@/libs/services/api";

export const getComments = async () => {
  return await fetchData({ endpoint: END_POINT.COMMENT });
};