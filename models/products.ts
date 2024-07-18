// Define Enums
export enum GeneralErrorCodes {
    PAGE_NOT_FOUND = 'PAGE_NOT_FOUND',
    PAGINATION_PAGE_OUT_OF_BOUNDS = 'PAGINATION_PAGE_OUT_OF_BOUNDS',
    CART_NOT_FOUND = 'CART_NOT_FOUND',
    // Add all other error codes...
    CATEGORY_NOT_FOUND = 'CATEGORY_NOT_FOUND',
    WATCHDOG_ALREADY_ACTIVE = 'WATCHDOG_ALREADY_ACTIVE',
    WATCHDOG_NOT_FOUND = 'WATCHDOG_NOT_FOUND',
    TODO = 'TODO',
}

export enum ErrorsPayloadObjectTypeCodes {
    ERROR_PAYLOAD_OBJECT_TYPE_PRODUCT = 'ERROR_PAYLOAD_OBJECT_TYPE_PRODUCT',
    ERROR_PAYLOAD_OBJECT_TYPE_CATEGORY = 'ERROR_PAYLOAD_OBJECT_TYPE_CATEGORY',
    ERROR_PAYLOAD_OBJECT_TYPE_MANUFACTURER = 'ERROR_PAYLOAD_OBJECT_TYPE_MANUFACTURER',
    ERROR_PAYLOAD_OBJECT_TYPE_ARTICLE = 'ERROR_PAYLOAD_OBJECT_TYPE_ARTICLE',
    ERROR_PAYLOAD_OBJECT_TYPE_PAGE = 'ERROR_PAYLOAD_OBJECT_TYPE_PAGE',
}

export enum ErrorsPayloadRedirectTypeCodes {
    ERROR_PAYLOAD_REDIRECT_TYPE_INTERNAL = 'ERROR_PAYLOAD_REDIRECT_TYPE_INTERNAL',
    ERROR_PAYLOAD_REDIRECT_TYPE_EXTERNAL = 'ERROR_PAYLOAD_REDIRECT_TYPE_EXTERNAL',
}

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

export enum ProductParameterDisplayStyleCodes {
    PRODUCT_PARAMETER_DISPLAY_STYLE_BUTTON_DEFAULT = 'PRODUCT_PARAMETER_DISPLAY_STYLE_BUTTON_DEFAULT',
    PRODUCT_PARAMETER_DISPLAY_STYLE_BUTTON_PRODUCT_COLOR = 'PRODUCT_PARAMETER_DISPLAY_STYLE_BUTTON_PRODUCT_COLOR',
    PRODUCT_PARAMETER_DISPLAY_STYLE_BUTTON_PRODUCT_DEFAULT = 'PRODUCT_PARAMETER_DISPLAY_STYLE_BUTTON_PRODUCT_DEFAULT',
    PRODUCT_PARAMETER_DISPLAY_STYLE_BUTTON_PRODUCT_IMAGE = 'PRODUCT_PARAMETER_DISPLAY_STYLE_BUTTON_PRODUCT_IMAGE',
    PRODUCT_PARAMETER_DISPLAY_STYLE_SELECTBOX_DEFAULT = 'PRODUCT_PARAMETER_DISPLAY_STYLE_SELECTBOX_DEFAULT',
    PRODUCT_PARAMETER_DISPLAY_STYLE_SELECTBOX_PRODUCT_COLOR = 'PRODUCT_PARAMETER_DISPLAY_STYLE_SELECTBOX_PRODUCT_COLOR',
    PRODUCT_PARAMETER_DISPLAY_STYLE_SELECTBOX_PRODUCT_DEFAULT = 'PRODUCT_PARAMETER_DISPLAY_STYLE_SELECTBOX_PRODUCT_DEFAULT',
}

export enum ProductBreadcrumbTypeCodes {
    PRODUCT_BREADCRUMB_TYPE_PRODUCT = 'PRODUCT_BREADCRUMB_TYPE_PRODUCT',
    PRODUCT_BREADCRUMB_TYPE_CATEGORY = 'PRODUCT_BREADCRUMB_TYPE_CATEGORY',
    PRODUCT_BREADCRUMB_TYPE_PAGE = 'PRODUCT_BREADCRUMB_TYPE_PAGE',
    PRODUCT_BREADCRUMB_TYPE_HOMEPAGE = 'PRODUCT_BREADCRUMB_TYPE_HOMEPAGE',
}

export enum ProductGalleryItemTypeCodes {
    PRODUCT_GALLERY_ITEM_TYPE_IMAGE = 'PRODUCT_GALLERY_ITEM_TYPE_IMAGE',
    PRODUCT_GALLERY_ITEM_TYPE_YOUTUBE = 'PRODUCT_GALLERY_ITEM_TYPE_YOUTUBE',
}

// Define Interfaces
export interface RedirectPayloadObjectType {
    path: string;
    objectType: ErrorsPayloadObjectTypeCodes;
    redirectType: ErrorsPayloadRedirectTypeCodes;
}

export interface GeneralErrorDTO {
    errorCode: GeneralErrorCodes;
    message?: string | null;
    property?: string | null;
}

export interface RedirectErrorDTO {
    errorCode: string;
    message?: string | null;
    property?: string | null;
    payload?: RedirectPayloadObjectType | null;
}

export interface Errors {
    errors?: (GeneralErrorDTO | RedirectErrorDTO)[];
}

export interface ProductPriceResponseDTO {
    price: number;
    priceFrom?: number | null;
    originalPrice?: number | null;
    lowestPriceInLast30Days: number;
    discountInPercents?: number | null;
    currencyCode: string;
}

export interface ProductVariantParameterValueItemResponseDTO {
    parameterId: number;
    valueId: number;
}

export interface ProductVariantParameterValueCollectionResponseDTO {
    items: ProductVariantParameterValueItemResponseDTO[];
}

interface ProductVariantParameterAvailableValueItemResponseDTO {
    id: number;
    name: string;
    colorOne?: string | null;
    colorTwo?: string | null;
    image?: string | null;
}

export interface ProductVariantParameterAvailableItemResponseDTO {
    id: number;
    name: string;
    displayStyle: ProductParameterDisplayStyleCodes;
    values: ProductVariantParameterAvailableValueItemResponseDTO[];
}

export interface ProductVariantParameterAvailableCollectionResponseDTO {
    items: ProductVariantParameterAvailableItemResponseDTO[];
}

export interface ProductVariantAvailableItemResponseDTO {
    id: number;
    code: string;
    name: string;
    slug: string;
    price: ProductPriceResponseDTO;
    maxStockAvailability: number;
    variantParameters?: ProductVariantParameterValueCollectionResponseDTO | null;
}

export interface ProductVariantAvailableCollectionResponseDTO {
    items: ProductVariantAvailableItemResponseDTO[];
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

export interface ProductBreadcrumbItemResponseDTO {
    slug: string;
    name: string;
    type: ProductBreadcrumbTypeCodes;
}

export interface ProductBreadcrumbCollectionResponseDTO {
    items: ProductBreadcrumbItemResponseDTO[];
}

export interface ProductDeliveryDateResponseDTO {
    earliestPossibleDeliveryDate: string;
}

export interface ProductDeliveryResponseDTO {
    internal?: ProductDeliveryDateResponseDTO | null;
    external?: ProductDeliveryDateResponseDTO | null;
}

export interface ProductGalleryItemResponseDTO {
    path: string;
    isMain: boolean;
    type: ProductGalleryItemTypeCodes;
}

export interface ProductGalleryResponseDTO {
    items: ProductGalleryItemResponseDTO[];
}

export interface ProductParameterItemResponseDTO {
    name: string;
    value: string;
}

export interface ProductParameterCollectionResponseDTO {
    items: ProductParameterItemResponseDTO[];
}

export interface GetProductDetailResponseDTO {
    id: number;
    masterProductId: number;
    slug: string;
    code: string;
    type: ProductTypeCodes;
    state: ProductStateCodes;
    name: string;
    annotation: string;
    description: string;
    isPurchasable: boolean;
    isWithAlternatives: boolean;
    isWithAccessories: boolean;
    weight: number;
    weightUnit: string;
    price: ProductPriceResponseDTO;
    variantParameters?: ProductVariantParameterValueCollectionResponseDTO | null;
    availableVariantParameters?: ProductVariantParameterAvailableCollectionResponseDTO | null;
    availableVariantsMatrix?: ProductVariantAvailableCollectionResponseDTO | null;
    stockAvailability?: ProductStockAvailabilityResponseDTO | null;
    brand?: ProductBrandResponseDTO | null;
    badges?: ProductBadgeCollectionResponseDTO | null;
    breadcrumbs?: ProductBreadcrumbCollectionResponseDTO | null;
    delivery?: ProductDeliveryResponseDTO | null;
    gallery?: ProductGalleryResponseDTO | null;
    parameters?: ProductParameterCollectionResponseDTO | null;
}

export type ResponseContent = GetProductDetailResponseDTO;

export interface GetProductDetailBySlugResponse {
    errors?: Errors | null;
    responseContent?: ResponseContent | null;
}

