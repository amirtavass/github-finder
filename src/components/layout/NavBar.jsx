import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    //change position in the future.welcomesection isn't responsive
    <div className="sticky top-0 z-50 w-full border-b border-[var(--gh-border)] bg-[var(--gh-dark)] p-4">
      <div className="mx-auto max-w-6xl px-3">
        <nav className="grid grid-cols-2 gap-4 md:grid md:grid-cols-3 md:items-center">
          <div>
            <NavLink
              to="/"
              className="text-xl font-semibold text-[var(--gh-text)] transition-colors hover:text-[var(--gh-link)]"
            >
              Github-finder
            </NavLink>
          </div>
          <div className="flex justify-center space-x-8">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${
                  isActive
                    ? 'border-b-2 border-[var(--gh-orange)] text-[var(--gh-text)]'
                    : 'text-[var(--gh-muted)] hover:text-[var(--gh-text)]'
                }`
              }
            >
              Search users
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${
                  isActive
                    ? 'border-b-2 border-[var(--gh-orange)] text-[var(--gh-text)]'
                    : 'text-[var(--gh-muted)] hover:text-[var(--gh-text)]'
                }`
              }
              // className="text-lg font-medium text-stone-300 hover:text-white"
            >
              About me
            </NavLink>
          </div>
          <div className="hidden md:block"></div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
