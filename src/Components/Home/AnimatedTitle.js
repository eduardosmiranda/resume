import React, { useState, useEffect } from "react";

function AnimatedTitle () {
  const phrases = ["EDUARDO MIRANDA", "A WEB DEVELOPER"];
  const colors = ['aliceblue', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];
  const [colorIndex, setColorIndex] = useState (7);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");


  useEffect(() => {
    const speed = 180; // Speed (ms)

    const handleAnimation = () => {
      const currentText = phrases[index];
      const textLength = currentText.length;
      
      setColorIndex (() => {
        const number = Math.floor (Math.random() * colors.length );
        return number;
      });



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
      <h1 style = {{color: colors[colorIndex]}} className="animatedTitleH1">{displayText}</h1>
    </div>
  );
};

export default AnimatedTitle;