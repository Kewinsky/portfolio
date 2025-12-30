"use client";

const Footer = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 md:px-20 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © 2025 Kevin Tao Anh. All rights reserved.
        </p>
        <a
          href="#hero"
          onClick={handleScrollToTop}
          className="text-sm hover:text-foreground transition-colors cursor-pointer"
          aria-label="Scroll to top"
        >
          ▲
        </a>
      </div>
    </footer>
  );
};

export default Footer;
