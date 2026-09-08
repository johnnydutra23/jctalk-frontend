export type FileAttachment = {
    id: number;
    name: string;
    extension: string;
    size: number;
    src: string;
    content_type: string;
}

export type AudioAttachment = {
    id: number;
    src: string;
}

export type Attachment = {
    file?: FileAttachment;
    audio?: AudioAttachment;
}

