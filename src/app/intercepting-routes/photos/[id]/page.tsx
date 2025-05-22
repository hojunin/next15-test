import Image from "next/image";
import { getPhotoById, Photo } from "../data"; // 경로 수정
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PhotoPageProps {
  params: { id: string };
}

export default function PhotoPage({ params }: PhotoPageProps) {
  const photo: Photo | undefined = getPhotoById(params.id);

  if (!photo) {
    notFound(); // 사진이 없으면 not-found.tsx를 보여줌 (루트 또는 가장 가까운)
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
      <Card className="w-full max-w-2xl overflow-hidden">
        <CardHeader className="p-0">
          <div className="aspect-video relative w-full">
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              fill
              className="object-cover"
              priority // LCP 이미지이므로 priority 설정
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-3xl mb-2">{photo.title}</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            {photo.description}
          </CardDescription>
        </CardContent>
      </Card>
      <div className="mt-8">
        <Button asChild variant="outline">
          <Link href="/intercepting-routes/feed">피드로 돌아가기</Link>
        </Button>
      </div>
    </div>
  );
}

// generateStaticParams를 사용하여 빌드 시점에 정적 페이지 생성 (선택 사항)
// export async function generateStaticParams() {
//   const { photos } = await import('../data'); // 경로 수정
//   return photos.map((photo) => ({
//     id: photo.id,
//   }));
// }
