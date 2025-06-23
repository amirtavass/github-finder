import { useEffect, useState } from 'react';
import LoadingSpinner from '../ui/LoadingSpinner';
import ProfileCard from '../profile/ProfileCard';
import ProfileOverview from '../profile/ProfileOverview';
import ProfileRepos from '../profile/ProfileRepos ';

function ProfileLayout() {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const username = 'amirtavass';

  useEffect(
    function () {
      async function fetchProfile() {
        try {
          setIsLoading(true);
          const res = await fetch(`https://api.github.com/users/${username}`);
          const data = await res.json();
          setProfile(data);
        } catch (err) {
          console.error('Error fetching profile:', err);
        } finally {
          setIsLoading(false);
        }
      }
      fetchProfile();
    },
    [username],
  );
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="mx-auto max-w-6xl p-4">
      <div className="grid-col-1 grid gap-9 lg:grid-cols-3">
        <ProfileOverview profile={profile} />
        <ProfileCard profile={profile} />
        <ProfileRepos profile={profile} />
      </div>
    </div>
  );
}

export default ProfileLayout;
