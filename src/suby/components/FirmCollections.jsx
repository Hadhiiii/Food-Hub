import React, { useState } from "react";
import { Link } from "react-router-dom";

const firmData = [
  { name: "cava.jpg", region: "South Indian", area: "Banjara Hills", offer: "20% Off" },
  { name: "grill-N-chill.jpg", region: "North Indian", area: "Gachibowli", offer: "10% Off" },
  { name: "panda-express.jpg", region: "Chinese", area: "Madhapur", offer: "15% Off" },
  { name: "pizza-Hut.jpg", region: "Bakery", area: "Jubilee Hills", offer: "Buy 1 Get 1" }
];

const FirmCollections = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterHandler = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
    <div style={{ padding: "20px", backgroundColor: "#F0F4FF" }}>
      <h3 style={{ textAlign: "center", color: "#1E3A8A", fontSize: "22px", marginBottom: "16px" }}>Restaurants with Online Food Delivery</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
        {['All', 'South Indian', 'North Indian', 'Chinese', 'Bakery'].map(category => (
          <button
            key={category}
            onClick={() => filterHandler(category)}
            style={{
              backgroundColor: selectedCategory === category ? "#2563EB" : "white",
              color: selectedCategory === category ? "white" : "#2563EB",
              border: "1px solid #2563EB",
              padding: "8px 16px",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
        {firmData
          .filter(item => selectedCategory === "All" || item.region === selectedCategory)
          .map((item, index) => {
            const formattedName = item.name.replace(/-/g, " ").replace(".jpg", "");
            return (
              <Link to={`/products/${index + 1}/${formattedName}`} key={index} style={{ textDecoration: "none" }}>
                <div style={{ width: "250px", borderRadius: "12px", overflow: "hidden", backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", padding: "8px", textAlign: "center" }}>
                  <img src={`public/assets/chain/${item.name}`} alt={formattedName} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }} />
                  <div style={{ padding: "10px" }}>
                    <strong style={{ color: "#1E3A8A" }}>{formattedName}</strong>
                    <p style={{ color: "#555", margin: "4px 0" }}>{item.area}</p>
                    <span style={{ backgroundColor: "#2563EB", color: "white", padding: "5px 10px", borderRadius: "8px", fontSize: "12px" }}>{item.offer}</span>
                  </div>
                </div>
              </Link>
            );
          })}
      </section>
      </div>
      <footer style={{ marginTop: "40px", padding: "20px", backgroundColor: "#1E3A8A", color: "white", textAlign: "center" }}>
        <p style={{ marginBottom: "8px" }}>© 2025 Foodies Hub. All Rights Reserved.</p>
        <div>
          <Link to="/privacy" style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>Terms of Service</Link>
          <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact Us</Link>
        </div>
      </footer>
    </>
  );
};

export default FirmCollections;
