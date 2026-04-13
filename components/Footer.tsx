import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="
        fixed bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8
        left-1/2 -translate-x-1/2

        w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]
        max-w-5xl shadow-2xl
      "
    >
      <div className="backdrop-blur-xl bg-black/70 text-white rounded-full border border-white/35">
        
        <div className="grid grid-cols-4 items-center">
          
          <Link href="/" className="group">
            <div className="flex items-center justify-center py-3 rounded-full transition-all duration-200 group-hover:bg-white/20 group-hover:scale-105">
              خانه
            </div>
          </Link>

          <Link href="/" className="group">
            <div className="flex items-center justify-center py-3 rounded-full transition-all duration-200 group-hover:bg-white/20 group-hover:scale-105">
              جستجو
            </div>
          </Link>

          <Link href="/" className="group">
            <div className="flex items-center justify-center py-3 rounded-full transition-all duration-200 group-hover:bg-white/20 group-hover:scale-105">
              پروفایل
            </div>
          </Link>

          <Link href="/" className="group">
            <div className="flex items-center justify-center py-3 rounded-full transition-all duration-200 group-hover:bg-white/20 group-hover:scale-105">
              داشبورد
            </div>
          </Link>

        </div>

      </div>
    </div>
  );
}



// w-[85%] → موبایل کوچک
// sm:w-[80%] → موبایل بزرگ
// md:w-[70%] → تبلت
// lg:w-[60%] → لپتاپ
// xl:w-[50%] → دسکتاپ و تلویزیون
// max-w-5xl → جلوگیری از کشیدگی بد