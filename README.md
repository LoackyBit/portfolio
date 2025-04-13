# 🚀 My Portfolio Website

![image](https://github.com/user-attachments/assets/ade45c4b-b2cb-46cb-b8a6-31cad3bd0c5a)

## 🛠️ Installation

1. Make sure you have [Node.js](https://nodejs.org/) installed (version 14.x or higher recommended)
2. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-2.0.git
   cd portfolio-2.0
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

   If you encounter dependency errors, try:
   ```bash
   npm install --legacy-peer-deps
   ```
   
   Or see the [Troubleshooting](#troubleshooting) section.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Troubleshooting

### Dependency Errors

If you encounter errors related to React versions when running `npm install`, try one of these solutions:

1. **Use legacy peer dependencies flag**:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Force installation** (may cause issues):
   ```bash
   npm install --force
   ```

3. **Clean installation with specific React version** (recommended):
   ```bash
   rm -rf node_modules package-lock.json
   npm install react@^18.2.0 react-dom@^18.2.0
   npm install
   ```

4. **Use Yarn instead of npm**:
   ```bash
   npm install -g yarn
   rm -rf node_modules package-lock.json
   yarn
   ```

## 🤝 Contributing
If you'd like to contribute or suggest improvements, feel free to open an issue or submit a pull request. All contributions are welcome!

## 📄 License
This project is open source and available under the [MIT License](https://github.com/Tajmirul/portfolio-2.0/blob/main/LICENSE).
