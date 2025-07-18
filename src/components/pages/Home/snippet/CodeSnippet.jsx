


import React, { useEffect, useState, useMemo } from "react";
// Remove: // Remove: import { Typewriter } from "react-simple-typewriter";
import TitleBar from "./TitleBar";
import CodeLines from "./CodeLines";
import LineNumbers from "./LineNumbers";
import StatusBar from "./StatusBar";
import { codeSnippetData } from "../../../Data/data";

export default function CodeSnippet() {
  const codeLines = useMemo(() => codeSnippetData, []);

  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    let timeout;
    if (currentLine < codeLines.length) {
      timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, codeLines[currentLine].text.length * 20 + 400);
    } else {
      timeout = setTimeout(() => {
        setCurrentLine(0);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [currentLine, codeLines]);

  return (
    <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
      <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl">
        <TitleBar />
        <div
          className="flex"
          style={{
            height: "400px",
            background: "var(--color-code-bg)",
            fontSize: "0.9rem",
            lineHeight: "1.5",
            fontFamily: "monospace",
            overflow: "hidden",
          }}
        >
          <LineNumbers total={codeLines.length} />
          <CodeLines codeLines={codeLines} currentLine={currentLine} />
        </div>
        <StatusBar />
      </div>
    </div>
  );
}
