import { useState } from "react";

function ImageGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="image-gallery">
      {/* MAIN IMAGE */}
      <img
        className="main-image"
        src={`${import.meta.env.BASE_URL}images/${mainImage}`}
        alt="Property"
      />

      {/* THUMBNAILS */}
      <div className="thumbnails-wrapper">
        <div className="thumbnails">
          {images.map((img, index) => (
            <img
              key={index}
              src={`${import.meta.env.BASE_URL}images/${img}`}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;




