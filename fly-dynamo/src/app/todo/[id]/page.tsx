export default function TodoIdPage({
  params,
  searchParams,
}: {
  params: {
    id: string;
  };
  searchParams: {
    q: string;
  };
}) {
  console.log(params, searchParams);
  return (
    <div>
      <div>params: {params.id} </div>
      <div>q: {searchParams.q} </div>
    </div>
  );
}
