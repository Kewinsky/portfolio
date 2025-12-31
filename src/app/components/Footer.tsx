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
    <footer className="py-8 md:py-12">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground px-4 md:px-8">
        <p>© 2025 Kevin Tao Anh. All rights reserved.</p>
        <a
          href="#hero"
          onClick={handleScrollToTop}
          className="hover:text-foreground transition-colors cursor-pointer"
          aria-label="Scroll to top"
        >
          ▲
        </a>
      </div>
    </footer>
  );
};

export default Footer;
