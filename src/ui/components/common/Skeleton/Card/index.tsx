interface CardSkeletonProps {
  quantity?: number;
}

const CardSkeleton = ({ quantity = 1 }: CardSkeletonProps) => {
  return (
    <div
      className={`grid lg:grid-cols-${quantity} md:grid-cols-2 grid-cols-1 w-full h-card-sm container`}
    >
      {Array.from({ length: quantity }).map((_, index) => (
        <div key={index} className="animate-pulse w-card-sm overflow-hidden">
          <div className=" my-5 h-card-img bg-gray-300" />
          <div className="py-4">
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
