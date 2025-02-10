import Link from "next/link";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <header className="px-4 md:px-20 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between">
        <div className="flex">
          <Link className="mr-6" href="https://github.com/Kewinsky">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/avatar.JPG" />
              <AvatarFallback>KTA</AvatarFallback>
            </Avatar>
          </Link>
          {/* <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {routes.map((route) => (
                <Link
                  key={route}
                  href={`#${route}`}
                  className="transition-colors hover:text-foreground/80"
                >
                  {route}.
                </Link>
              ))}
            </nav>
          </div> */}
        </div>

        <ShinyButton href="#contact">get in touch.</ShinyButton>
      </div>
    </header>
  );
};

export default Navbar;
