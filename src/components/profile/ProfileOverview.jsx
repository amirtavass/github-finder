function ProfileOverview({ profile }) {
  return (
    <div className="rounded-lg border border-[var(--gh-border)] bg-[var(--gh-subtle)] p-4">
      <h3 className="mb-5 flex items-center text-base font-semibold text-[var(--gh-text)]">
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        Overview
      </h3>

      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-[var(--gh-border)]">
          <span className="text-sm text-[var(--gh-text)] opacity-75">
            Public repositories
          </span>
          <span className="text-sm font-medium text-[var(--gh-text)] opacity-75">
            {profile.public_repos}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-[var(--gh-border)]">
          <span className="text-sm text-[var(--gh-text)]">Member since</span>
          <span className="text-sm font-medium text-[var(--gh-text)]">
            {new Date(profile.created_at).getFullYear()}
          </span>
        </div>
        {profile.company && (
          <div className="flex items-center justify-between border-b border-[var(--gh-border)]">
            <span className="text-sm text-[var(--gh-text)]">Company</span>
            <span className="text-sm font-medium text-[var(--gh-text)]">
              {profile.company}
            </span>
          </div>
        )}
        {profile.twitter_username && (
          <div className="flex items-center justify-between border-b border-[var(--gh-border)]">
            <span className="text-sm text-[var(--gh-text)]">X username</span>
            <span className="text-sm font-medium text-[var(--gh-text)]">
              @{profile.twitter_username}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between border-b border-[var(--gh-border)]">
          <span className="text-sm text-[var(--gh-text)]">
            GitHub profile link
          </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              profile.html_url.startsWith('http')
                ? profile.html_url
                : `https://${profile.html_url}`
            }
            className="inline-flex items-center text-sm font-medium text-[var(--gh-link)] hover:underline"
          >
            View Profile
          </a>
        </div>
      </div>
      {profile.blog && (
        <div className="flex items-center justify-between">
          <span className="pt-2 text-sm text-[var(--gh-text)]">Website</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              profile.blog.startsWith('http')
                ? profile.blog
                : `https://${profile.blog}`
            }
            className="inline-flex items-center text-sm font-medium text-[var(--gh-link)] hover:underline"
          >
            Visit
            <svg
              className="ml-1 h-4 w-4 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}

export default ProfileOverview;
