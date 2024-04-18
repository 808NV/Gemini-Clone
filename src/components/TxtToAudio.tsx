import { useContext, useRef, useState } from "react";
import { context } from "../context/Context";
import { HiSpeakerWave } from "react-icons/hi2";
import { GiPauseButton } from "react-icons/gi";

type Props = {
  theme: string;
  setTheme: (theme: string) => void | string;
};

const TxtToAudio = ({ theme }: Props) => {
  const ctx = useContext(context);
  const resultData = ctx?.resultData ?? "";

  const [isPlaying, setIsPlaying] = useState(false);
  const speechSynthesisRef = useRef<SpeechSynthesis | null>(null);
  let utterance = null;

  console.log(isPlaying);

  const handleTogglePlayback = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const playAudio = () => {
    if ("speechSynthesis" in window) {
      speechSynthesisRef.current = window.speechSynthesis;
      utterance = new SpeechSynthesisUtterance(resultData);
      speechSynthesisRef.current.speak(utterance);
      setIsPlaying(true);
    } else {
      alert("Speech synthesis is not supported in this browser.");
    }
  };

  const pauseAudio = () => {
    if (speechSynthesisRef.current) {
      speechSynthesisRef.current.cancel();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col items-end p-[2rem]">
      <div className="group cursor-pointer">
        <button
          onClick={handleTogglePlayback}
          className="flex justify-center items-center h-[50px] w-[50px] rounded-[50%] hover:bg-slate-100 dark-hover"
          id={theme}
        >
          {!isPlaying ? (
            <HiSpeakerWave size={30} color="grey" />
          ) : (
            <GiPauseButton size={30} color="grey" />
          )}
        </button>
        <div
          className="hidden group-hover:block bg-blue-100 mt-2 text-center rounded-sm absolute z-[1] px-[0.5rem] dark-hover"
          id={theme}
        >
          {!isPlaying ? " Listen" : "Pause"}
        </div>
      </div>
    </div>
  );
};

export default TxtToAudio;
