// components/Carousel.tsx
import { useState, useEffect } from "react";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";

interface CarouselProps {
  banners: string[];
}

const ResponsiveCarousel: React.FC<CarouselProps> = ({ banners }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % banners.length);
      }, 3000); // Ajuste o valor para o intervalo desejado (em milissegundos)
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying, currentImage, banners]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % banners.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="relative">
      <img
        src={banners[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="w-full h-auto"
      />

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
        onClick={prevImage}
      >
        <TbPlayerTrackPrevFilled />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        onClick={nextImage}
      >
        <TbPlayerTrackNextFilled />
      </button>
      <button className="absolute bottom-4 left-4" onClick={togglePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default ResponsiveCarousel;
