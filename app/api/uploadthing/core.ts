import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const f = createUploadthing();

interface UploadMetadata {
  userId: string;
}

interface FileInfo {
  url: string;
  name: string;
  size: number;
  key: string;
}

export const ourFileRouter = {
  cabinImage: f({ image: { maxFileSize: '4MB', maxFileCount: 8 } })
    .middleware(async () => {
      const supabase = createServerComponentClient({ cookies });
      const {
        data: { session },
      } = await supabase.auth.getSession();
      
      if (!session) throw new Error('Unauthorized');
 
      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }: { metadata: UploadMetadata; file: FileInfo }) => {
      console.log('Upload complete for userId:', metadata.userId);
      console.log('File URL:', file.url);
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter; 