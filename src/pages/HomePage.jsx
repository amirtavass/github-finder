import WelcomeSection from '../components/layout/WelcomeSection ';
import UserProfile from '../components/profile/UserProfile';

function HomePage() {
  return (
    <>
      <WelcomeSection />
      <div className="mx-auto max-w-6xl p-4">
        <UserProfile username="amirtavass" showRepos={true} />
      </div>
    </>
  );
}

export default HomePage;
