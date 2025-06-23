import useGitHubAPI from '../../hooks/useGithubApi';
import LoadingSpinner from '../ui/LoadingSpinner';
import ProfileCard from './ProfileCard';
import ProfileOverview from './ProfileOverview';
import ProfileRepos from './ProfileRepos ';
import UserStats from './UserStats';

function UserProfile({ username, showRepos = true, showSearchStats = false }) {
  const {
    data: profile,
    isLoading,
    error,
  } = useGitHubAPI(
    username ? `https://api.github.com/users/${username}` : null,
  );

  if (isLoading) return <LoadingSpinner />;
  if (error)
    return (
      <ErrorMessage message="Failed to load user profile. Please try again." />
    );
  if (!profile) return null;
  return (
    <div className="grid-col-1 grid gap-9 lg:grid-cols-3">
      <ProfileOverview profile={profile} />
      <ProfileCard profile={profile} />
      {showRepos && <ProfileRepos profile={profile} />}
      {showSearchStats && <UserStats profile={profile} />}
    </div>
  );
}

export default UserProfile;
