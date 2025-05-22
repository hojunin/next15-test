import Link from "next/link";
import Image from "next/image";
import { photos, Photo } from "../photos/data"; // 사진 데이터 import
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FeedPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">사진 피드</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo: Photo) => (
          <Link
            key={photo.id}
            href={`/intercepting-routes/photos/${photo.id}`}
            passHref
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardHeader className="p-0">
                <div className="aspect-video relative w-full">
                  <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <CardTitle className="text-lg">{photo.title}</CardTitle>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <p className="text-xs text-muted-foreground">
                  클릭하여 상세보기
                </p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
