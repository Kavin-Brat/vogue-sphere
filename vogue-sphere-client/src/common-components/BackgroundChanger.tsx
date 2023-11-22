import React, { useState, useEffect } from "react"; // Assuming you have a child component for background images
import image1 from "../assets/img/bg-image1.jpg";
import image2 from "../assets/img/bg-image2.jpg";
import image3 from "../assets/img/bg-image3.jpg";
const images: string[] = [
  image1,
  image2,
  image3,
  // Add more image URLs as needed
];

const BackgroundImage = ({ imageUrl }: { imageUrl: string }) => {
  const styles: object = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    transition: "opacity 10s ease-in-out",
  };

  return <div style={styles}></div>;
};

interface BackgroundChangerProps {
  children: React.ReactNode;
}

const BackgroundChanger: React.FC<BackgroundChangerProps> = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 50000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      <BackgroundImage imageUrl={images[currentImageIndex]} />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  );
};

export default BackgroundChanger;