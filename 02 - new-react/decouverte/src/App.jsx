/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Input } from "./components/forms/Inputs";
import { Range } from "./components/forms/Range";
import { Checkbox } from "./components/forms/Checkbox";
import { ProductCategoryRow } from "./components/products/ProductCategoryRow";
import { ProductRow } from "./components/products/ProductRow";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
function App() {
  const [showStockOnly, setShowStockOnly] = useState(false);
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState(0);

  const visibleProducts = PRODUCTS.filter((product) => {
    if (showStockOnly && !product.stocked) return false;
    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) return false;
    // if (priceRange && !product.price.includes(priceRange)) return false;
    return true;
  });

  return (
    <div className="container my-3">
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        showStockOnly={showStockOnly}
        onStockOnlyChange={setShowStockOnly}
        priceRange={priceRange}
        onSetPriceRange={setPriceRange}
      />
      <ProductTable products={visibleProducts} />
    </div>
  );
}

function SearchBar({ showStockOnly, onStockOnlyChange, search, onSearchChange, priceRange, onSetPriceRange }) {
  return (
    <div>
      <div className="mb-3">
        <Input value={search} onChange={onSearchChange} placeholder="Rechercher..." />
        {/* <Range min={0} max={10} value={priceRange} onChange={onSetPriceRange} /> */}
        <Checkbox
          id="stocked"
          checked={showStockOnly}
          onChange={onStockOnlyChange}
          label="N'afficher que les produits en stock"
        />
      </div>
    </div>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={product.category} name={product.category} />);
    }
    lastCategory = product.category;
    rows.push(<ProductRow product={product} key={product.name} />);
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default App;
