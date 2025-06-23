function UserStats({ profile }) {
  return (
    <div className="rounded-lg border border-[var(--gh-border)] bg-[var(--gh-subtle)] p-4">
      <h3 className="mb-5 flex items-center text-base font-semibold text-[var(--gh-text)]">
        <svg
          className="mr-2 h-5 w-5 flex-shrink-0 text-[var(--gh-muted)]"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
        </svg>
        Developer Stats
      </h3>

      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-[var(--gh-border)] pb-2">
            <span className="text-sm text-[var(--gh-text)]">Public gists</span>
            <span className="text-sm font-medium text-[var(--gh-text)]">
              {profile.public_gists || 0}
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-[var(--gh-border)] pb-2">
            <span className="text-sm text-[var(--gh-text)]">Account type</span>
            <span className="text-sm font-medium text-[var(--gh-text)]">
              {profile.type === 'Organization' ? 'Organization' : 'User'}
            </span>
          </div>

          {profile.hireable && (
            <div className="flex items-center justify-between border-b border-[var(--gh-border)] pb-2">
              <span className="text-sm text-[var(--gh-text)]">
                Available for hire
              </span>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                Yes
              </span>
            </div>
          )}

          <div className="flex items-center justify-between border-b border-[var(--gh-border)] pb-2">
            <span className="text-sm text-[var(--gh-text)]">Profile views</span>
            <span className="text-sm font-medium text-[var(--gh-text)]">
              Public
            </span>
          </div>

          {profile.email && (
            <div className="flex items-center justify-between border-b border-[var(--gh-border)] pb-2">
              <span className="text-sm text-[var(--gh-text)]">Email</span>
              <span className="text-sm font-medium text-[var(--gh-text)]">
                Available
              </span>
            </div>
          )}

          <div className="flex items-center justify-between border-b border-[var(--gh-border)] pb-2">
            <span className="text-sm text-[var(--gh-text)]">Last updated</span>
            <span className="text-sm font-medium text-[var(--gh-text)]">
              {new Date(profile.updated_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStats;
