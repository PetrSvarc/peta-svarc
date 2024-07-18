export enum ProductTypeCodes {
    PRODUCT_TYPE_PRODUCT = 'PRODUCT_TYPE_PRODUCT',
    PRODUCT_TYPE_SET = 'PRODUCT_TYPE_SET',
    PRODUCT_TYPE_PARTIAL_VARIANT = 'PRODUCT_TYPE_PARTIAL_VARIANT',
    PRODUCT_TYPE_PARTIAL_MASTER = 'PRODUCT_TYPE_PARTIAL_MASTER',
    PRODUCT_TYPE_PAPER_VOUCHER = 'PRODUCT_TYPE_PAPER_VOUCHER',
    PRODUCT_TYPE_DIGITAL_VOUCHER = 'PRODUCT_TYPE_DIGITAL_VOUCHER',
}

export enum ProductStateCodes {
    PRODUCT_STATE_ACTIVE = 'PRODUCT_STATE_ACTIVE',
    PRODUCT_STATE_HIDDEN = 'PRODUCT_STATE_HIDDEN',
}

export interface RedirectErrorDTO {
    errorCode: string;
    message: string;
    property: string;
    payload?: any;
}

export interface Errors {
    errors?: RedirectErrorDTO[];
}

export interface ProductPriceResponseDTO {
    price: number;
    priceFrom?: number | null;
    originalPrice?: number | null;
    lowestPriceInLast30Days: number;
    discountInPercents?: number | null;
    currencyCode: string;
}

export interface ProductStockAvailabilityResponseDTO {
    maxStoredCount: number;
    storedVariantsCount?: number | null;
}

export interface ProductBrandResponseDTO {
    id: number;
    name: string;
    slug: string;
    imagePath: string;
}

export interface ProductBadgeItemResponseDTO {
    name: string;
    backgroundColor?: string | null;
    textColor?: string | null;
}

export interface ProductBadgeCollectionResponseDTO {
    items: ProductBadgeItemResponseDTO[];
}

export interface ProductParameterItemResponseDTO {
    name: string;
    value: string;
}

export interface ProductParameterCollectionResponseDTO {
    items: ProductParameterItemResponseDTO[];
}

export interface ProductCardResponseDTO {
    id: number;
    masterProductId: number;
    slug: string;
    code: string;
    type: ProductTypeCodes;
    state: ProductStateCodes;
    name: string;
    annotation: string;
    mainImagePath: string;
    isPurchasable: boolean;
    weight: number;
    weightUnit: string;
    price: ProductPriceResponseDTO;
    stockAvailability: ProductStockAvailabilityResponseDTO;
    brand?: ProductBrandResponseDTO | null;
    badges?: ProductBadgeCollectionResponseDTO | null;
    parameters?: ProductParameterCollectionResponseDTO | null;
}

export interface ProductCardItemsResponseDTO {
    items: ProductCardResponseDTO[];
}

export type ResponseContent = ProductCardItemsResponseDTO | ProductCardResponseDTO;

export interface GetProductAccessoriesResponse {
    description: string;
    errors?: Errors;
    responseContent?: ResponseContent | null;
}
