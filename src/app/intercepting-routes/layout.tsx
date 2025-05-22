export default function InterceptingLayout({
  modal, // @modal slot
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
