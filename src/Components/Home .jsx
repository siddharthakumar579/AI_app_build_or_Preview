import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY
});

// const History = [];

const Home  = ({setAiResponse}) => {
    // const navigate = useNavigate();
    const [inputValue, setInputvalue] = useState("")
    // const [aiResponse, setAiResponse] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    async function handleSubmit(e) {
      e.preventDefault();
      if (inputValue.length > 0) {
        // navigate("/pre", { state: inputValue });
      }

      try {
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: inputValue,
          config: {
            systemInstruction: `You are an expert in software and hardware problems faced in a computer or a laptop or any other communication device.
      
      
        Only answer questions related to your expertise and if any one asks an off-topic question reply them very rudely. 
        If someone asks a genuine question try to reply them in the simplest way possible`,
          },
        });
        setAiResponse(response.text);
      } catch (error) {
        console.error("Cannot fetch data: ", error);
        setAiResponse("Oops something bad happened, check your console");
      } finally {
        setIsLoading(false);
        // setInputvalue("");
      }
    }
  return (
    <div className="main">
      <form className="form" onSubmit={handleSubmit}>
        <input 
          className="input"
          type="text"
          placeholder="describe you app" 
          value={inputValue}
          onChange={(e) => setInputvalue(e.target.value)}
        />

        <button 
          type="submit"
          className="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Home 
