import apiClient from "~/services/api/apiClient";
import type { GetProductDetailBySlugResponse } from "~/models/products";
import type { GetProductAccessoriesResponse } from "~/models/accessories";
export const getProduct = async (slug: string) => {
    apiClient.defaults.headers['X-PB-Scope'] = 'eyJwYXRoIjoiXC9hcGktcHJvZHVjdHNcL3Byb2R1Y3RzXC97c2x1Z30iLCJwcmVzZW50YXRpb25JZCI6MX0';
    const response = await apiClient.get<GetProductDetailBySlugResponse>(`/products/${slug}`);
    return response.data;
}

export const getAccessories = async (slug: string) => {
    apiClient.defaults.headers['X-PB-Scope'] = 'eyJwYXRoIjoiXC9hcGktcHJvZHVjdHNcL3Byb2R1Y3RzXC97c2x1Z31cL2FjY2Vzc29yaWVzIiwicHJlc2VudGF0aW9uSWQiOjF9';
    const response = await apiClient.get<GetProductAccessoriesResponse>(`/products/${slug}/accessories`);
    return response.data;
}
