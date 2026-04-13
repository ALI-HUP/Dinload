import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="
        fixed bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8
        left-1/2 -translate-x-1/2

        w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]
        max-w-5xl
      "
    >
      <div className="backdrop-blur-xl bg-black/70 text-white rounded-full flex items-center border border-white/35">
        
        <Link href="/" className="flex-1 text-center rounded-full hover:bg-white/20 transition">
          <div className="p-2 sm:p-3 md:p-3 lg:p-3 transition-all duration-200 hover:scale-110">
            خانه
          </div>
        </Link>

        <Link href="/" className="flex-1 text-center rounded-full hover:bg-white/20 transition">
          <div className="p-2 sm:p-3 md:p-3 lg:p-3 transition-all duration-200 hover:scale-110">
            جستجو
          </div>
        </Link>

        <Link href="/" className="flex-1 text-center rounded-full hover:bg-white/20 transition">
          <div className="p-2 sm:p-3 md:p-3 lg:p-3 transition-all duration-200 hover:scale-110">
            پروفایل
          </div>
        </Link>

        <Link href="/" className="flex-1 text-center rounded-full hover:bg-white/20 transition">
          <div className="p-2 sm:p-3 md:p-3 lg:p-3 transition-all duration-200 hover:scale-110">
            داشبورد
          </div>
        </Link>

      </div>
    </div>
  );
}



// w-[90%] → موبایل کوچک
// sm:w-[80%] → موبایل بزرگ
// md:w-[70%] → تبلت
// lg:w-[60%] → لپتاپ
// xl:w-[50%] → دسکتاپ و تلویزیون
// max-w-5xl → جلوگیری از کشیدگی بد