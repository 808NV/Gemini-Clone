import React, { createContext, useState } from "react";
import runChat from "../config/gemini";

type MyContext = {
  onSent: (prompt: string) => Promise<void>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  output: string;
  setOutput: React.Dispatch<React.SetStateAction<string>>;
  history: string[];
  setHistory: React.Dispatch<React.SetStateAction<string[]>>;
  showResult: boolean;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  resultData: string;
  setResultData: React.Dispatch<React.SetStateAction<string>>;
};

export const context = createContext<MyContext | null>(null);

const ContextProvider = (props: { children: React.ReactNode }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
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
