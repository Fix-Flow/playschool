/**
 * File Storage Service
 *
 * Abstraction over S3-compatible object storage (MinIO in dev, AWS S3 in prod).
 * Handles file uploads, downloads, and URL generation.
 */

// TODO: Implement with @aws-sdk/client-s3 or minio SDK
// This is a placeholder for the storage abstraction layer

export interface UploadResult {
  key: string;
  url: string;
  size: number;
  mimetype: string;
}

export class StorageService {
  async upload(
    _file: Buffer,
    _filename: string,
    _mimetype: string
  ): Promise<UploadResult> {
    // TODO: Implement S3/MinIO upload
    throw new Error('StorageService.upload not implemented');
  }

  async getSignedUrl(_key: string, _expiresIn = 3600): Promise<string> {
    // TODO: Implement signed URL generation
    throw new Error('StorageService.getSignedUrl not implemented');
  }

  async delete(_key: string): Promise<void> {
    // TODO: Implement file deletion
    throw new Error('StorageService.delete not implemented');
  }
}

export const storageService = new StorageService();
