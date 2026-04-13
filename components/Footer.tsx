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
      <div className="backdrop-blur-xl bg-black/70 text-white rounded-full flex items-center border border-white/35">
        <Link href="/" className="flex-1 text-center p-3 rounded-full hover:bg-white/20">
          <p className=" transition duration-200 hover:scale-110">خانه</p>
        </Link>

        <Link href="/" className="flex-1 text-center p-3 rounded-full hover:bg-white/20">
          <p className=" transition duration-200 hover:scale-110">جستجو</p>
        </Link>

        <Link href="/" className="flex-1 text-center p-3 rounded-full hover:bg-white/20">
          <p className=" transition duration-200 hover:scale-110">پروفایل</p>
        </Link>

        <Link href="/" className="flex-1 text-center p-3 rounded-full hover:bg-white/20">
          <p className=" transition duration-200 hover:scale-110">داشبورد</p>
        </Link>
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