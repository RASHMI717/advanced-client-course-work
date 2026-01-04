import { useDrop } from "react-dnd";
import { Link } from "react-router-dom";
import { ItemTypes } from "../constants/dndTypes";

import "./FavouritesSidebar.css";

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
            src="/images/empty-favourites.png"
            alt="No favourites"
          />
          <p>No favourites yet</p>
          <span>Tap ⭐ on a property to save it</span>
        </div>
      )}

      {/* 🔑 Wrapper for scrolling */}
      <div className="favourites-list">
        {favourites.map((property) => (
          <div key={property.id} className="favourite-card">

            {/* ❌ Remove icon */}
            <i
              className="fa-solid fa-xmark remove-icon"
              onClick={(e) => {
                e.stopPropagation(); // 🚫 prevent navigation
                onRemove(property.id);
              }}
            ></i>

            {/* ✅ Click card → go to property page */}
            <Link
              to={`/property/${property.id}`}
              className="favourite-link"
            >
              {/* Thumbnail */}
              <img
                src={`/images/${property.images[0]}`}
                alt={property.title}
              />

              {/* Info */}
              <div className="fav-info">
                <p className="fav-title">{property.title}</p>
                <span className="fav-price">£{property.price}</span>
              </div>
            </Link>

          </div>
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
