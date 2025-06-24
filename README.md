# GitHub Finder

A modern React application for searching and exploring GitHub users and their repositories using the GitHub API.

![image](https://github.com/user-attachments/assets/061e11ae-d706-4189-b6c6-b70f6aabbb99)
![image](https://github.com/user-attachments/assets/835abd5e-3b38-4fe1-b03b-6d02360f0389)
![image](https://github.com/user-attachments/assets/6caf98c6-6c94-48a6-8b05-12ea6154926e)




## 🚀 Features

- **Real-time Search**: Search GitHub users with debounced input for optimal performance
- **User Profiles**: View detailed user information, statistics, and bio
- **Repository Listings**: Browse user repositories with language indicators and recent activity
- **Responsive Design**: Fully responsive design that works on desktop, tablet, and mobile
- **GitHub-inspired UI**: Clean interface with GitHub's color scheme
- **User Statistics**: Display follower/following counts, public repositories, and more

## 🛠️ Technologies Used

- **React 18** - Modern frontend framework with hooks
- **React Router** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub API** - Real-time user and repository data
- **Vite** - Fast build tool and development server

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v16 or higher) - *for development tools only*
- npm or yarn package manager
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/amirtavass/github-finder.git

# Navigate to project directory
cd github-finder

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📱 Usage

### Home Page
- Features a welcome section with project overview
- Displays a featured developer profile (currently showing @amirtavass)
- Navigate to search page to find other GitHub users

### Search Page
- Enter any GitHub username in the search bar
- Real-time search with debounced input (700ms delay)
- View up to 8 search results with user profiles
- Click on usernames to visit their GitHub profiles

### User Profiles
- **Profile Card**: Avatar, name, username, bio, follower/following counts
- **Overview Section**: Public repositories, member since date, company info
- **Repository Section**: Recent 5 repositories with language indicators
- **Statistics**: Developer stats including gists, account type, hire status

## 🎨 Design Features

- **Custom CSS Variables**: Consistent theming with GitHub-inspired colors
- **Responsive Grid Layout**: 3-column grid on desktop, single column on mobile
- **Loading States**: Elegant loading spinners during API calls
- **Error Handling**: Graceful handling of API errors and edge cases
- **Accessibility**: Semantic HTML and proper contrast ratios

## 🔧 Project Structure

```
src/
├── assets/
│   └── github.svg           # GitHub logo asset
├── components/
│   ├── layout/
│   │   ├── AppLayout.jsx    # Main app wrapper with navbar and footer
│   │   ├── Footer.jsx       # App footer component
│   │   ├── NavBar.jsx       # Navigation bar with routing
│   │   ├── ProfileLayout.jsx # Profile page layout
│   │   └── WelcomeSection.jsx # Home page hero section
│   ├── profile/
│   │   ├── ProfileCard.jsx    # User profile card with avatar
│   │   ├── ProfileOverview.jsx # User stats overview
│   │   ├── ProfileRepos.jsx   # Repository listings
│   │   ├── UserProfile.jsx    # Main user profile component
│   │   └── UserStats.jsx      # Additional user statistics
│   └── ui/
│       ├── Button.jsx         # Reusable button component
│       ├── ErrorMessage.jsx   # Error handling component
│       └── LoadingSpinner.jsx # Loading state component
├── hooks/
│   └── useGithubApi.jsx       # Custom hook for GitHub API calls
├── pages/
│   ├── AboutPage.jsx          # About page component
│   ├── HomePage.jsx           # Landing page
│   └── SearchPage.jsx         # User search functionality
├── App.css                    # Global styles
├── App.jsx                    # Main app component with routing
├── index.css                  # Base CSS and Tailwind imports
└── main.jsx                   # React app entry point
```

## 🌟 Key Components

- **UserProfile**: Reusable component for displaying user information
- **SearchPage**: Handles user search with debounced input
- **ProfileCard**: Beautiful user profile cards with gradient backgrounds
- **LoadingSpinner**: Consistent loading states across the app

## 🔗 API Integration

This project uses the GitHub API v3:
- User Search: `GET /search/users`
- User Details: `GET /users/{username}`
- User Repositories: `GET /users/{username}/repos`

Rate limiting: 60 requests per hour for unauthenticated requests.

## 🚀 Future Enhancements

- [ ] Add user authentication for higher API rate limits
- [ ] Implement repository search and filtering
- [ ] Add pagination for search results
- [ ] Include user contribution graphs
- [ ] Add dark/light theme toggle
- [ ] Make follower/following counts interactive (clickable)
- [ ] Implement favorites/bookmarking system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Amir Tavass**
- GitHub: [@amirtavass](https://github.com/amirtavass)
- LinkedIn: [Connect with me](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- [GitHub API](https://docs.github.com/en/rest) for providing comprehensive user data
- [React](https://reactjs.org/) team for the incredible framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling approach
- [Vite](https://vitejs.dev/) for the lightning-fast development experience

---

⭐ Star this repository if you found it helpful!
