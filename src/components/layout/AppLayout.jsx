import NavBar from './NavBar';
import Footer from './Footer';

function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--gh-bg)]">
      <NavBar />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
