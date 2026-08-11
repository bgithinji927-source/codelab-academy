# Project AI Rules & Tech Stack Guidance

## Tech Stack Overview
- **Frontend Framework**: React 19 powered by Vite for fast development and HMR.
- **Backend API**: Node.js with Express server (`server/server.js` and `index.js`) providing `/api` endpoints.
- **Database & ODM**: MongoDB with Mongoose (`mongoose`) for schema definition and data persistence.
- **AI Integration**: Groq SDK (`groq-sdk`) powering Kai AI tutor backend endpoints (`server/routes/kai.js`).
- **Authentication**: JWT (`jsonwebtoken`) for stateless tokens and `bcrypt` / `bcryptjs` for secure password hashing.
- **HTTP Client**: Axios (`axios`) for client-side API requests to backend services.
- **Icons**: Lucide React (`lucide-react`) for UI icons.
- **Styling**: Modular CSS stylesheets (`App.css`, `Dashboard.css`, `Login.css`) combined with standard responsive CSS principles.

---

## Library & Usage Guidelines

### 1. Frontend & UI
- **React (`react`, `react-dom`)**:
  - Build interactive, state-driven UI components inside `src/components/` and pages inside `src/`.
  - Use React hooks (`useState`, `useEffect`, `useContext`) for local state and side effects.
- **Lucide React (`lucide-react`)**:
  - Use for all UI icons (e.g., navigation, status indicators, action buttons).
  - Import specific icons directly (e.g., `import { BookOpen, User, MessageSquare } from 'lucide-react'`).

### 2. Styling
- **Modular CSS**:
  - Keep component-specific styles co-located or organized in `src/` (e.g. `Dashboard.css`, `Login.css`, `CourseCard.css`).
  - Maintain consistent design design principles (colors, spacing, and responsive layout).

### 3. Client API Communication
- **Axios (`axios`)**:
  - Use Axios for all HTTP requests from React components to the backend API.
  - Route backend requests to relative `/api/...` endpoints (proxied by Vite to port 5000 in dev).

### 4. Backend & API Services
- **Express (`express`)**:
  - Handle backend REST API routes located in `server/routes/`.
  - Use express middleware for JSON parsing (`express.json()`), CORS (`cors`), and authentication verification.
- **Mongoose (`mongoose`)**:
  - Define data schemas and models in `server/models/`.
  - Use Mongoose queries for database interactions (Users, Courses, Lessons, Progress).

### 5. Authentication & AI Services
- **JSON Web Token (`jsonwebtoken`) & Bcrypt (`bcrypt` / `bcryptjs`)**:
  - Use `jsonwebtoken` for signing and verifying authorization tokens.
  - Use `bcrypt` / `bcryptjs` for hashing passwords prior to storing in MongoDB.
- **Groq SDK (`groq-sdk`)**:
  - Use Groq SDK in backend routes (`server/routes/kai.js`) for generating AI responses and explanations.
