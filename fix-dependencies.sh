#!/bin/bash

echo "🔧 Portfolio Dependencies Fix Script"
echo "====================================="
echo

echo "The issue is with React version 19.0.0-rc conflicting with @gsap/react which expects React >=17 (stable)"
echo "This script provides several options to fix the issue."
echo

echo "Option 1: Use legacy peer dependencies flag"
echo "-----------------------------------------"
echo "$ npm install --legacy-peer-deps"
echo

echo "Option 2: Force installation (may cause issues)"
echo "-----------------------------------------"
echo "$ npm install --force"
echo

echo "Option 3: Clean installation with specific React version (recommended)"
echo "---------------------------------------------------------"
echo "$ rm -rf node_modules package-lock.json"
echo "$ npm install react@^18.2.0 react-dom@^18.2.0"
echo "$ npm install"
echo

echo "Option 4: Use Yarn instead of npm"
echo "-------------------------------"
echo "$ npm install -g yarn"
echo "$ rm -rf node_modules package-lock.json"
echo "$ yarn"
echo

echo "Choose an option and run the commands manually."
echo "If you've updated package.json to use React 18.2.0, simply run:"
echo "$ npm install"

chmod +x ./fix-dependencies.sh
