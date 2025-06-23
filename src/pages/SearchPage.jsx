import { useEffect, useState } from 'react';
import useGitHubAPI from '../hooks/useGithubApi';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';
import UserProfile from '../components/profile/UserProfile';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [searchedQuery, setSearchedQuery] = useState('');

  // This useEffect creates a 700ms delay before updating searchedQuery
  // This prevents making API calls on every keystroke
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchedQuery(query);
    }, 700);
    return () => clearTimeout(timeoutId);
  }, [query]);

  // Only call the API when searchedQuery changes (after the delay)
  const { data, isLoading, error } = useGitHubAPI(
    searchedQuery
      ? `https://api.github.com/search/users?q=${searchedQuery}`
      : null,
  );

  const users = data?.items || [];

  return (
    <div className="mx-auto max-w-6xl bg-[var(--gh-bg)] p-6 text-[var(--gh-text)]">
      <h1 className="mb-6 text-3xl font-bold">Search GitHub Users</h1>
      <div className="relative mb-5 flex items-center">
        <input
          className="w-full rounded-lg border border-[var(--gh-border)] bg-[var(--gh-subtle)] px-4 py-2 pl-10 text-[var(--gh-text)]"
          placeholder="Search for users"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <svg
          className="absolute left-4 h-5 w-5 text-[var(--gh-muted)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {isLoading && <LoadingSpinner />}

      {error && (
        <ErrorMessage message="User wasn't found. Try searching for another user." />
      )}

      {!isLoading && !error && users.length > 0 && (
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-[var(--gh-text)]">
            Found {users.length} users
          </h3>
          {users.slice(0, 8).map((user) => (
            <div
              key={user.id}
              className="border-b border-[var(--gh-border)] pb-5"
            >
              <a
                className="mb-4 text-xl font-medium text-[var(--gh-link)]"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://github.com/${user.login}`}
              >
                @{user.login}
              </a>
              <UserProfile
                username={user.login}
                showRepos={false}
                showSearchStats={true}
              />
            </div>
          ))}
        </div>
      )}

      {!isLoading && !error && searchedQuery && users.length === 0 && (
        <div className="py-8 text-center">
          <p className="text-[var(--gh-muted)]">
            No users found for "{searchedQuery}"
          </p>
        </div>
      )}

      {!query && (
        <div className="py-8 text-center">
          <p className="text-[var(--gh-muted)]">
            Enter a username to search for GitHub users
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
