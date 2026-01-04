import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import PropertyPage from "./pages/PropertyPage";

function App() {
  // ✅ ADD: favourites state lifted here (persistent across pages)
  const [favourites, setFavourites] = useState([]);

  // ✅ ADD: handlers
  function addFavourite(property) {
    setFavourites((prev) =>
      prev.find((p) => p.id === property.id) ? prev : [...prev, property]
    );
  }

  function removeFavourite(id) {
    setFavourites((prev) => prev.filter((p) => p.id !== id));
  }

  function clearFavourites() {
    setFavourites([]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              favourites={favourites}
              addFavourite={addFavourite}
              removeFavourite={removeFavourite}
              clearFavourites={clearFavourites}
            />
          }
        />

        <Route
          path="/property/:id"
          element={
            <PropertyPage
              favourites={favourites}
              addFavourite={addFavourite}
              removeFavourite={removeFavourite}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


