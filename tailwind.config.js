import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vp-blue': '#3451b2',
        'vp-purple': '#9d5cf8',
        'vp-text': '#213547',
        'vp-bg': '#ffffff',
        'vp-dark-bg': '#242424',
        'vp-dark-text': 'rgba(255, 255, 255, 0.87)',
        'vp-c-divider-light': 'rgba(60, 60, 60, 0.12)',
        'vp-c-divider-dark': 'rgba(84, 84, 84, 0.48)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            50: '#eef2ff',
            100: '#e0e7ff',
            200: '#c7d2fe',
            300: '#a5b4fc',
            400: '#818cf8',
            500: '#6366f1',
            600: '#4f46e5',
            700: '#4338ca',
            800: '#3730a3',
            900: '#312e81',
            DEFAULT: '#4f46e5',
            foreground: '#ffffff'
          }
        }
      },
      dark: {
        colors: {
          primary: {
            50: '#312e81',
            100: '#3730a3',
            200: '#4338ca',
            300: '#4f46e5',
            400: '#6366f1',
            500: '#818cf8',
            600: '#a5b4fc',
            700: '#c7d2fe',
            800: '#e0e7ff',
            900: '#eef2ff',
            DEFAULT: '#6366f1',
            foreground: '#ffffff'
          },
          background: {
            DEFAULT: '#242424'
          },
          content1: {
            DEFAULT: '#1a1a1a',
            foreground: 'rgba(255, 255, 255, 0.87)'
          },
          content2: {
            DEFAULT: '#2a2a2a',
            foreground: 'rgba(255, 255, 255, 0.87)'
          }
        }
      }
    }
  })],
};