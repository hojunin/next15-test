export interface Photo {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

export const photos: Photo[] = [
  {
    id: "1",
    title: "아름다운 산 정상",
    imageUrl:
      "https://images.unsplash.com/photo-1506755855567-92ff770e8d00?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "해질녘 눈 덮인 산 정상의 멋진 풍경입니다.",
  },
  {
    id: "2",
    title: "고요한 해변",
    imageUrl:
      "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "맑고 푸른 바닷물이 있는 평화로운 해변의 모습입니다.",
  },
  {
    id: "3",
    title: "활기찬 도시 야경",
    imageUrl:
      "https://images.unsplash.com/photo-1571566882372-1598d88abd90?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "수많은 불빛으로 반짝이는 도시의 밤 풍경입니다.",
  },
  {
    id: "4",
    title: "신비로운 숲길",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664299749481-ac8dc8b49754?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "안개가 자욱한 신비로운 분위기의 숲 속 오솔길입니다.",
  },
  {
    id: "5",
    title: "사막의 일몰",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "광활한 사막 위로 지는 아름다운 태양의 모습입니다.",
  },
  {
    id: "6",
    title: "별 헤는 밤",
    imageUrl:
      "https://images.unsplash.com/photo-1745176593885-c1d466a6dff5?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "수많은 별들이 반짝이는 밤하늘의 풍경입니다.",
  },
];

export const getPhotoById = (id: string): Photo | undefined => {
  return photos.find((p) => p.id === id);
};
