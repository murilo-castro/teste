
import Image from "next/image";

type BannerProps = {
  src: string;
  alt: string;
};

export default function Banner({ src, alt }: BannerProps) {
  return (
    <div className="overflow-hidden h-full w-full">
      <Image className='w-full' src={src} alt={alt} width={100} height={100} />
    </div>
  );
};


