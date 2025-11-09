/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 09/11/2025 - 12:51:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/11/2025
    * - Author          : DHANUSH
    * - Modification    : 
**/
/**
 * @description      : Dictionary App Component
 * @author           : DHANUSH
 * @created          : 09/11/2025
 */

import "./App.css";
import React, { useState } from "react";

function App() {
  const dictionaryData = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [dictionary] = useState(dictionaryData);
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === term
    );

    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <div
        style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}
      >
        <h1>Dictionary App</h1>

        <input
          type="text"
          placeholder="Enter a word"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "8px",
            width: "200px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />

        <button
          onClick={handleSearch}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Search
        </button>

        <div style={{ marginTop: "30px" }}>
          <h3>Definition:</h3>
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
