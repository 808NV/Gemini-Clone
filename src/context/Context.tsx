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
  const onSent = async (prompt: string) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setOutput(input);
    const response = await runChat(input);
    setResultData(response);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    input,
    setInput,
    output,
    setOutput,
    history,
    setHistory,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
  };

  return (
    <context.Provider value={contextValue}>{props.children}</context.Provider>
  );
};

export default ContextProvider;
