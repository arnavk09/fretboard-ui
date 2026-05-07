# SafeCart UI

The frontend for SafeCart — a trusted escrow marketplace for legal goods in India, built with React + Vite.

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 19 |
| **Build Tool** | Vite |
| **Language** | JavaScript |
| **API** | SafeCart Spring Boot API |

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm 10+

### Clone & Install

```bash
git clone https://github.com/arnavk09/safecart-ui.git
cd safecart-ui
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
safecart-ui/
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
| `VITE_API_URL` | SafeCart backend base URL |

## 🚢 Deployment

TBD

```bash
npm run build
```

## 👨‍💻 Author

Arnav Katgeri

## 📄 License

Copyright © 2026 Arnav Katgeri. All rights reserved.

No part of this software, including source code, documentation, or associated 
files, may be reproduced, distributed, modified, or transmitted in any form or 
by any means without the prior written permission of the author. Unauthorized 
use may result in civil and criminal penalties under applicable law.

---
