import React, { useState, useEffect } from 'react';

const App = () => {
  // states: image & loading 
  const [dogImage, setDogImage] = useState(null); 
  const [loading, setLoading] = useState(false);

  // fetch random dog image logic
  const fetchDog = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error("Error fetching the dog:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect: initial load
  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
        {/* header */}
      <h1>Random Dog Generator</h1>
      
      <div style={{ marginBottom: '20px', minHeight: '300px' }}>
         {/*  loading message  */}
         {/*  dog image */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          dogImage && (
            <img 
              src={dogImage} 
              alt="A random dog" 
              style={{ maxWidth: '100%', maxHeight: '400px', borderRadius: '8px' }} 
            />
          )
        )}
      </div>

      {/* onClick button handle */}
      <button 
        onClick={fetchDog} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Get New Dog
      </button>
    </div>
  );
};

export default App;