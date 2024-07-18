import { useQuery } from "@tanstack/vue-query";
import { getAccessories } from "~/services/api/apiCalls";
import type { Ref } from "vue";

const ACCESSORIES_QUERY_KEY = "accessories";

export const useAccessories = (slug: string, isWithAccessories: Ref<boolean>) => {
  return useQuery({
    queryKey: [ACCESSORIES_QUERY_KEY, slug],
    queryFn: () => getAccessories(slug),
    enabled: isWithAccessories,
    select: (data) => data?.responseContent || null,
  })
};
