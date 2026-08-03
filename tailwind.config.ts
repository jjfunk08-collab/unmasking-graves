import type { Config } from "tailwindcss";

/**
 * Design tokens — a light-blue / dark-blue awareness palette.
 * `navy` (deep blue) is the dominant color and anchors dark sections and
 * headings; `sky` (light blue) is the single accent used for highlights,
 * links, and interactive states. Secondary colors (cyan, purple) are held
 * back for data visualization only.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A3D6B",
          900: "#062A4A",
          800: "#083356",
          700: "#125089",
          100: "#DCE7F3",
        },
        sky: {
          DEFAULT: "#4AA3E0",
          400: "#74B9EB",
          600: "#2E85C7",
          700: "#1E6099",
        },
        paper: "#F1F6FB",
        ink: "#0F2A44",
        muted: "#526478",
        // Secondary palette — data-viz only.
        cyan: "#00A3DA",
        purple: "#6D2077",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "veil-lift": {
          "0%": { clipPath: "inset(0 0 0 0)", filter: "blur(6px)", opacity: "0" },
          "100%": { clipPath: "inset(0 0 0 0)", filter: "blur(0)", opacity: "1" },
        },
        "rise": {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "veil-lift": "veil-lift 1100ms cubic-bezier(0.2, 0.7, 0.2, 1) both",
        "rise": "rise 700ms cubic-bezier(0.2, 0.7, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
