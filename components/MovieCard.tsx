"use client";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

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
        
        <div className="absolute inset-0 bg-linear-to-t from-bg-dark via-bg-dark/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-between p-5">
            
            <div className="h-5 w-full" />
            <PlayCircleIcon 
              sx={{ fontSize: 40 }} 
              className="text-text-primary drop-shadow-2xl transition-transform duration-500 scale-50 group-hover:scale-100" 
            />
            
            <div className="flex flex-wrap justify-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="px-2 py-1 bg-blue-bold/25 text-blue-bold border border-blue-bold rounded-md text-[10px] md:text-xs uppercase">
                {genre}
              </span>
              <span className="px-2 py-1 bg-yellow-400/25 text-yellow-400 border border-yellow-400 rounded-md text-[10px] md:text-xs uppercase">
                ★ {score}
              </span>
              <span className="px-2 py-1 bg-text-primary/25 text-text-primary border border-text-primary rounded-md text-[10px] md:text-xs uppercase">
                {year}
              </span>
            </div>
        </div>
      </div>
      
      <div className="mt-3 flex flex-col gap-1">
        <div className="flex items-center justify-between">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-tighter text-text-primary group-hover:text-blue-bold transition-colors duration-300 line-clamp-3 leading-tight min-h-[2.2rem] md:min-h-10">
                {title} ({year})
            </h3>
        </div>
      </div>
    </div>
  );
}