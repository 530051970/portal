import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showButton && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: "50px",
          right: "20px",
          padding: "10px 15px",
          background: "#8500d1",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
