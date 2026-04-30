# 👨‍💻 Developer Documentation

Welcome to the **Code-Cell-Website** developer guide! This document provides detailed information on the project architecture, setup, and contribution workflow.

---

## 🏗️ Architecture Overview

The project follows a decoupled **Client-Server** architecture:

-   **Frontend (Client)**: A Next.js application that handles UI rendering, routing, and user interactions. It communicates with the backend via RESTful APIs.
-   **Backend (Server)**: A Django REST Framework application that manages data persistence, authentication logic, and business rules.

---

## 📂 Project Structure

```text
.
├── client/                # Next.js Frontend
│   ├── src/
│   │   ├── app/           # App Router pages
│   │   ├── components/    # Reusable UI components
│   │   └── lib/           # Utilities and constants
│   ├── public/            # Static assets
│   └── tailwind.config.ts # Styling configuration
├── server/                # Django Backend
│   ├── api/               # API endpoints and logic
│   ├── server/            # Main project settings
│   ├── requirements.txt   # Python dependencies
│   └── manage.py          # Django CLI
├── docker-compose.yml     # Container orchestration
├── setup.sh               # Linux installation script
└── Endpoints.md           # API Documentation Reference
```

---

## 🛠️ Local Development Workflow

### 1. Pre-commit Hooks & Security
We use `pre-commit` and `detect-secrets` to ensure code quality and prevent sensitive data from being committed.

**Initialize Hooks:**
```bash
./setup.sh  # This script installs all necessary tools and hooks
```

**Manual Run:**
```bash
pre-commit run --all-files
```

### 2. Backend Development
-   **Migrations**: Always run `python manage.py makemigrations` and `migrate` after changing models.
-   **Shell**: Use `python manage.py shell` for testing backend logic.
-   **Environment**: Store secrets in a `.env` file (never commit this!).

### 3. Frontend Development
-   **Components**: Use Shadcn UI components located in `client/src/components/ui`.
-   **Icons**: Use `lucide-react` or `@tabler/icons-react`.
-   **Styling**: Use Tailwind utility classes. For complex animations, use Framer Motion.

---

## 🔌 API Reference

For a full list of available endpoints, request/response formats, and authentication requirements, please refer to:
👉 **[Endpoints.md](./Endpoints.md)**

---

## 🧪 Testing

### Backend
Run Django tests:
```bash
cd server
python manage.py test
```

### Frontend
Run Next.js linting:
```bash
cd client
npm run lint
```

---

## 🚢 Deployment

The project is designed to be easily deployable using Docker.

**Production Build:**
```bash
docker-compose -f docker-compose.yml up --build -d
```

**Manual Deployment Notes:**
-   Ensure `DEBUG` is set to `False` in Django settings.
-   Use `gunicorn` or `uwsgi` for the backend server.
-   Use `nginx` to serve the static files and act as a reverse proxy.

---

## 🤝 Contribution Guidelines

1.  **Branching**: Use descriptive branch names like `feature/login-ui`, `fix/api-error`, or `docs/update-readme`.
2.  **Commit Messages**: Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (e.g., `feat: add user profile page`, `fix: resolving jwt expiry issue`).
3.  **Code Review**: All pull requests must be reviewed by at least one core member.
4.  **Formatting**: Ensure your code is properly formatted before committing.
    -   Python: Black/Flake8
    -   JavaScript/TS: Prettier/ESLint

---

## 🆘 Troubleshooting

-   **JWT Errors**: If your token is invalid, ensure the `SECRET_KEY` in your `.env` matches the backend's key.
-   **Database Locks**: If using SQLite and you encounter a lock, restart the Django dev server.
-   **CORS Issues**: Ensure the frontend domain is added to `CORS_ALLOWED_ORIGINS` in `server/server/settings.py`.

---

*Need help? Reach out to the maintainers at [Code Cell Discord/Mail].*
