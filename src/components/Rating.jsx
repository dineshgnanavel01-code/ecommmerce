import { Star } from "lucide-react";

const Rating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      <Star size={14} className="fill-amber-400" />
      <span className="text-xs font-bold text-slate-700">{rating}</span>
    </div>
  );
};

export default Rating;