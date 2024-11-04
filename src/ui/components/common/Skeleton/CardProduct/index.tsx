const CardProductSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-6 my-0 mx-auto">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse w-card-product overflow-hidden"
        >
          <div className="h-card-img bg-gray-300" />
          <div className="py-4">
            <div className="h-4 bg-gray-300 mb-2" />
            <div className="h-3 bg-gray-300 w-1/2 mb-2" />
            <div className="h-3 bg-gray-300 w-1/4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProductSkeleton;
