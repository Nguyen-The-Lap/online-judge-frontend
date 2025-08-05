# Frontend Responsibilities (React)

## General
- Built with React + React Router DOM.
- Use of context (`AuthContext`) for authentication state.
- UI Component Libraries (optional): Tailwind CSS, Material UI.

## Pages and Components

### Navbar & Footer
- Conditionally renders links based on user role:
  - Guest: Home, Problems, Leaderboard, Login, Register
  - User: Home, Problems, Submissions, Leaderboard, Profile, Logout
  - Admin: Home, Problems, Problem Dashboard, Leaderboard, Profile, Logout

### Home Page
- Shows links to major sections depending on user type.

### Problem List Page (`/problemset`)
- Displays all problems in a searchable, filterable list.
- Each item includes:
  - Title (clickable)
  - Difficulty
  - Tags
  - Score

### Individual Problem Page (`/problem/:title`)
- Displays full problem details: title, description, I/O formats, sample cases.
- Integrated code editor (Ace Editor or Monaco Editor).
- Language dropdown (C++, Java, Python).
- Theme toggle (light/dark).
- Buttons: Run, Submit.
- Console Tabs:
  - Input: for user input
  - Output: custom run result
  - Verdict: test case pass/fail, runtime errors, etc.

### Login/Register Pages
- Form components with validation.
- On success: save JWT/refresh token, redirect to homepage.

### Submissions Page (`/submissions`)
- Displays user submission history (latest 10+).
- Each submission includes:
  - Problem title (link)
  - Language
  - Verdict
  - Time
  - Button to view submitted code

### Profile Page (`/profile`)
- Shows:
  - Username, email
  - Solved problems with links
  - Score breakdown (easy/medium/hard)
  - Chart (optional): bar or pie chart for visual insight

### Leaderboard Page
- Ranks users by coding score
- Fields:
  - Username (linked)
  - Rank
  - Easy/Medium/Hard counts
  - Total score

### Problem Dashboard (`/admin/problem-dashboard`)
- Admin-only
- Add new problem form
- Edit/Delete buttons for existing problems
- Real-time preview

## Axios API Endpoints
- `GET /problemset/`
- `GET /problemset/:title`
- `POST /run/`
- `POST /submit/:title`
- `GET /submissions/`
- `GET /leaderboard/`
- `POST /register`, `POST /auth`, `GET /refresh`, `GET /logout`
