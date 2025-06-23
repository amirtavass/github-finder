import Button from '../components/ui/Button';

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-[var(--gh-text)]">
          About GitHub Finder
        </h1>

        <div className="space-y-6 text-[var(--gh-text)]">
          <section className="rounded-lg border border-[var(--gh-border)] bg-[var(--gh-subtle)] p-6">
            <h2 className="mb-3 flex items-center text-2xl font-semibold">
              <span className="mr-2">🔍</span> What is GitHub Finder?
            </h2>
            <p className="leading-relaxed text-[var(--gh-muted)]">
              GitHub Finder is a powerful search tool that helps you discover
              and explore GitHub users and their repositories. Built with React
              and the GitHub API, it provides an intuitive interface to search
              through millions of developer profiles.
            </p>
          </section>

          <section className="rounded-lg border border-[var(--gh-border)] bg-[var(--gh-subtle)] p-6">
            <h2 className="mb-3 flex items-center text-2xl font-semibold">
              <span className="mr-2">✨</span> Features
            </h2>
            <ul className="space-y-2 text-[var(--gh-muted)]">
              <li className="flex items-start">
                <span className="mr-2 text-[var(--gh-orange)]">•</span>
                Real-time user search with debounced input for optimal
                performance
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--gh-orange)]">•</span>
                Detailed user profiles showing repositories, followers, and
                stats
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--gh-orange)]">•</span>
                Clean, GitHub-inspired dark theme design
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--gh-orange)]">•</span>
                Responsive layout that works on all devices
              </li>
            </ul>
          </section>

          <section className="rounded-lg border border-[var(--gh-border)] bg-[var(--gh-subtle)] p-6">
            <h2 className="mb-3 flex items-center text-2xl font-semibold">
              <span className="mr-2">👨‍💻</span> About the Developer
            </h2>
            <p className="mb-4 leading-relaxed text-[var(--gh-muted)]">
              Created by{' '}
              <span className="font-medium text-[var(--gh-link)]">
                @amirtavass
              </span>
              , a passionate developer focused on creating useful tools for the
              developer community. This project showcases modern React
              development practices including custom hooks, component
              composition, and API integration. component composition, and API
              integration.
            </p>
            <div className="flex gap-4">
              <Button
                onClick={() =>
                  window.open('https://github.com/amirtavass', '_blank')
                }
              >
                <span className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View My GitHub
                </span>
              </Button>
            </div>
          </section>

          <section className="rounded-lg border border-[var(--gh-border)] bg-[var(--gh-subtle)] p-6">
            <h2 className="mb-3 flex items-center text-2xl font-semibold">
              <span className="mr-2">🛠️</span> Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                'React',
                'React Router',
                'Tailwind CSS',
                'GitHub API',
                'Vite',
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--gh-border)] bg-[var(--gh-dark)] px-3 py-1 text-sm text-[var(--gh-text)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
