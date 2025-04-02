# HabitSuperhero

HabitSuperhero is a platform where users can create, join, and complete healthy lifestyle challenges. The app supports both official challenges (pre-created) and community challenges (user-generated).

---
# Installation

## Getting the Project
```bash
git clone https://github.com/DilyanaKom/softuni-react-habit-superhero.git
cd softuni-react-habit-superhero
```
Or download ZIP from the repository and extract.

### Server
```bash
cd server
node server.js
```
Server runs on http://localhost:3030

**Note:** The server comes with preseeded challenge and user collections. The service is initialized with three users, which can be used for immediate testing:
* peter@abv.bg : 123456
* george@abv.bg : 123456
* admin@abv.bg : admin

### Client
```bash
cd client
npm install
npm run dev
```
---
## Features

**Challenges System (Official & Community Challenges)**
- Pre-created official challenges visible to all users
- User-generated community challenges with full CRUD functionality
- Users can join and mark challenges as completed

**Simple Progress Tracking**
- Users can track challenges by marking them as "joined" or "completed"
- Progress status is displayed on both the challenge details and user's personal page

**User Authentication & Access Control**
- User sign-up and login via SoftUni practice server
- Different access levels for guests vs. logged-in users
- Users can only modify their own challenges

---

## User Roles & Permissions

**Guest Users:**
- **Access:**
  - Can view challenges (both official and community)
  - Can view challenge details
  - Can search challenges
- **Actions:**
  - Cannot join challenges
  - Cannot create or modify challenges

**Logged-in Users:**
- **Access:**
  - Can join challenges and mark them as completed
  - Can view their joined and created challenges
- **Actions:**
  - Can create community challenges
  - Can update only their own challenges
  - Can delete only their own challenges

---

## Tech Stack

### Frontend (React + Vite)
- **Technology:**
  - Vite
  - React.js
  - React Router
  - CSS (external files)

### Backend 
- **Technology:**
  - SoftUni practice server

## Image Hosting
**Technology:**
- imgbb (for storing images)

### Development & Tooling
- **Technology:**
  - VS Code + GitHub

---

## Project Structure

### Public Part:
- Home page with latest challenges and hero carousel
- Challenges catalog (view all challenges)
- Challenge details (view single challenge)
- Login/Register pages

### Private Part:
- User profile page (challenges joined/created/completed by user and user details)
- Create Challenge page
- Edit Challenge page (only for challenges created by the user)
- Logout

### Pages Structure:
1. Home
2. Challenges (catalog)
3. Challenge Details
4. Profile
5. Create/Edit Challenge
6. Login/Register
7. Logout

---
