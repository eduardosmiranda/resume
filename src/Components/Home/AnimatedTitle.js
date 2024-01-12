import React, { useState, useEffect } from "react";

const AnimatedTitle = () => {
  const phrases = ["Eduardo", "am a web developer"];
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const speed = 150; // Speed (ms)

    const handleAnimation = () => {
      const currentText = phrases[index];
      const textLength = currentText.length;

      if (isDeleting) {
        setDisplayText((prevText) =>
          prevText.slice(0, Math.max(prevText.length - 1, 0))
        );
      } else {
        
        setDisplayText((prevText) => {
            if (prevText.length < textLength) {
                return prevText + currentText[prevText.length]
            } else {
                setIsDeleting(true);
                setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                return prevText;
            }
            
            
        });
      }

      if (
        (!isDeleting && displayText === currentText) ||
        (isDeleting && displayText === "")
      ) {
        // If the last phrase is completed or deleting is completed, switch to the next phrase
        setIsDeleting(!isDeleting);
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    };

    const intervalId = setInterval(handleAnimation, speed);

    return () => clearInterval(intervalId);
  }, [index, isDeleting, displayText, phrases]);

  return (
    <div>
      <h1 className="animatedTitleH1">{displayText}</h1>
    </div>
  );
};

export default AnimatedTitle;


