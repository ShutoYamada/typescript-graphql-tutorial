export type Chapter = {
    no: number;
    name: string;
    version: string;
    original: boolean;
    postDate: string;
}

export type ChapterParam = {
    no: number;
}

export type CreateParam = {
    no: number;
    name: string;
    version: string;
    original: boolean;
    postDate: string;
}

export type UpdateParam = {
    no: number;
    name: string;
    version: string;
    original: boolean;
    postDate: string;
}

export type Result = {
    data: Chapter;
    statusCode: number;
    error: Error[];
}

export type Error = {
    code: number;
    value: string;
}