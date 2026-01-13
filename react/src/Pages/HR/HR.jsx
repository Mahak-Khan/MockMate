import React from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../../Components/QuestionCard";
import Button from "../../Components/Button";

const hrQuestions = [
  { question: "Tell me about yourself", difficulty: "Easy", type: "Personal" },
  { question: "What are your strengths?", difficulty: "Easy", type: "Personal" },
  { question: "Why should we hire you?", difficulty: "Medium", type: "HR" },
];

const HR = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full px-4">

      {/* ===== QUESTION CARD ===== */}
      <QuestionCard questions={hrQuestions} category="HR" />
    </div>
  );
};

export default HR;
