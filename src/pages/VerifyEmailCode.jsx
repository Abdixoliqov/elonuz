import { useEffect, useRef, useState } from "react";

export default function VerifyEmailCode() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isTrusted, setIsTrusted] = useState(true);
  const [timer, setTimer] = useState(58);
  const [canResend, setCanResend] = useState(false);
  const inputsRef = useRef([]);

  // Timer ishlashi
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // faqat raqam
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // keyingisiga fokus
    if (value && index < code.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tasdiq kodi: " + code.join(""));
  };

  const handleResend = () => {
    setTimer(58);
    setCanResend(false);
    setCode(["", "", "", "", "", ""]);
    inputsRef.current[0].focus();
    alert("Yangi kod emailga yuborildi!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col bg-white shadow-lg rounded-2xl overflow-hidden w-[90%] max-w-md p-8">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 text-center">
          Email kodni tasdiqlash
        </h2>
        <p className="text-gray-500 mb-6 text-sm text-center">
          Sizga yuborilgan tasdiqlash kodini kiriting
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* KOD INPUTLAR */}
          <div className="flex justify-between gap-2">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 border-2 border-gray-200 rounded-md text-center text-lg font-semibold focus:border-green-500 focus:outline-none transition"
              />
            ))}
          </div>

          {/* Qurilma checkbox */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={isTrusted}
              onChange={(e) => setIsTrusted(e.target.checked)}
              className="checkbox checkbox-sm checkbox-success"
            />
            Qurilma ishonchlimi?
          </label>

          {/* Email va timer */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>
              Emailga yuborildi:{" "}
              <span className="font-medium">user***@mail.com</span>
            </span>
            {!canResend ? (
              <span className="text-green-600 font-medium">{timer}s</span>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="text-green-600 hover:underline font-medium"
              >
                Qayta yuborish
              </button>
            )}
          </div>

          {/* Tugmalar */}
          <div className="flex flex-col gap-3 mt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-all"
            >
              Tasdiqlash
            </button>
            <button
              type="button"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-md transition-all"
            >
              Bekor qilish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
