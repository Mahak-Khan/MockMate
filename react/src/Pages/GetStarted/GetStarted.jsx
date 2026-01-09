import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../Components/Button";

export default function GetStarted() {
  const [showSignupBox, setShowSignupBox] = useState(false);

  const boxVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.5 }
    })
  };

  return (
    <main className="flex justify-center mt-10">
      <div className="w-[900px] h-[400px] rounded-xl overflow-hidden flex shadow-2xl relative">
        <AnimatePresence mode="wait">
          {!showSignupBox ? (
            <motion.div
              key="login"
              custom={1}
              variants={boxVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex w-full h-full"
            >
              {/* Left: Login Form */}
              <div
                className="w-1/2 h-full flex flex-col items-center justify-center px-10"
                style={{
                  background: "rgba(255,255,255,0.4)",
                  backdropFilter: "blur(20px) saturate(150%)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
                }}
              >
                <h1 className="text-2xl font-bold mb-6 text-blue-600 text-center">
                  Login to Your Account
                </h1>
                <input
                  className="w-full mb-4 px-4 py-2 border rounded outline-none"
                  placeholder="Email"
                />
                <input
                  className="w-full mb-6 px-4 py-2 border rounded outline-none"
                  type="password"
                  placeholder="Password"
                />
                <Button text="Login" />
              </div>

              {/* Right: Sign Up Button */}
              <div className="w-1/2 h-full flex flex-col items-center justify-center px-10 bg-blue-500">
                <h2 className="text-3xl font-bold mb-3 text-white">New here?</h2>
                <p className="mb-4 text-white">Create your account</p>
                <Button text="Sign Up" onClick={() => setShowSignupBox(true)} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              custom={-1}
              variants={boxVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex w-full h-full rounded-2xl"
            >
              {/* Left: Login Button */}
              <div className="w-1/2 h-full flex flex-col items-center justify-center px-10 bg-blue-500">
                <h2 className="text-3xl font-bold mb-3 text-white">
                  Already have an account?
                </h2>
                <Button text="Login" onClick={() => setShowSignupBox(false)} />
              </div>

              {/* Right: Sign Up Form */}
              <div
                className="w-1/2 h-full flex flex-col items-center justify-center px-10"
                style={{
                  background: "rgba(255,255,255,0.4)",
                  backdropFilter: "blur(20px) saturate(150%)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
                }}
              >
                <h1 className="text-2xl font-bold mb-6 text-blue-600 text-center">
                  Create Account
                </h1>
                <input
                  className="w-full mb-3 px-4 py-2 border rounded outline-none"
                  placeholder="Username"
                />
                <input
                  className="w-full mb-3 px-4 py-2 border rounded outline-none"
                  placeholder="Email"
                />
                <input
                  className="w-full mb-3 px-4 py-2 border rounded outline-none"
                  type="password"
                  placeholder="Password"
                />
                <input
                  className="w-full mb-6 px-4 py-2 border rounded outline-none"
                  type="password"
                  placeholder="Confirm Password"
                />
                <Button text="Sign Up" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
