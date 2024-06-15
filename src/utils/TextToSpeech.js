import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { PlayIcon } from "./PlayIcon";
import { PauseIcon } from "./PauseIcon";
import { PlayPauseIcon } from "./PlayPause";
import { StopIcon } from "./StopIcon";

const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    }

    synth.speak(utterance);

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
  };

  return (
    <div className="pt-1 grid grid-flow-col gap-0">
      <Button isIconOnly size="sm" radius="none" variant="shadow" color="success" className="rounded-l-lg" onClick={handlePlay}>{isPaused ? <PlayPauseIcon /> : <PlayIcon />}</Button>
      <Button isIconOnly size="sm" radius="none" variant="shadow" color="warning" onClick={handlePause}><PauseIcon /></Button>
      <Button isIconOnly size="sm" radius="none" variant="shadow" color="danger" className="rounded-r-lg" onClick={handleStop}><StopIcon /></Button>
    </div>
  );
};

export default TextToSpeech;