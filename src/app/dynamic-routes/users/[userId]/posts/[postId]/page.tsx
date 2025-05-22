export default function UserPostPage({
  params,
}: {
  params: { userId: string; postId: string };
}) {
  return (
    <div>
      <h2>사용자 게시물 페이지</h2>
      <p>사용자 ID: {params.userId}</p>
      <p>게시물 ID: {params.postId}</p>
    </div>
  );
}
