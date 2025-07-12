export default function TitleBar() {
  return (
    <div className="bg-code-bg bg-opacity-80 text-text flex items-center px-4 py-3 justify-between">
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-button mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-accent mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-heading mr-2"></div>
        <span className="ml-4 font-mono text-sm">developer.js</span>
      </div>
      <div className="text-xs text-text opacity-70">Rakibul's Workspace</div>
    </div>
  );
}
