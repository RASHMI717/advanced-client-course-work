import { useParams } from "react-router-dom";
import properties from "../data/properties.json";
import ImageGallery from "../components/ImageGallery";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { LuMapPin } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubBold } from "react-icons/pi";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./PropertyPage.css";

function PropertyPage({ favourites, addFavourite, removeFavourite }) {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return <p>Property not found</p>;
  }

  const isFavourite = favourites.some((fav) => fav.id === property.id);

  function handleToggleFavourite() {
    if (isFavourite) {
      removeFavourite(property.id);
    } else {
      addFavourite(property);
    }
  }

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <div className="property-page">

        {/* FULL WIDTH IMAGE GALLERY */}
        <div className="property-page-gallery">
          <ImageGallery images={property.images} />
        </div>

        {/* CONTENT */}
        <div className="property-page-content">

          <div className="title-row">
            <h1 className="property-page-title">{property.title}</h1>
            <button
              className={`fav-btn-large ${isFavourite ? "active" : ""}`}
              onClick={handleToggleFavourite}
              aria-label="Toggle Favourite"
            >
              {isFavourite ? <FaHeart /> : <FaRegHeart />}
              <span>{isFavourite ? "Saved" : "Save"}</span>
            </button>
          </div>

          {/* LOCATION */}
          <div className="property-page-location">
            <LuMapPin />
            <span>{property.location}</span>
          </div>

          {/* META INFO */}
          <div className="property-page-meta">
            <span className="property-page-price">£{property.price}</span>

            <span className="meta-divider" />

            <span className="meta-item">
              <IoBedOutline />
              {property.bedrooms} Beds
            </span>

            <span className="meta-divider" />

            <span className="meta-item">
              <PiBathtubBold />
              {property.bathrooms} Baths
            </span>

            <span className="meta-divider" />

            <span className="meta-item">
              {property.type}
            </span>
          </div>

          {/* TABS */}
          <Tabs className="property-page-tabs">
            <TabList>
              <Tab>Description</Tab>
              <Tab>Floor Plan</Tab>
              <Tab>Map</Tab>
            </TabList>

            <TabPanel>
              <p className="property-page-description">
                {property.longDescription}
              </p>
            </TabPanel>

            <TabPanel>
              <img
                src={`${import.meta.env.BASE_URL}images/${property.floorPlan}`}
                alt="Floor Plan"
                className="floorplan-img"
              />
            </TabPanel>

            <TabPanel>
              <iframe
                title="map"
                loading="lazy"
                src={`https://www.google.com/maps?q=${property.location}&output=embed`}
              ></iframe>
            </TabPanel>
          </Tabs>

        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default PropertyPage;


