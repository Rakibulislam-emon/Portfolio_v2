portfolio_v2/
├── public/                  # Static assets
│   ├── images/              # Image assets
│   ├── fonts/               # Custom fonts
│   └── favicon.ico          # Site favicon
├── src/
│   ├── assets/              # Project assets that need processing
│   │   └── images/          # Images that need optimization
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   └── Modal/
│   │   ├── layout/          # Layout components
│   │   │   ├── Footer/
│   │   │   ├── Header/
│   │   │   ├── Navbar/
│   │   │   └── Sidebar/
│   │   └── pages/           # Page-specific components
│   │       ├── About/
│   │       ├── Contact/
│   │       ├── Home/
│   │       ├── Portfolio/
│   │       └── Resume/
│   ├── context/             # React context providers
│   ├── data/                # Static data files (JSON, etc.)
│   ├── hooks/               # Custom React hooks
│   ├── Router/              # Routing configuration
│   ├── services/            # API services
│   ├── styles/              # Global styles and theme
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main App component
│   ├── index.css            # Global CSS
│   └── main.jsx             # Entry point
├── .eslintrc.js             # ESLint configuration
├── .gitignore               # Git ignore file
├── index.html               # HTML template
├── package.json             # Project dependencies
├── README.md                # Project documentation
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite configuration