import Button from '../ui/Button';
function ProfileCard({ profile }) {
  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded-xl border border-[var(--gh-border)] bg-[var(--gh-subtle)]">
      <div className="relative h-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 transform">
          <img
            src={profile.avatar_url}
            alt={profile.name}
            className="h-24 w-24 rounded-full border-4 border-white"
          />
        </div>
      </div>
      <div className="px-6 pt-16 pb-6">
        <div className="mb-2 text-center">
          <h2 className="text-xl font-bold text-[var(--gh-text)]">
            {profile.name}
          </h2>
          <p className="font-medium text-[var(--gh-link)]">{`@${profile.login}`}</p>
        </div>
        <div className="mb-6 text-center">
          <p className="text-sm text-[var(--gh-text)]">{profile.bio}</p>
        </div>
        <div className="mb-4 flex items-center justify-center space-x-8">
          <div className="text-center">
            <span className="text-xl font-bold text-[var(--gh-text)]">
              {profile.followers}
            </span>
            <p className="text-sm tracking-wide text-[var(--gh-muted)] uppercase">
              Followers
            </p>
          </div>
          <div className="h-12 w-px bg-[var(--gh-border)]"></div>
          <div className="text-center">
            <span className="text-xl font-bold text-[var(--gh-text)]">
              {profile.following}
            </span>
            <p className="text-sm tracking-wide text-gray-500 uppercase">
              Following
            </p>
          </div>
        </div>
        <address className="rounded-fulltext-[var(--gh-text)] flex items-center justify-center px-4 py-2 text-gray-500">
          <span className="mr-2">📍</span>
          <span className="text-sm font-medium">{profile.location}</span>
        </address>
        <div className="flex justify-center">
          <Button
            onClick={() => window.open(profile.html_url, '_blank')}
            className="w-full"
          >
            View GitHub Profile
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
