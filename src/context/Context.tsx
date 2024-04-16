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

  const delayPara = (index: number, nextWord: string) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 20 * index);
  };

  const onSent = async (prompt: string) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setOutput(input);
    setHistory((prev) => [...prev, input]);

    const response = await runChat(input);
    const responseArray = response.split("**");

    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    // Split by "*" and join with <br> for line breaks
    const newResponse2 = newResponse.split("*").join("<br>");

    // Split by " " to process each word
    const newResponseArray = newResponse2.split(" ");

    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }

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
