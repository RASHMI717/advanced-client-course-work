import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [filters, setFilters] = useState({
    category: "Any",
    type: null, // changed to null for react-select compatibility
    minPrice: "",
    maxPrice: "",
    minBeds: "",
    maxBeds: "",
    postcode: "",
    dateFrom: null, // changed to null for DatePicker
    dateTo: null,   // changed to null for DatePicker
  });

  const typeOptions = [
    { value: "Any", label: "Any Type" },
    { value: "House", label: "House" },
    { value: "Flat", label: "Flat" },
    { value: "Bungalow", label: "Bungalow" },
  ];

  // Custom styles for React Select to match the dark glass theme
  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      borderColor: state.isFocused ? "#f5d98b" : "rgba(255, 255, 255, 0.18)",
      borderRadius: "10px",
      minHeight: "44px",
      boxShadow: state.isFocused ? "0 0 0 1px #f5d98b" : null,
      color: "#fff",
      "&:hover": {
        borderColor: "rgba(255, 255, 255, 0.3)",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#2a2a2a", // Solid background for readability
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    input: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "rgba(255, 255, 255, 0.65)",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#f5d98b" : state.isFocused ? "rgba(245, 217, 139, 0.2)" : "transparent",
      color: state.isSelected ? "#000" : "#fff",
      cursor: "pointer",
    }),
  };

  function handleChange(e) {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelectChange(selectedOption) {
    setFilters({
      ...filters,
      type: selectedOption,
    });
  }

  function handleDateChange(date, name) {
    setFilters({
      ...filters,
      [name]: date,
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
    // Transform complex state back to simple values expected by parent
    const simpleFilters = {
      ...filters,
      type: filters.type ? filters.type.value : "Any",
      dateFrom: filters.dateFrom ? filters.dateFrom.toISOString().split('T')[0] : "",
      dateTo: filters.dateTo ? filters.dateTo.toISOString().split('T')[0] : "",
    };
    onSearch(simpleFilters);
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

        {/* Property Type Widget */}
        <div className="widget-container">
          <Select
            options={typeOptions}
            styles={customSelectStyles}
            value={filters.type}
            onChange={handleSelectChange}
            placeholder="Property Type"
            isClearable
          />
        </div>

        {/* Postcode */}
        <input
          name="postcode"
          placeholder="Postcode area (e.g. BR1)"
          onChange={handleChange}
          value={filters.postcode}
        />

        {/* Price */}
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price (LKR)"
          onChange={handleChange}
          value={filters.minPrice}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price (LKR)"
          onChange={handleChange}
          value={filters.maxPrice}
        />

        {/* Bedrooms */}
        <input
          type="number"
          name="minBeds"
          placeholder="Min Beds"
          onChange={handleChange}
          value={filters.minBeds}
        />
        <input
          type="number"
          name="maxBeds"
          placeholder="Max Beds"
          onChange={handleChange}
          value={filters.maxBeds}
        />

        {/* Date Widgets */}
        <div className="widget-container date-picker-container">
          <DatePicker
            selected={filters.dateFrom}
            onChange={(date) => handleDateChange(date, "dateFrom")}
            placeholderText="Date Added From"
            className="date-input"
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <div className="widget-container date-picker-container">
          <DatePicker
            selected={filters.dateTo}
            onChange={(date) => handleDateChange(date, "dateTo")}
            placeholderText="Date Added To"
            className="date-input"
            dateFormat="yyyy-MM-dd"
          />
        </div>

        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
          &nbsp; Search
        </button>
      </form>

    </div>
  );
}

export default SearchBar;

