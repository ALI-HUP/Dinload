import Link from "next/link";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function Footer() {
  return (
    <div
      className="
        fixed bottom-5
        m-auto left-0 right-0

        w-[85%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[50%]
        max-w-5xl shadow-2xl
      "
    >
      <div className="backdrop-blur-xl bg-black/70 text-white rounded-full flex items-center border border-white/35">
        
        <Link href="/" className="flex-1 flex items-center justify-center p-3 rounded-full hover:bg-white/20 transition">
          <HomeIcon fontSize="medium" />
        </Link>

        <Link href="/" className="flex-1 flex items-center justify-center p-3 rounded-full hover:bg-white/20 transition">
          <SearchIcon fontSize="medium" />
        </Link>

        <Link href="/" className="flex-1 flex items-center justify-center p-3 rounded-full hover:bg-white/20 transition">
          <PersonIcon fontSize="medium" />
        </Link>

        <Link href="/" className="flex-1 flex items-center justify-center p-3 rounded-full hover:bg-white/20 transition">
          <DashboardIcon fontSize="medium" />
        </Link>

      </div>
    </div>
  );
}



// w-[85%] → موبایل کوچک
// sm:w-[85%] → موبایل بزرگ
// md:w-[75%] → تبلت
// lg:w-[65%] → لپتاپ
// xl:w-[50%] → دسکتاپ و تلویزیون
// max-w-5xl → جلوگیری از کشیدگی بد