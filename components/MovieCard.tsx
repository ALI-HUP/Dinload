"use client";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Badge from "@/components/Badge";

interface MovieCardProps {
  title: string;
  image: string;
  year: string;
  genre: string;
  score?: string;
}

export default function MovieCard({ title, image, year, genre, score = "8.5" }: MovieCardProps) {
  return (
    <div className="group relative flex flex-col cursor-pointer">
      <div className="relative aspect-2/3 w-full overflow-hidden rounded-2xl border border-text-primary/5 shadow-2xl transition-all duration-500 group-hover:scale-[1.05] group-hover:border-blue-primary">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        <div className="
          absolute inset-0 
          bg-linear-to-t from-bg-dark/95 via-bg-dark/60 to-transparent 
          backdrop-blur-[2px]
          opacity-0 transition-all duration-300 group-hover:opacity-100 
          flex flex-col gap-2 items-center justify-end p-5
        ">
          <Badge
            variant="yellow"
            className="p-1 text-xs md:text-sm"
          >
            {score} ★
          </Badge>
          <Badge
            variant="white"
            className="p-1 text-xs md:text-sm"
          >
            {year}
          </Badge>
          <Badge
            variant="blue"
            className="p-1 text-xs md:text-sm"
          >
            {genre}
          </Badge>
        </div>
      </div>
      
      <div className="mt-3 flex flex-col gap-1" dir='ltr'>
        <div className="flex items-center justify-between">
            <h3 className="text-xs md:text-sm pl-1 font-bold uppercase tracking-tighter text-text-primary group-hover:text-blue-bold transition-colors duration-300 line-clamp-3 leading-tight min-h-[2.2rem] md:min-h-10">
                {title} ({year})
            </h3>
        </div>
      </div>
    </div>
  );
}