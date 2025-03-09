export interface UploadFileResponse {
  url: string;
  name: string;
  size: number;
  key: string;
  serverData: Record<string, unknown>;
}

export interface FileWithPath extends File {
  readonly path?: string;
}

export interface UploadThingError {
  code: string;
  message: string;
  data?: Record<string, unknown>;
} 