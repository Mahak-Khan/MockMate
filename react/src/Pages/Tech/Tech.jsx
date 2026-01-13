import React from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../../Components/QuestionCard";
import Button from "../../Components/Button";

const techQuestions = [
  { question: "Explain React lifecycle methods.", difficulty: "Medium", type: "Technical", topic: "React" },
  { question: "What is closure in JavaScript?", difficulty: "Easy", type: "Technical", topic: "JavaScript" },
  { question: "Difference between var, let, and const?", difficulty: "Easy", type: "Technical", topic: "JavaScript" }
];

const Tech = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full px-4">

      {/* Back button at top-left */}
     

      {/* Question Card */}
      <QuestionCard questions={techQuestions} category="Tech" />
    </div>
  );
};

export default Tech;
