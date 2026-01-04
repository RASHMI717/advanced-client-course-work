import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [filters, setFilters] = useState({
    category: "Any",
    type: "",
    minPrice: "",
    maxPrice: "",
    minBeds: "",
    maxBeds: "",
    postcode: "",
    dateFrom: "",
    dateTo: "",
  });

  function handleChange(e) {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  }

  function handleCategoryChange(value) {
    setFilters({
      ...filters,
      category: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(filters);
  }

  return (
    <div className="search-wrapper">

      {/* 🔝 CATEGORY TABS */}
      <div className="category-tabs">
        <span
          className={filters.category === "Any" ? "active" : ""}
          onClick={() => handleCategoryChange("Any")}
        >
          Any
        </span>

        <span className="divider" />

        <span
          className={filters.category === "For Sale" ? "active" : ""}
          onClick={() => handleCategoryChange("For Sale")}
        >
          Buy
        </span>

        <span className="divider" />

        <span
          className={filters.category === "For Rent" ? "active" : ""}
          onClick={() => handleCategoryChange("For Rent")}
        >
          Rent
        </span>
      </div>

      {/* 🔽 SEARCH CARD */}
      <form className="search-bar" onSubmit={handleSubmit}>

        {/* Property type (acts like placeholder) */}
        <select name="type" value={filters.type} onChange={handleChange}>
          <option value="" disabled>
            Property Type
          </option>
          <option value="Any">Any</option>
          <option value="House">House</option>
          <option value="Flat">Flat</option>
        </select>

        {/* Postcode */}
        <input
          name="postcode"
          placeholder="Postcode area"
          onChange={handleChange}
        />

        {/* Price */}
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          onChange={handleChange}
        />

        {/* Bedrooms */}
        <input
          type="number"
          name="minBeds"
          placeholder="Min Beds"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxBeds"
          placeholder="Max Beds"
          onChange={handleChange}
        />

        {/* Date Added (correct placeholder-style guidance) */}
        <input
          type="date"
          name="dateFrom"
          aria-label="Date from"
          title="Date from"
          onChange={handleChange}
        />
        <input
          type="date"
          name="dateTo"
          aria-label="Date to"
          title="Date to"
          onChange={handleChange}
        />

        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
          &nbsp; Search
        </button>
      </form>

    </div>
  );
}

export default SearchBar;

