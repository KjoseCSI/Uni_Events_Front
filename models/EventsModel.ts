
/* export interface TopLevel {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:                number;
    documentId:        string;
    event_name:        string;
    event_date:        Date;
    event_description: string;
    latitude:          number;
    longitude:         number;
    event_place:       string;
    event_time:        string;
    event_type:        string;
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
    event_photo:       EventPhoto;
}

export interface EventPhoto {
    id:         number;
    documentId: string;
    url:        string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
 */

//
export interface TopLevel {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:                number;
    documentId:        string;
    event_name:        string;
    event_date:        Date;
    event_time:        string;
    event_type:        string;
    event_place:       string;
    latitude:          number;
    longitude:         number;
    event_description: string;
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
    event_photo:       EventPhoto[];
}

export interface EventPhoto {
    id:                number;
    documentId:        string;
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          Provider;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
}

export enum EXT {
    JPEG = ".jpeg",
}

export interface Formats {
    thumbnail: Small;
    small?:    Small;
}

export interface Small {
    ext:         EXT;
    url:         string;
    hash:        string;
    mime:        MIME;
    name:        string;
    path:        null;
    size:        number;
    width:       number;
    height:      number;
    sizeInBytes: number;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
}

export enum Provider {
    StrapiProviderUploadStrapiCloud = "strapi-provider-upload-strapi-cloud",
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
