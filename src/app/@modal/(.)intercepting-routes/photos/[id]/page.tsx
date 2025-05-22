"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { getPhotoById, Photo } from "@/app/intercepting-routes/photos/data"; // 절대 경로 사용
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

interface PhotoModalPageProps {
  params: { id: string };
}

export default function PhotoModalPage({ params }: PhotoModalPageProps) {
  const router = useRouter();
  const photo: Photo | undefined = getPhotoById(params.id);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // 사진 데이터가 없으면 모달을 띄우지 않고 이전 페이지로 돌아갑니다.
    if (!photo) {
      router.back();
      return;
    }
  }, [photo, router]);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setIsOpen(false);
      // router.back()은 Dialog의 unmount 이후 또는 애니메이션 완료 후 호출되는 것이 이상적일 수 있으나,
      // shadcn/ui Dialog의 onOpenChange는 닫힐 때 즉시 호출되므로 여기서 back 처리합니다.
      // isOpen 상태를 false로 만들면 Dialog가 unmount 되기 시작합니다.
      // 의도치 않은 깜빡임을 줄이기 위해, isOpen이 false가 되면 어차피 Dialog가 사라지므로
      // photo가 없을 때의 useEffect에서처럼 즉시 router.back()을 호출하는 것이 아니라
      // Dialog가 닫히는 애니메이션을 존중하도록 router.back()을 조금 지연시킬 수도 있지만,
      // 여기서는 shadcn/ui의 기본 동작에 따라 즉시 뒤로가도록 합니다.
      router.back();
    }
  };

  // 사진 데이터가 없으면 아무것도 렌더링하지 않습니다 (useEffect에서 router.back() 처리).
  if (!photo) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <div className="aspect-video relative w-full">
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, 600px"
          />
        </div>
        <DialogHeader className="p-6 pt-4">
          <DialogTitle className="text-2xl">{photo.title}</DialogTitle>
          <DialogDescription className="text-md text-muted-foreground pt-1">
            {photo.description}
          </DialogDescription>
        </DialogHeader>
        {/* 모달 내부에 추가적인 버튼이나 내용을 넣을 수 있습니다. */}
      </DialogContent>
    </Dialog>
  );
}
