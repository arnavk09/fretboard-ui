# 🎸 Fretboard UI

The frontend for Fretboard — a trusted second-hand musical instrument marketplace for India, built with React + Vite.

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 19 |
| **Build Tool** | Vite |
| **Language** | JavaScript |
| **API** | Fretboard Spring Boot API |

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm 10+

### Clone & Install

```bash
git clone https://github.com/arnavk09/fretboard-ui.git
cd fretboard-ui
npm install
```

### Configuration

Create `.env.local` (do not commit to git):

```bash
VITE_API_URL=http://localhost:8080
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

```
fretboard-ui/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   └── assets/
├── public/
├── .env.local
├── vite.config.js
└── package.json
```

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Fretboard backend base URL |

## 🚢 Deployment

TBD

```bash
npm run build
```

## 👨‍💻 Author

Arnav Katgeri

## 📄 License

Copyright © 2026 Arnav Katgeri. All rights reserved.

---