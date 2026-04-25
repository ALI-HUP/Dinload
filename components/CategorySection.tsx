import MovieCard from "./MovieCard";

interface CategoryProps {
  title: string;
  items: { title: string; image: string; year: string }[];
}

export default function CategorySection({ title, items }: CategoryProps) {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32 py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1.5 bg-blue-primary rounded-full shadow-[0_0_15px_rgba(2,132,199,0.5)]" />
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic">
            {title}
          </h2>
        </div>
        <button className="text-xs font-black uppercase tracking-widest text-blue-primary hover:bg-blue-primary/10 px-4 py-2 rounded-full transition-all">
          مشاهده همه
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
        {items.map((item, idx) => (
          <MovieCard genre={""} key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}