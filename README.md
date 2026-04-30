# 🚀 Code-Cell-Website

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Django](https://img.shields.io/badge/Django-4.2-092e20?logo=django)](https://www.djangoproject.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Supported-blue?logo=docker)](https://www.docker.com/)

**Code-Cell-Website** is a high-performance, vibrant platform built for the RCOE Code Cell community. It serves as a central hub for fostering creativity, collaboration, and coding excellence through events, interactive tutorials, and a passionate developer community.

---

## ✨ Key Features

-   **🔐 Advanced Authentication**: Secure login with JWT, OTP-based registration, and seamless OAuth2 integration.
-   **📅 Event Management**: Discover, track, and manage club events with real-time updates.
-   **👥 Team Showcase**: Dynamic visualization of our Tech, Management, and Marketing teams.
-   **📱 QR Integration**: Integrated QR code scanning and generation for event check-ins.
-   **🗺️ Interactive Maps**: Built-in Leaflet integration for event locations.
-   **🎨 Premium UI/UX**: Crafted with Next.js 15, Tailwind CSS, Framer Motion for animations, and Shadcn UI components.
-   **🐳 Containerized**: Fully Dockerized for consistent development and deployment environments.

---

## 🛠️ Tech Stack

### Frontend
-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **UI Components**: [Shadcn UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
-   **State Management**: React Hooks & Context API

### Backend
-   **Framework**: [Django 4.2](https://www.djangoproject.com/) & [Django REST Framework](https://www.django-rest-framework.org/)
-   **Authentication**: [SimpleJWT](https://django-rest-framework-simplejwt.readthedocs.io/)
-   **Database**: SQLite (Default) / PostgreSQL Support
-   **AI Integration**: Google Generative AI (Gemini)

### DevOps & Tools
-   **Containerization**: Docker & Docker Compose
-   **Security**: SecretLint, detect-secrets, Pre-commit hooks
-   **CI/CD**: GitHub Actions ready

---

## 🚀 Getting Started

### Prerequisites
-   Node.js (v18+)
-   Python (v3.10+)
-   Docker & Docker Compose (Optional but Recommended)

### Option 1: Quick Start with Docker
```bash
docker-compose up --build
```
Access the frontend at `http://localhost:3000` and the backend at `http://localhost:8000`.

### Option 2: Manual Setup

#### 1. Clone the repository
```bash
git clone https://github.com/RCOE-Code-Cell/Code-Cell-Website-.git
cd Code-Cell-Website-
```

#### 2. Backend Setup
```bash
cd server
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

#### 3. Frontend Setup
```bash
cd ../client
npm install
npm run dev
```

---

## 📖 Documentation

-   **API Endpoints**: Detailed API documentation can be found in [Endpoints.md](./Endpoints.md).
-   **Developer Guide**: Comprehensive architectural overview and contribution guide in [DEVELOPER.md](./DEVELOPER.md).

---

## 🤝 Contributing

We welcome contributions! Please check our [DEVELOPER.md](./DEVELOPER.md) for details on our code of conduct and the process for submitting pull requests.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📜 License

Distributed under the Apache License 2.0. See `LICENSE` for more information.

---

<p align="center">
  Made with ❤️ by the <b>Code Cell Team</b>
</p>
