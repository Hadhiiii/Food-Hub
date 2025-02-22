import React, { useState, useEffect, useRef } from 'react';
import { itemData } from '../data';

const ItemsDisplay = () => {
  const [displayItem, setDisplayItem] = useState(itemData);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -220, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', padding: '16px', backgroundColor: '#F0F4FF' }}>
      <button onClick={scrollLeft} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'white', border: 'none', padding: '10px', cursor: 'pointer', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '50%' }}>&#9665;</button>
      <div ref={scrollRef} style={{ display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap', gap: '16px', scrollbarWidth: 'none', scrollBehavior: 'smooth' }}>
        {displayItem.map((item, index) => (
          <div key={index} style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', padding: '8px', flex: '0 0 auto' }}>
            <img src={item.item_img} alt={item.item_img} style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
          </div>
        ))}
      </div>
      <button onClick={scrollRight} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'white', border: 'none', padding: '10px', cursor: 'pointer', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '50%' }}>&#9655;</button>
    </div>
  );
};

export default ItemsDisplay;
