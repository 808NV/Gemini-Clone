import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const onSnet = async (prompt) => {
    await runChat(prompt);
  };

  const contextValue = {};

  return (
    <context.Provider value={contextValue}>{props.children}</context.Provider>
  );
};

export default ContextProvider;
