import { useQuery } from "@tanstack/vue-query";
import { getProduct } from "~/services/api/apiCalls";

const PRODUCT_QUERY_KEY = "products";

export const useProduct = (slug: string) => {
  return useQuery({
    queryKey: [PRODUCT_QUERY_KEY, slug],
    queryFn: () => getProduct(slug),
    select: (data) => data?.responseContent || null,
  })
};

