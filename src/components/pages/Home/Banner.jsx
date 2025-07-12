import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Banner() {
  const codeString = `
// Hello, I'm Rakibul Islam Emon 👋
const developer = {
  name: 'Rakibul Islam Emon',
  role: 'Frontend MERN Stack Developer',
  expertise: ['React', 'Next.js', 'Node.js', 'MongoDB'],
  passion: 'Building elegant solutions to complex problems',
  
  contact() {
    return {
      email: 'rakibul@example.com',
      github: 'github.com/rakibul',
      linkedin: 'linkedin.com/in/rakibul'
    };
  }
};

// Let's create something extraordinary together
`;

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-background">
      {/* Left side - Professional Introduction */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-text">
            <span className="text-heading">MERN Stack</span> Developer
          </h1>
          <p className="text-xl text-text mb-8 leading-relaxed">
            I craft responsive, high-performance web applications with clean code and exceptional user experiences.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="px-4 py-2 bg-opacity-20 bg-heading text-heading rounded-full text-sm font-medium">React</span>
            <span className="px-4 py-2 bg-opacity-20 bg-heading text-heading rounded-full text-sm font-medium">Next.js</span>
            <span className="px-4 py-2 bg-opacity-20 bg-heading text-heading rounded-full text-sm font-medium">Node.js</span>
            <span className="px-4 py-2 bg-opacity-20 bg-heading text-heading rounded-full text-sm font-medium">MongoDB</span>
            <span className="px-4 py-2 bg-opacity-20 bg-heading text-heading rounded-full text-sm font-medium">Tailwind CSS</span>
          </div>
          <div className="flex gap-4">
            <button className="btn hover:scale-105 transition-transform">View Projects</button>
            <button className="border border-heading text-heading px-4 py-2 rounded-md hover:bg-heading hover:text-white transition-colors hover:scale-105">Contact Me</button>
          </div>
        </div>
      </div>

      {/* Right side - Code Editor */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl glow-border">
          {/* VS Code style title bar */}
          <div className="bg-code-bg bg-opacity-80 text-text flex items-center px-4 py-3 justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-button mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-accent mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-heading mr-2"></div>
              <span className="ml-4 font-mono text-sm">developer.js</span>
            </div>
            <div className="text-xs text-text opacity-70">Rakibul's Workspace</div>
          </div>

          {/* Code snippet */}
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            showLineNumbers
            
            wrapLines
            customStyle={{ 
              margin: 0, 
              padding: "1.5rem", 
              background: "var(--color-code-bg)",
              fontSize: "0.9rem",
              lineHeight: "1.5",
              borderRadius: "0",
            }}
            
          >
            {codeString}
          </SyntaxHighlighter>

          {/* Status bar */}
          <div className=" px-4 py-4 text-xs text-white flex justify-between items-center">
            <div>JavaScript</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Ready to collaborate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
