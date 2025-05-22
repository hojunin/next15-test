interface MinimalPageProps {
  params: { id: string };
}

export default function MinimalPhotoModalPage({ params }: MinimalPageProps) {
  if (!params || typeof params.id !== "string") {
    return <div>Invalid params</div>;
  }
  return <div>Modal for ID: {params.id}</div>;
}
