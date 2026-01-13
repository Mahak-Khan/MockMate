import React, { useState } from "react";

const initialAnswers = [
  {
    question: "Tell me about yourself",
    answer: "I am a web developer with experience in React and Node.js.",
    missingPoints: ["Education", "Certifications"],
    grammarIssues: ["Consider adding 'I have' before 'experience in React'"],
  },
  {
    question: "What are your strengths?",
    answer: "I am hardworking and always punctual.",
    missingPoints: ["Technical Skills"],
    grammarIssues: [],
  },
  {
    question: "Why should we hire you?",
    answer: "I am motivated and eager to learn.",
    missingPoints: ["Past Projects", "Achievements"],
    grammarIssues: ["Add 'because' after 'I am motivated' for clarity"],
  },
];

const AnswerReview = () => {
  const [answers, setAnswers] = useState(initialAnswers);

  const handleDelete = (indexToDelete) => {
    const filtered = answers.filter((_, index) => index !== indexToDelete);
    setAnswers(filtered);
  };

  return (
    <div className="flex flex-col items-center w-full px-4 py-6 gap-6">
      <h1 className="text-3xl font-bold text-white mb-6">Answer Review</h1>

      {answers.length === 0 ? (
        <div className="text-gray-400 text-lg">No answers to review.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          {answers.map((item, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-xl backdrop-saturate-150 border border-white/40 shadow-2xl rounded-2xl p-5 flex flex-col gap-3 relative"
            >
              {/* Delete button */}
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-3 right-3 text-red-600 font-bold hover:text-red-800"
              >
                Delete
              </button>

              {/* Question */}
              <h2 className="font-semibold text-lg">
                {index + 1}. {item.question}
              </h2>

              {/* User Answer */}
              <div className="bg-gray-100 rounded-lg p-3 text-gray-900 min-h-[3rem]">
                {item.answer || <span className="text-gray-500">No answer provided</span>}
              </div>

              {/* Suggestions */}
              <div className="text-sm text-yellow-700 min-h-[2rem]">
                <strong>Suggestions:</strong>{" "}
                {item.missingPoints.length ? item.missingPoints.join(", ") : "No suggestions yet"}
              </div>

              {/* Grammar & Syntax */}
              <div className="text-sm text-red-600 min-h-[2rem]">
                <strong>Grammar/Syntax:</strong>{" "}
                {item.grammarIssues.length ? item.grammarIssues.join("; ") : "No issues detected"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnswerReview;
