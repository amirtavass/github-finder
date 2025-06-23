function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md bg-[var(--gh-link)] px-4 py-2 text-white transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
