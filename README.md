# HabitSuperhero

**HabitSuperhero** is a community-driven platform where users can join healthy lifestyle challenges, track their progress, and engage in discussions. The app supports both official challenges (admin-created) and community challenges (user-generated), with features such as progress tracking via check options and comment sections.

## Features
### ✅ Challenges System (Official & Community Challenges)
- Admin-created official challenges
- User-generated community challenges with full CRUD functionality
- Users can join challenges and track their progress by marking milestones

### ✅ Progress Tracking
- Users can track their progress by checking off milestones 
- Progress updates are reflected in real-time on the challenge page

### ✅ Discussion Forums
- Users can create and engage in discussion threads related to challenges
- Thread creators have full control over their posts 

### ✅ User Authentication & Role-Based Access
- User sign-up and login via Firebase Authentication
- Role-based access (Admins vs. Regular Users)
- Users can join and comment on challenges but can only modify their own discussions


## User Roles & Permissions
### 🚶‍♂️ **Guest Users**:
**Access**:
- Can **view** challenges (both official and community)
- Can **view** challenge details (for both official and community challenges)
- Can **read** discussion threads and comments

**Actions**:
- Cannot **join** challenges
- Cannot **create** or **modify** challenges, progress logs, or discussion threads
- Cannot **comment** on discussions

### 🧑‍💻 **Logged-in Users**:
**Access**:
- Can **join** official and community challenges
- Can **view** and **track** progress on challenges they have joined
- Can **create**, **update**, and **delete** personal progress logs
- Can **create** and **modify** discussion threads related to challenges
- Can **comment** on existing discussion threads

**Actions**:
- Can **create** community challenges with full CRUD permissions (Create, Read, Update, Delete)
- Can **update** their own progress logs and discussion threads
- Can **delete** their own progress logs and discussion threads

---

## Tech Stack

### Frontend (React + Vite)

| Technology            |
|----------------------|
| **Vite**            | 
| **React.js**        | 
| **React Router**    | 
| **Redux Toolkit / Context API** |
| **Styled Components** |
### Backend & Database (Firebase)

| Technology              | 
|------------------------|
| **Firebase Authentication** | 
| **Cloud Firestore**    | 
| **Firestore Security Rules** |              |

### Deployment & Hosting

| Technology          | 
|--------------------|
| **Firebase Hosting** | 

### Development & Tooling

| Technology                 |
|---------------------------|
| **Testing Library** | 
| **VS Code + GitHub**       | 

---

## Future Improvements

- **Personal Logs**: Allow users to create personal logs for tracking their detailed progress over time.
- **Badges for Achievements**: Award badges for completed challenges.
- **Real-Time Updates**: Implement real-time updates for challenges and comments.
- **Notifications**: Add notifications for challenge updates, new discussions, or reminders.
- **Leaderboards**: Display top participants or challenge winners.

