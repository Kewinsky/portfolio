import { TextAnimate } from "@/components/magicui/text-animate";
import { WavyBackground } from "./ui/wavy-background";
import { cn } from "@/lib/utils";
import { montserrat } from "../fonts";
import { FlipWords } from "./ui/flip-words";

const Header = () => {
  const words = [
    "full-stack developer.",
    "minimalist.",
    "car enthusiast.",
    "dog lover.",
  ];
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <section className={cn("py-12 md:py-24 lg:py-32", montserrat.className)}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              <TextAnimate animation="blurIn" as="h1">
                kevin_tao_anh.
              </TextAnimate>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
              i am
              <FlipWords words={words} />
            </p>
          </div>
        </div>
      </section>
    </WavyBackground>
  );
};

export default Header;
