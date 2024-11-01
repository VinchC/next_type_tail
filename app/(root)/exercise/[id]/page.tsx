export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <p className="text-3xl">`Voici la page relative à l&apos;exercice${id}`</p>;
}
