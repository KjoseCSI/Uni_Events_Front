export interface TopLevel {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:               number;
    documentId:       string;
    title:            string;
    EventTime:        Date;
    EventDescription: EventDescription[];
    createdAt:        Date;
    updatedAt:        Date;
    publishedAt:      Date;
    ImageEvent:       ImageEvent;
}

export interface EventDescription {
    type:     string;
    children: Child[];
}

export interface Child {
    type: string;
    text: string;
}

export interface ImageEvent {
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
