"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BoltIcon from '@mui/icons-material/Bolt';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const plans = [
  { 
    id: "1-month", 
    fa: "اشتراک ۱ ماهه", 
    price: "۱۰۰,۰۰۰", 
    icon: <CalendarMonthIcon sx={{ fontSize: 40 }} />, 
    color: "from-blue-500/20" 
  },
  { 
    id: "3-month", 
    fa: "اشتراک ۳ ماهه", 
    price: "۳۰۰,۰۰۰", 
    icon: <BoltIcon sx={{ fontSize: 40 }} />, 
    color: "from-purple-500/20" 
  },
  { 
    id: "6-month", 
    fa: "اشتراک ۶ ماهه", 
    price: "۵۵۰,۰۰۰", 
    icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />, 
    color: "from-orange-500/20" 
  },
  { 
    id: "1-year", 
    fa: "اشتراک ۱ ساله", 
    price: "۱,۰۰۰,۰۰۰", 
    isBestValue: true,
    icon: <WorkspacePremiumIcon sx={{ fontSize: 40 }} />, 
    color: "from-yellow-500/20" 
  },
];

export default function SubscriptionPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-bg-primary" dir="rtl">
      <Navbar variant="return" />

      <section className="w-full max-w-7xl px-5 md:px-12 lg:px-20 py-10 flex flex-col gap-10 mb-20">
        
        <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-5xl font-black text-text-primary tracking-tighter uppercase italic">
                خرید اشتراک
            </h1>
            <div className="w-20 h-1.5 bg-blue-bold rounded-full shadow-[0_0_15px_rgba(2,132,199,0.5)]" />
            
            <div className="mt-6 flex items-center gap-3 bg-blue-bold/5 border border-blue-bold/20 p-4 rounded-2xl w-fit">
                <div className="w-2 h-2 rounded-full bg-blue-bold animate-pulse" />
                <p className="text-sm md:text-base font-bold text-text-primary">
                تماشای آنلاین نیازی به اشتراک ندارد و <span className="text-blue-bold">رایگان</span> است.
                </p>
            </div>
            
            <p className="text-text-primary/60 font-bold mt-2">
                برای حمایت از ما و دسترسی به لینک‌های دانلود پرسرعت، یکی از پلن‌های زیر را انتخاب کنید:
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <button 
              key={plan.id}
              className={`
                relative overflow-hidden group flex flex-col items-center justify-center gap-6
                aspect-square rounded-[3rem] bg-bg-light backdrop-blur-2xl transition-all duration-300
                border-2 ${plan.isBestValue ? 'border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.1)]' : 'border-blue-bold/50'}
                hover:border-blue-bold hover:scale-[1.05]
              `}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${plan.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {plan.isBestValue && (
                <div className="absolute top-6 left-6 bg-yellow-500 text-bg-dark text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                  بهترین قیمت
                </div>
              )}

              <div className={`
                relative z-10 p-5 rounded-3xl transition-all duration-300 shadow-xl
                ${plan.isBestValue ? 'bg-yellow-500/20 text-yellow-500 group-hover:bg-yellow-500' : 'bg-blue-bold/10 text-blue-bold group-hover:bg-blue-bold'}
                group-hover:text-text-primary
              `}>
                {plan.icon}
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <span className="text-xl md:text-2xl font-black text-text-primary">
                  {plan.fa}
                </span>
              </div>

              <div className="relative z-10 flex items-baseline gap-1 mt-2">
                <span className={`text-2xl md:text-3xl font-black ${plan.isBestValue ? 'text-yellow-500' : 'text-blue-bold'}`}>
                  {plan.price}
                </span>
                <span className="text-xs font-bold text-text-primary/50">تومان</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}