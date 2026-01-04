import { useState } from "react";

function ImageGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="image-gallery">
      {/* Large image */}
      <img
        className="main-image"
        src={`/images/${mainImage}`}
        alt="Property"
      />

      {/* Thumbnails */}
      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={`/images/${img}`}
            alt="Thumbnail"
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;


