function LoadingSpinner() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[var(--gh-border)] border-t-[var(--gh-link)]"></div>
        <p className="mt-4 text-[var(--gh-muted)]">Loading...</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
