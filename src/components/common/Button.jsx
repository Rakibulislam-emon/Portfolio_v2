export default function Button({ children, className = "", ...props }) {
  return (
    <button className={`btn cursor-pointer ${className}`} {...props}>
      {children}
    </button>
  );
}
