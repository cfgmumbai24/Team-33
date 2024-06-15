import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@nextui-org/react";
import { SpeakIcon } from "../utils/SpeakIcon";

const SpeechRecognitionComponent = () => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognition = useRef(null);

  console.log(transcript)
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      console.error('Speech recognition not supported');
      return;
    }

    recognition.current = new window.webkitSpeechRecognition();
    recognition.current.continuous = true;
    recognition.current.interimResults = true;
    recognition.current.lang = 'hi-IN';

    recognition.current.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
          setTranscript(finalTranscript);
          toggleListening();
        } else {
          interimTranscript += event.results[i][0].transcript;
          setTranscript(interimTranscript);
        }
      }
      console.log(interimTranscript, finalTranscript);
    };

    return () => {
      recognition.current && recognition.current.stop();
    };
  }, []);

  const toggleListening = () => {
    if (listening) {
      recognition.current.stop();
    } else {
      recognition.current.start();
    }
    setListening(!listening);
  };

  return (
    <div className="pr-2">
        <Button variant="shadow" color="danger" isIconOnly onClick={toggleListening}>
            <SpeakIcon />
        </Button>
    </div>
  );
};

export default SpeechRecognitionComponent;