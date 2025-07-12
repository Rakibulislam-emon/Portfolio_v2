export default function StatusBar() {
  return (
    <div className="px-4 py-4 text-xs text-white flex justify-between items-center">
      <div>JavaScript</div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent"></span>
        Ready to collaborate
      </div>
    </div>
  );
}
