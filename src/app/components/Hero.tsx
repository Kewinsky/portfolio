const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center py-20 md:py-32"
    >
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 px-4 md:px-8">
          <div className="flex-1 w-full md:w-auto">
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight">
                Kevin
                <br />
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight">
                Tao Anh
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-6 md:mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm md:text-base text-muted-foreground">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-center md:text-right">
            <div className="text-sm md:text-base text-muted-foreground">
              Based In Gdańsk, Poland
            </div>
            <div className="text-sm md:text-base font-medium">
              Software Engineer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
