import LoadingSpinner from '../ui/LoadingSpinner';
import useGitHubAPI from '../../hooks/useGithubApi';

function ProfileRepos({ profile }) {
  const {
    data: repos,
    isLoading,
    error,
  } = useGitHubAPI(
    profile?.login
      ? `https://api.github.com/users/${profile.login}/repos?sort=updated&per_page=5`
      : null,
  );

  if (isLoading) return <LoadingSpinner />;

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      Java: '#b07219',
      HTML: '#e34c26',
      CSS: '#563d7c',
    };
    return colors[language] || '#8b949e';
  };

  return (
    <div className="rounded-lg border border-[var(--gh-border)] bg-[var(--gh-subtle)] p-4">
      <h3 className="mb-3 flex items-center text-base font-semibold text-[var(--gh-text)]">
        <svg
          className="mr-2 h-5 w-5 flex-shrink-0 text-[var(--gh-muted)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
        Recent repositories
      </h3>

      {error ? (
        <ErrorMessage message="Could not load repositories. Please try again later." />
      ) : repos && repos.length > 0 ? (
        <div className="space-y-2">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="rounded-lg border-b border-[var(--gh-border)] p-3"
            >
              <div className="mb-1 flex items-center justify-between text-[var(--gh-link)]">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>

                {repo.language && (
                  <div className="ml-2 flex items-center space-x-2 text-xs text-[var(--gh-text)]">
                    <span
                      className="mr-1 h-3 w-3 rounded-full"
                      style={{
                        backgroundColor: getLanguageColor(repo.language),
                      }}
                    ></span>
                    {repo.language}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-[var(--gh-muted)]">
          No repositories found
        </p>
      )}
    </div>
  );
}
export default ProfileRepos;
