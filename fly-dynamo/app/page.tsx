import { notFound } from "next/navigation";

export default function Page({
  searchParams,
}: {
  searchParams: {
    q: string;
  };
}) {
  console.log(searchParams);
  if (searchParams.q) {
    notFound();
  }

  return <h1>Hello, Next.js!</h1>;
}
