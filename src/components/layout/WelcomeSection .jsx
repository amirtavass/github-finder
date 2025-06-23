function WelcomeSection() {
  return (
    <div className="bg-[var(--gh-bg)] py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-3 flex items-center justify-center">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-[var(--gh-text)]">
              Welcome to Github Finder
            </h1>
            <p className="mb-4 text-base text-[var(--gh-muted)]">
              Find developers and explore their GitHub profiles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
