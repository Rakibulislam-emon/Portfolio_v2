


import React, { useEffect, useState, useMemo } from "react";
import { Typewriter } from "react-simple-typewriter";
import TitleBar from "./TitleBar";
import CodeLines from "./CodeLines";
import LineNumbers from "./LineNumbers";
import StatusBar from "./StatusBar";
// import TitleBar from "./TitleBar";
// import LineNumbers from "./LineNumbers";
// import CodeLines from "./CodeLines";
// import StatusBar from "./StatusBar";

export default function CodeSnippet() {
  const codeLines = useMemo(
    () => [
      { text: "// Hello, I'm Rakibul Islam Emon 👋", color: "#10B981" },
      { text: "const developer = {", color: "#3B82F6" },
      { text: "  name: 'Rakibul Islam Emon',", color: "#d4d4d4" },
      { text: "  role: 'Frontend MERN Stack Developer',", color: "#d4d4d4" },
      {
        text: "  expertise: ['React', 'Next.js', 'Node.js', 'MongoDB'],",
        color: "#d4d4d4",
      },
      {
        text: "  passion: 'Building elegant solutions to complex problems',",
        color: "#d4d4d4",
      },
      { text: "", color: "#d4d4d4" },
      { text: "  contact() {", color: "#3B82F6" },
      { text: "    return {", color: "#3B82F6" },
      { text: "      email: 'rakibul@example.com',", color: "#d4d4d4" },
      { text: "      github: 'github.com/rakibul',", color: "#d4d4d4" },
      { text: "      linkedin: 'linkedin.com/in/rakibul'", color: "#d4d4d4" },
      { text: "    };", color: "#3B82F6" },
      { text: "  }", color: "#3B82F6" },
      { text: "};", color: "#3B82F6" },
      { text: "", color: "#d4d4d4" },
      {
        text: "// Let's create something extraordinary together",
        color: "#10B981",
      },
    ],
    []
  );

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
