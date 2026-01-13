import React, { useState, useRef, useEffect } from "react";
import { FaMicrophone, FaKeyboard, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "./Button"; // Fixed path
import { useNavigate } from "react-router-dom";

const QuestionCard = ({ questions, category }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState(null); // 'type' or 'mic'
  const [answer, setAnswer] = useState("");
  const [listening, setListening] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const recognitionRef = useRef(null);

  const currentQuestion = questions[currentIndex];

  // Speech recognition
  const startMic = () => {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setAnswer(transcript);
    };

    recognition.onend = () => setListening(false);
    recognition.start();
    setListening(true);
  };

  const stopMic = () => {
    if (recognitionRef.current) recognitionRef.current.stop();
    setListening(false);
  };

  useEffect(() => {
    return () => stopMic();
  }, []);

  // Navigation
  const handleNext = () => {
    stopMic();
    setAnswer("");
    setMode(null);
    setSubmitted(false);
    if (currentIndex < questions.length - 1) setCurrentIndex(prev => prev + 1);
  };

  const handleBack = () => {
    stopMic();
    setAnswer("");
    setMode(null);
    setSubmitted(false);
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const handleSubmit = () => {
    stopMic();
    console.log(`${category} - Question ${currentIndex + 1} Answer:`, answer);
    setSubmitted(true);
    setAnswer("");
    setMode(null);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="relative w-full flex flex-col items-center px-4">

      <div className="h-14" /> {/* Spacer */}

      {/* ===== MAIN CARD ===== */}
      <div className="w-full max-w-3xl 
        bg-white/40 backdrop-blur-xl backdrop-saturate-150 
        border border-white/40 shadow-2xl rounded-2xl p-5
        max-h-[calc(100vh-200px)] overflow-y-auto flex flex-col">

        {/* INFO CHIPS */}
        <div className="flex gap-3 mb-3 flex-wrap">
          <span className="px-3 py-1 text-xs rounded-full bg-white/50 text-gray-700">
            Difficulty: {currentQuestion.difficulty}
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-white/50 text-gray-700">
            Type: {currentQuestion.type}
          </span>
          {currentQuestion.topic && (
            <span className="px-3 py-1 text-xs rounded-full bg-white/50 text-gray-700">
              Topic: {currentQuestion.topic}
            </span>
          )}
        </div>

        {/* QUESTION */}
        <h2 className="text-lg font-semibold mb-4">
          {currentIndex + 1}. {currentQuestion.question}
        </h2>

        {/* TYPE / MIC BUTTONS */}
        <div className="flex gap-4 mb-4">
          <Button text="Type Answer" onClick={() => { stopMic(); setMode("type"); }}>
            <FaKeyboard className="text-white" />
          </Button>

          <Button
            text={listening ? "Listening..." : "Speak Answer"}
            onClick={() => { stopMic(); setMode("mic"); startMic(); }}
          >
            <FaMicrophone className="text-white" />
          </Button>
        </div>

        {/* DYNAMIC TEXTAREA */}
        {mode && (
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder={mode === "type" ? "Type your answer here..." : "Speak to answer..."}
            className="w-full rounded-xl p-3 border border-white/50 bg-transparent 
              text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 
              focus:ring-blue-500 resize-none mb-4 overflow-y-auto"
            rows={2}
            style={{ maxHeight: "9rem" }}
          />
        )}

        {/* NAVIGATION */}
        <div className="flex justify-between mt-auto">
          <button
            onClick={handleBack}
            disabled={currentIndex === 0}
            className="p-3 rounded-full bg-white/60 disabled:opacity-40"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === questions.length - 1}
            className="p-3 rounded-full bg-white/60 disabled:opacity-40"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* ===== ACTION BUTTONS OUTSIDE CARD ===== */}
      <div className="flex gap-4 mt-4">
        <Button text="Submit Answer" onClick={handleSubmit} />
        <Button text="Review Answers" onClick={() => navigate("/AnswerReview")} />
        <Button text="Your Answers" onClick={() => alert("Your Answers clicked")} />
        <Button text="← Back" onClick={() => navigate("/SelectPage")}/>
      </div>

      {/* ===== SUCCESS MESSAGE ===== */}
      {submitted && (
        <div className="text-green-500 font-semibold mt-2">
          ✅ Answer submitted successfully!
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
