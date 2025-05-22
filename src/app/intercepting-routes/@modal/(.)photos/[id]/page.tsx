const photosData: {
  [key: string]: { title: string; src: string; description: string };
} = {
  "1": {
    title: "아름다운 풍경",
    src: "https://via.placeholder.com/400/FF0000/FFFFFF?Text=ModalPhoto1",
    description: "모달 - 붉은 색 배경의 첫 번째 사진입니다.",
  },
  "2": {
    title: "도시의 야경",
    src: "https://via.placeholder.com/400/00FF00/FFFFFF?Text=ModalPhoto2",
    description: "모달 - 녹색 배경의 두 번째 사진입니다.",
  },
  "3": {
    title: "귀여운 동물",
    src: "https://via.placeholder.com/400/0000FF/FFFFFF?Text=ModalPhoto3",
    description: "모달 - 파란색 배경의 세 번째 사진입니다.",
  },
};

export default function PhotoModal({ params }: { params: { id: string } }) {
  const photo = photosData[params.id];

  if (!photo) {
    // 실제로는 이 경로로 접근되지 않거나, 다른 방식으로 처리될 수 있음
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "8px",
          maxWidth: "90%",
          maxHeight: "90%",
          overflow: "auto",
        }}
      >
        <h3>{photo.title} (모달)</h3>
        <img
          src={photo.src}
          alt={photo.title}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <p>{photo.description}</p>
        <p>
          이 내용은 <code>(.)photos/[id]</code> 경로를 통해 가로채져서 모달로
          표시됩니다.
        </p>
        <a
          href="/intercepting-routes/feed"
          style={{ display: "block", marginTop: "1rem" }}
        >
          모달 닫기 (피드로 돌아가기)
        </a>
      </div>
    </div>
  );
}
