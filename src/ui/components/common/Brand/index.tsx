import Image, { ImageProps } from 'next/image';

const Brand = ({ src, alt }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={180}
      height={70}
      className="lg:w-44 lg:h-16 w-20 h-16"
      priority
    />
  );
};

export default Brand;
