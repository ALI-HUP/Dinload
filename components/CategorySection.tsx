import Button from "@/components/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import MovieCard from "./MovieCard";

interface CategoryProps {
  title: string;
  items: { title: string; image: string; year: string; genre: string; score?: string }[];
}

export default function CategorySection({ title, items }: CategoryProps) {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32 py-8 md:py-12">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="h-6 w-1 md:h-8 md:w-1.5 bg-blue-primary rounded-full shadow-[0_0_15px_rgba(2,132,199,0.5)]" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter italic">
            {title}
          </h2>
        </div>
        <Button
          variant="white" 
          text="مشاهده همه" 
        />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-2 gap-y-6 sm:gap-x-4 sm:gap-y-8 md:gap-x-6 md:gap-y-10">
        {items.map((item, idx) => (
          <MovieCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}