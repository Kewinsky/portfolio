import { TextAnimate } from "@/components/magicui/text-animate";
import { cn } from "@/lib/utils";
import { montserrat } from "../fonts";
import { WordRotate } from "@/components/magicui/word-rotate";
import { DotPattern } from "@/components/magicui/dot-pattern";

const Header = () => {
  const words = [
    "full-stack developer.",
    "minimalist.",
    "car enthusiast.",
    "dog lover.",
  ];
  return (
    <div className="h-screen flex flex-col items-center justify-center max-w-4xl mx-auto pb-40">
      <section className={cn("py-12 md:py-24 lg:py-32", montserrat.className)}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <TextAnimate
              animation="blurIn"
              as="h1"
              className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
            >
              {`< kevin_tao_anh />`}
            </TextAnimate>

            <div className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
              <WordRotate words={words} />
            </div>
            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
              )}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
