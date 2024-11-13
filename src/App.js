import React, { useState } from "react";



function App() {
  const [inputs, setInputs] = useState({
    noun1: "",
    noun2: "",
    adjective: "",
    color: "",
  });

  const [story, setStory] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStory(
      `Once upon a time, a ${inputs.adjective} ${inputs.color} ${inputs.noun1} met a ${inputs.noun2}.`
    );

  };

  return (
    <div>
    <h1>Madlibs!</h1>
    <form onSubmit={handleSubmit}>
      <input
        name="noun1"
        value={inputs.noun1}
        onChange={handleChange}
        placeholder="Noun 1"
        />
        <input
        name="noun2"
        value={inputs.noun2}
        onChange={handleChange}
        placeholder="Noun 2"
        />
        <input
        name="adjective"
        value={inputs.adjective}
        onChange={handleChange}
        placeholder="Adjective"
        />
        <input
        name="color"
        value={inputs.color}
        onChange={handleChange}
        placeholder="Color"
        />
        <button type="submit">Get Story</button>
    </form>
    {story && <p>{story}</p>}



    </div>
  );
}


export default App;