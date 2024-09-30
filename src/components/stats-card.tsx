interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <div className="bg-transparent shadow-none">
      <h1 className="text-5xl font-bold text-blue-gray-800">{count}</h1>
      <h6 className="text-lg font-medium text-blue-gray-800 mt-1">{title}</h6>
    </div>
  );
}

export default StatsCard;
