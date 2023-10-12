import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src="/logo.webp" alt="logo" height={20} width={20} className="dark:hidden" />
      <p className={cn("font-semibold dark:uppercase", font.className)}>Planner</p>
    </div>
  );
};
