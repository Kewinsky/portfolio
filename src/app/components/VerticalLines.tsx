const VerticalLines = () => {
  return (
    <div className="fixed inset-y-0 left-0 right-0 pointer-events-none z-0">
      <div className="container mx-auto px-4 md:px-20 h-full relative">
        <div className="absolute left-4 md:left-20 top-0 bottom-0 w-px bg-border" />
        <div className="absolute right-4 md:right-20 top-0 bottom-0 w-px bg-border" />
      </div>
    </div>
  );
};

export default VerticalLines;

