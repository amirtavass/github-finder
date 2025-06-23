function ErrorMessage({ message }) {
  return (
    <div className="flex min-h-[200px] items-center justify-center p-4">
      <div className="text-center">
        <p className="mb-2 text-red-500">⚠️ Error</p>
        <p className="text-[var(--gh-muted)]">{message}</p>
      </div>
    </div>
  );
}

export default ErrorMessage;
