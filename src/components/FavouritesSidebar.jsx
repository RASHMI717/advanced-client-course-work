import { useDrag, useDrop } from "react-dnd";
import { Link } from "react-router-dom";
import { ItemTypes } from "../constants/dndTypes";

import "./FavouritesSidebar.css";

// Separate component for draggable item to avoid hook rules violation in map
function FavouriteItem({ property, onRemove }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.FAVOURITE,
    item: { id: property.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="favourite-card"
      style={{ opacity: isDragging ? 0.4 : 1 }}
    >
      {/* Remove icon */}
      <i
        className="fa-solid fa-xmark remove-icon"
        onClick={(e) => {
          e.stopPropagation(); // prevent navigation
          onRemove(property.id);
        }}
      ></i>

      {/*  Click card → go to property page */}
      <Link to={`./property/${property.id}`} className="favourite-link">
        {/* Thumbnail */}
        <img
          src={`${import.meta.env.BASE_URL}images/${property.images[0]}`}
          alt={property.title}
        />

        {/* Info */}
        <div className="fav-info">
          <p className="fav-title">{property.title}</p>
          <span className="fav-price">£{property.price}</span>
        </div>
      </Link>
    </div>
  );
}

function FavouritesSidebar({ favourites, onRemove, onDrop, onClear }) {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.PROPERTY,
    canDrop: (item, monitor) => monitor.isOver({ shallow: true }),
    drop: (item) => onDrop(item),
  }));

  return (
    <div ref={drop} className="favourites-sidebar">
      <h3>Favourites</h3>

      {/* Empty state */}
      {favourites.length === 0 && (
        <div className="empty-state">
          <img
            src={`${import.meta.env.BASE_URL}images/empty-favourites.png`}
            alt="No favourites"
          />
          <p>No favourites yet</p>
          <span>Tap ⭐ on a property to save it</span>
        </div>
      )}

      {/*  Wrapper for scrolling */}
      <div className="favourites-list">
        {favourites.map((property) => (
          <FavouriteItem
            key={property.id}
            property={property}
            onRemove={onRemove}
          />
        ))}
      </div>

      {favourites.length > 0 && (
        <button className="clear-btn" onClick={onClear}>
          Clear Favourites
        </button>
      )}
    </div>
  );
}

export default FavouritesSidebar;
