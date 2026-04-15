import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="
        fixed bottom-5
        m-auto left-0 right-0

        w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[50%]
        max-w-5xl shadow-2xl
      "
    >
      <div className="backdrop-blur-xl bg-black/70 text-white rounded-full flex justify-around items-center border border-white/35">
        <Link href="/" className="flex-1 text-center p-3 rounded-full hover:bg-white/20">
          خانه
        </Link>

        <Link href="/" className="flex-1 text-center p-3 rounded-full hover:bg-white/20">
          جستجو
        </Link>

        <Link href="/" className="flex-1 text-center p-3 rounded-full hover:bg-white/20">
          پروفایل
        </Link>

        <Link href="/" className="flex-1 text-center p-3 rounded-full hover:bg-white/20">
          داشبورد
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