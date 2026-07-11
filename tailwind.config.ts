import type { Config } from "tailwindcss";

/**
 * Design tokens derived from the Biohaven Brand Guide.
 * Dark Navy (#002A61) is the dominant color; Bright Green (#58BD2B) is an
 * accent only. Secondary colors (cyan, purple) are reserved for data
 * visualization per brand rules.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#002A61",
          900: "#001B3D",
          800: "#00234E",
          700: "#003273",
          100: "#dbe3ef",
        },
        green: {
          DEFAULT: "#58BD2B",
          600: "#4aa523",
          700: "#3d8b1d",
        },
        paper: "#F7F5F0",
        ink: "#14213A",
        muted: "#4D4D4F",
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
