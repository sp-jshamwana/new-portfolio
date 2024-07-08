import { useEffect, useState } from "react";

const useTypewriter = (texts, speed = 125, pause = 200) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing) {
        setText((prev) => texts[index].substring(0, prev.length + 1));
        if (text === texts[index]) {
          setTyping(false);
        }
      } else {
        setText((prev) => prev.substring(0, prev.length - 1));
        if (!text) {
          setTyping(true);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, typing ? speed : pause);
    return () => clearTimeout(timeout);
  }, [text, typing]);

  return text;
};

export default useTypewriter;
