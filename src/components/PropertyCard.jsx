import { useDrag } from "react-dnd";
import { useNavigate } from "react-router-dom";
import { ItemTypes } from "../constants/dndTypes";

import { PiMapPinLight } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";

import "./PropertyCard.css";


function PropertyCard({ property, onAddFavourite, isInFavourites }) {
  const navigate = useNavigate();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PROPERTY,
    item: property,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  function handleFavouriteClick(e) {
    e.stopPropagation(); // ⭐ prevent navigation
    onAddFavourite(property);
  }

  return (
    <div
      ref={drag}
      className="property-card"
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onClick={() => navigate(`/property/${property.id}`)}
    >
      {/* IMAGE */}
      <div className="property-image-wrapper">
        <img
          src={`/images/${property.images[0]}`}
          alt={property.title}
        />

        {/* SALE / RENT LABEL */}
        <span className={`tag ${property.category === "For Rent" ? "rent" : "sale"}`}>
          {property.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="property-content">
        {/* ADDRESS + STAR */}
        <div className="address-row">
          <span className="address">
            <PiMapPinLight /> {property.address || property.location}
          </span>

          <span className="favourite-star" onClick={handleFavouriteClick}>
            {isInFavourites ? (
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            ) : (
              <i className="fa-regular fa-star" style={{ color: "#b43232ff" }}></i>
            )}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="property-title">{property.title}</h3>

        {/* DESCRIPTION */}
        {property.shortDescription && (
          <p className="property-desc">{property.shortDescription}</p>
        )}

        <hr />

        {/* BOTTOM INFO */}
        <div className="property-info">
          <span className="price">£{property.price}</span>

          <span className="features">
            <IoBedOutline /> {property.bedrooms} &nbsp;&nbsp;
            <PiBathtub /> {property.bathrooms || 1}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;





