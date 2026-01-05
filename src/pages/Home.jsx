import { useState } from "react";
import propertiesData from "../data/properties.json";

import "./Home.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";
import FavouritesSidebar from "../components/FavouritesSidebar";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import RemoveDropZone from "../components/RemoveDropZone"; // 🆕 import

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// ✅ RECEIVE favourites + handlers from App.jsx
function Home({ favourites, addFavourite, removeFavourite, clearFavourites }) {
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);

  function handleSearch(filters) {
    const results = propertiesData.filter((p) => {
      return (
        (filters.category === "Any" || p.category === filters.category) &&
        (filters.type === "Any" || p.type === filters.type) &&
        (!filters.minPrice || p.price >= filters.minPrice) &&
        (!filters.maxPrice || p.price <= filters.maxPrice) &&
        (!filters.minBeds || p.bedrooms >= filters.minBeds) &&
        (!filters.maxBeds || p.bedrooms <= filters.maxBeds) &&
        (!filters.postcode ||
          p.postcode.toLowerCase().startsWith(filters.postcode.toLowerCase())) &&
        (!filters.dateFrom ||
          new Date(p.dateAdded) >= new Date(filters.dateFrom)) &&
        (!filters.dateTo ||
          new Date(p.dateAdded) <= new Date(filters.dateTo))
      );
    });

    setFilteredProperties(results);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      {/* 🗑️ DRAG TO REMOVE ZONE */}
      <RemoveDropZone onRemove={removeFavourite} />

      <Navbar />

      {/* Hero section */}
      <section id="home">
        <Hero />
      </section>

      {/* 🔑 SEARCH BAR (shared visually between Hero + Properties via CSS) */}
      <SearchBar onSearch={handleSearch} />

      {/* ✅ EVERYTHING INSIDE ONE SECTION (FIXED) */}
      <section id="properties" className="properties-section">
        {/* HEADER */}
        <p className="section-subtitle">PROPERTIES</p>
        <h2 className="section-title">
          Explore the latest properties available
        </h2>

        {/* CONTENT */}
        <div className="layout">
          <div className="property-list">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onAddFavourite={addFavourite}
                isInFavourites={favourites.some(
                  (fav) => fav.id === property.id
                )}
              />
            ))}
          </div>

          <FavouritesSidebar
            favourites={favourites}
            onRemove={removeFavourite}
            onDrop={addFavourite}
            onClear={clearFavourites}
          />
        </div>
      </section>

      {/* About section */}
      <section id="about">
        <About />
      </section>

      {/* Services section */}
      <section id="services">
        <Services />
      </section>

      {/* Testimonials section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Contact section */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </DndProvider>
  );
}

export default Home;









