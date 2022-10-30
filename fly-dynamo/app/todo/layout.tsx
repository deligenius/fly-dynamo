export default function TodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Todo Header </h1>
      <div>{children}</div>
    </div>
  );
}
