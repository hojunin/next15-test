// 예시 블로그 게시물 데이터
const postsData: {
  [key: string]: { title: string; content: string; date: string };
} = {
  "hello-world": {
    title: "Hello World",
    content: "This is the first post!",
    date: "2023-01-01",
  },
  "another-post": {
    title: "Another Post",
    content: "This is another exciting post.",
    date: "2023-01-05",
  },
  "dynamic-routing-example": {
    title: "Dynamic Routing Example",
    content: "Next.js dynamic routing is powerful!",
    date: "2023-01-10",
  },
};

// generateStaticParams: 빌드 시점에 정적으로 생성할 경로들을 반환합니다.
export async function generateStaticParams() {
  return Object.keys(postsData).map((slug) => ({
    slug: slug,
  }));
}

// params를 통해 동적 세그먼트 값을 받을 수 있습니다.
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = postsData[params.slug];

  if (!post) {
    // 실제 애플리케이션에서는 notFound()를 호출하거나 에러 처리를 할 수 있습니다.
    return <div>게시물을 찾을 수 없습니다. (slug: {params.slug})</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>
        <i>게시일: {post.date}</i>
      </p>
      <article>
        <p>{post.content}</p>
      </article>
      <p style={{ marginTop: "1rem" }}>현재 Slug: {params.slug}</p>
    </div>
  );
}
