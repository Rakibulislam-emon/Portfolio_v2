import Introduction from "./Introduction";
import CodeSnippet from "./snippet/CodeSnippet";

export default function Banner() {
  return (
    <div className="flex max-w-7xl mx-auto flex-col lg:flex-row gap-8">
      <Introduction />
      <CodeSnippet />
    </div>
  );
}
