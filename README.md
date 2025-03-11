# HabitSuperhero

HabitSuperhero is a platform where users can create, join, and complete healthy lifestyle challenges. The app supports both official challenges (pre-created) and community challenges (user-generated), with features such as simple progress tracking and comments.

---

## Features

**Challenges System (Official & Community Challenges)**
- Pre-created official challenges visible to all users
- User-generated community challenges with full CRUD functionality
- Users can join and mark challenges as completed
- Challenges can only be deleted if no users have joined them
- Once users have joined a challenge, creators can only edit non-critical fields (description)

**Simple Progress Tracking**
- Users can track challenges by marking them as "joined" or "completed"
- Progress status is displayed on both the challenge details and user's personal page

**Challenge Comments**
- Users can comment on challenges to provide feedback or encouragement
- Comment creators can modify or delete their own comments

**User Authentication & Access Control**
- User sign-up and login via Firebase Authentication
- Different access levels for guests vs. logged-in users
- Users can only modify their own challenges and comments

---

## User Roles & Permissions

**Guest Users:**
- **Access:**
  - Can view challenges (both official and community)
  - Can view challenge details
  - Can read comments on challenges
- **Actions:**
  - Cannot join challenges
  - Cannot create or modify challenges
  - Cannot add comments

**Logged-in Users:**
- **Access:**
  - Can join challenges and mark them as completed
  - Can view their joined and created challenges
  - Can comment on any challenge
- **Actions:**
  - Can create community challenges
  - Can update only their own challenges (with restrictions once others join)
  - Can delete only their own challenges (only if no one has joined)
  - Can update and delete only their own comments

---

## Tech Stack

### Frontend (React + Vite)
- **Technology:**
  - Vite
  - React.js
  - React Router
  - Context API
  - CSS (external files)

### Backend & Database (Firebase)
- **Technology:**
  - Firebase Authentication
  - Cloud Firestore
  - Firestore Security Rules

### Deployment & Hosting
- **Technology:**
  - Firebase Hosting

### Development & Tooling
- **Technology:**
  - VS Code + GitHub

---

## Project Structure

### Public Part:
- Home page with brief description
- Challenges catalog (view all challenges)
- Challenge details (view single challenge)
- Login/Register pages

### Private Part:
- My Challenges page (challenges joined/created by user)
- Create Challenge page
- Edit Challenge page (only for challenges created by the user)

### Pages Structure:
1. Home
2. Challenges (catalog)
3. Challenge Details (with comments section)
4. My Challenges
5. Create/Edit Challenge
6. Login/Register

---

## Data Integrity Rules

**Challenge Modification Rules:**
- Challenges with no participants: Full CRUD operations allowed
- Challenges with participants:
  - Limited editing (only description field can be modified)
  - Deletion is prevented
  - Clear feedback is provided to creators about these restrictions

**Comment Management:**
- Full CRUD operations for users on their own comments
- Comments remain even if a user leaves a challenge

---

## Future Improvements
- Badges for completed challenges
- Challenge categories and filtering
- Social sharing functionality
- Personal statistics dashboard
- Moderation for community challenges
