import { Typewriter } from "react-simple-typewriter";

export default function CodeLines({ codeLines, currentLine }) {
  return (
    <div
      style={{
        padding: "1.5rem",
        whiteSpace: "pre-wrap",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {codeLines.map((line, index) => (
        <div key={index} style={{ color: line.color }}>
          {index === currentLine ? (
            <Typewriter
              words={[line.text]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={20}
            />
          ) : index < currentLine ? (
            line.text
          ) : null}
        </div>
      ))}
    </div>
  );
}
