import React from "react";

const Profile = () => {
  const hrScore = 20;
  const techScore = 40;
  const overall = Math.round((hrScore + techScore) / 2);

  const card =
    "bg-white/40 backdrop-blur-xl backdrop-saturate-150 border border-white/40 shadow-2xl rounded-2xl p-6";

  /* =========================
     Circular Progress Component
  ========================== */
  const CircleProgress = ({ value, label }) => {
    const radius = 55;
    const stroke = 10;
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const strokeDashoffset =
      circumference - (value / 100) * circumference;

    return (
      <div className="flex flex-col items-center gap-3">

        <div className="relative">
          <svg height={radius * 2} width={radius * 2}>

            {/* background circle */}
            <circle
              stroke="rgba(255,255,255,0.4)"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />

            {/* progress circle */}
            <circle
              stroke="black"
              fill="transparent"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={circumference + " " + circumference}
              style={{
                strokeDashoffset,
                transition: "stroke-dashoffset 0.8s ease",
              }}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              transform={`rotate(-90 ${radius} ${radius})`}
            />

          </svg>

          {/* percentage text */}
          <span className="absolute inset-0 flex items-center justify-center font-semibold text-lg">
            {value}%
          </span>
        </div>

        <p className="text-sm font-medium">{label}</p>
      </div>
    );
  };

  return (
    <div className="w-full min-h-[calc(100vh-160px)] px-10 pt-24 flex gap-8">

      {/* ================= LEFT PROFILE CARD ================= */}
      <div className={`${card} w-1/3 flex flex-col h-90 items-center gap-6`}>

        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
        />

        <h2 className="text-xl font-semibold">Hey, Mahak 👋</h2>

        <button className="px-4 py-2 rounded-xl bg-black text-white hover:scale-105 transition">
          Reset Progress
        </button>
      </div>

      {/* ================= RIGHT PROGRESS SECTION ================= */}
      <div className={`${card} flex-1 flex items-center justify-around h-90`}>

        <CircleProgress value={hrScore} label="HR Progress" />
        <CircleProgress value={techScore} label="Tech Progress" />
        <CircleProgress value={overall} label="Overall Score" />

      </div>

    </div>
  );
};

export default Profile;
