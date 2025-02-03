
export interface TopLevel {
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
