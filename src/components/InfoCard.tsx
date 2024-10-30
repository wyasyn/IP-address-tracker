export default function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center text-center text-pretty sm:items-start sm:text-start">
      <h3 className="text-sm">{title}</h3>
      <p className="font-bold text-black text-xl">{value}</p>
    </div>
  );
}
