export interface Episode {
  number: string;
  url: string;
  size: string;
}

export interface QualityGroup {
  quality: string;
  type: string;
  episodes: Episode[];
}

export interface Season {
  seasonNumber: string;
  qualities: QualityGroup[];
}

export interface DownloadLink {
  quality: string;
  size: string;
  type: string;
  url: string;
}

export interface Movie {
  id: string;
  title: string;
  enTitle: string;
  description: string;
  image: string;
  backdrop: string;
  year: string;
  genre: string;
  score: string;
  duration: string;
  subtitle: string;
  isSeries: boolean;
  seasons?: Season[];
  links?: DownloadLink[];
}

export const moviesData: Movie[] = [
  {
    id: "arcane",
    title: "آرکین",
    enTitle: "Arcane",
    description: "در میان تضاد شدید بین شهرهای پیلتور و زون، دو خواهر در دو سوی مخالف جنگی بر سر فناوری‌های جادویی می‌جنگند...",
    image: "/poster/arcane.jpg",
    backdrop: "/poster/arcane.jpg",
    year: "2024",
    genre: "انیمیشن",
    score: "9.0",
    duration: "۴۵ دقیقه",
    subtitle: "زیرنویس چسبیده",
    isSeries: true,
    seasons: [
      {
        seasonNumber: "1",
        qualities: [
          {
            quality: "1080p",
            type: "SoftSub",
            episodes: [
              { number: "1", size: "450MB", url: "#" },
              { number: "2", size: "430MB", url: "#" },
              { number: "3", size: "460MB", url: "#" },
            ]
          },
          {
            quality: "720p",
            type: "HardSub",
            episodes: [
              { number: "1", size: "250MB", url: "#" },
              { number: "2", size: "240MB", url: "#" },
            ]
          }
        ]
      },
    {
        seasonNumber: "2",
        qualities: [
          {
            quality: "1080p",
            type: "SoftSub",
            episodes: [
              { number: "1", size: "450MB", url: "#" },
              { number: "2", size: "430MB", url: "#" },
              { number: "3", size: "460MB", url: "#" },
            ]
          },
          {
            quality: "720p",
            type: "HardSub",
            episodes: [
              { number: "1", size: "250MB", url: "#" },
              { number: "2", size: "240MB", url: "#" },
            ]
          }
        ]
      }
    ]
  }
];