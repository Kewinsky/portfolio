import { Newsreader, Montserrat, Space_Grotesk } from "next/font/google";

export const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
});
