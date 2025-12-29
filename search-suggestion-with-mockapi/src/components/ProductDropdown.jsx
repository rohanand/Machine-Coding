import { useEffect, useState } from "react";
import axios from "axios";

const fetchAllProducts = async () => {
  const products = await axios.get(
    "https://fakestoreapi.com/products?sort=asc"
  );
  console.log(products.data);
  const titles = products?.data.map((data) => data.title);
  console.log("t: ", titles);
  return titles;
};
export default function ProductDropdown() {
  const [allProducts, setAllProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    fetchAllProducts().then((data) => setAllProducts(data));
  }, []);
  useEffect(() => {
    if (query.trim()) {
      const result = allProducts.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      console.log("res: ", result);
      setFiltered(result);
      setShowDropdown(true);
    } else {
      setFiltered([]);
      setShowDropdown(false);
    }
  }, [query, allProducts]);
  const handleSelect = (item) => {
    setQuery(item);
    setShowDropdown(false);
  };
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {showDropdown && filtered.length > 0 && (
        <ul>
          {filtered.map((item, index) => {
            return (
              <li key={item} onClick={() => handleSelect(item)}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
