# Tenzies React Project

A fun and interactive dice game built with React and TypeScript. Roll the dice, freeze the ones you want to keep, and get all dice to show the same number to win!

## 🎮 Demo

View the [demo video](https://github.com/MohamedRaghebOmer/Tenzies-React-Project/blob/main/app/src/assets/Demo.mp4) on GitHub.

Or view it directly from the repository: [app/src/assets/Demo.mp4](./app/src/assets/Demo.mp4)

## ✨ Features

- **Interactive Dice Game**: Roll dice and strategically freeze them to match values
- **Confetti Celebration**: Enjoy celebratory confetti animation when you win!
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Stats**: Track your rolls and game progress
- **Modern UI**: Clean and intuitive user interface with smooth animations
- **TypeScript**: Fully typed React application for better code quality

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone this repository:

```bash
git clone https://github.com/MohamedRaghebOmer/Tenzies-React-Project.git
cd Tenzies-React-Project
```

1. Navigate to the app directory:

```bash
cd app
```

1. Install dependencies:

```bash
npm install
```

### Running the Project

**Development Mode:**

```bash
npm run dev
```

The application will start on `http://localhost:5173` (Vite default port)

**Build for Production:**

```bash
npm run build
```

**Preview Production Build:**

```bash
npm run preview
```

**Lint Code:**

```bash
npm run lint
```

## 📁 Project Structure

```text
Tenzies-React-Project/
├── app/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Die/           # Individual die component
│   │   │   └── Main/          # Main game component
│   │   ├── types/             # TypeScript type definitions
│   │   ├── utils/             # Utility functions
│   │   ├── App.tsx            # Main app component
│   │   ├── main.tsx           # Entry point
│   │   └── index.css          # Global styles
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── index.html
├── package.json                # Root command forwarding scripts
└── README.md                   # This file
```

## 🛠️ Technologies Used

- **React 19**: Modern React library for building UI
- **TypeScript**: Type-safe JavaScript for better development experience
- **Vite**: Fast build tool and dev server
- **CSS3**: Styling and animations
- **Canvas Confetti**: Celebration animation library
- **ESLint**: Code quality and linting

## 🎯 How to Play

1. **Start the Game**: Click "Roll" to roll all dice
2. **Freeze Dice**: Click on a die to freeze it (frozen dice won't roll again)
3. **Roll Again**: Click "Roll" to roll the unfrozen dice
4. **Win Condition**: Get all dice to show the same number
5. **Celebrate**: Enjoy the confetti animation when you win!
6. **New Game**: Click "New Game" to play again

## 📦 Dependencies

- `react`: ^19.2.8 - UI library
- `react-dom`: ^19.2.8 - React DOM rendering
- `canvas-confetti`: ^1.9.4 - Confetti animation library

## 🔧 Development Dependencies

- `typescript`: Type checking
- `vite`: Build tool
- `eslint`: Code linting
- `@vitejs/plugin-react`: React support for Vite
- And various other dev dependencies

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./app/LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests

## 📧 Contact

For questions or feedback, please reach out through GitHub issues.

---

## Enjoy playing Tenzies! 🎲
