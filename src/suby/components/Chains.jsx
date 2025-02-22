import React, { useState, useEffect, useRef } from 'react';
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const imageFiles = [
  "cava.jpg",
  "grill-N-chill.jpg",
  "panda-express.jpg",
  "pizza-Hut.jpg",
  "red-lobster.jpg"
];

const Chains = () => {
  const scrollRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && !scrolling) {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [scrolling]);

  const handleScroll = (direction) => {
    setScrolling(true);
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
    }
    setTimeout(() => setScrolling(false), 1000);
  };

  return (
    <div style={{ position: 'relative', padding: '20px', backgroundColor: '#F0F4FF' }}>
      <h3 style={{ textAlign: 'center', color: '#1E3A8A', fontSize: '22px', marginBottom: '16px' }}>Top Restaurant Chains</h3>
      <button onClick={() => handleScroll("left")} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: '#2563EB', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '50%' }}>
        <FaRegArrowAltCircleLeft size={24} />
      </button>
      <div ref={scrollRef} style={{ display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap', gap: '16px', padding: '10px', scrollbarWidth: 'none', scrollBehavior: 'smooth' }}>
        {imageFiles.map((file, index) => {
          const name = file.replace(/-/g, ' ').replace('.jpg', '');
          return (
            <Link to={`/products/${index + 1}/${name}`} key={index} style={{ textDecoration: 'none' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', padding: '8px', flex: '0 0 auto', width: '220px', textAlign: 'center' }}>
                <img src={`public/assets/chain/${file}`} alt={name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
                <p style={{ marginTop: '8px', fontSize: '16px', fontWeight: 'bold', color: '#1E3A8A' }}>{name}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <button onClick={() => handleScroll("right")} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: '#2563EB', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '50%' }}>
        <FaRegArrowAltCircleRight size={24} />
      </button>
    </div>
  );
};

export default Chains;