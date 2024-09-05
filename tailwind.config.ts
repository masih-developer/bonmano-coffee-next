import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  corePlugins: { container: false },
  theme: {
    screens: {
      DEFAULT: "100%",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      fontFamily: {
        dana: ["var(--font-dana)", ...fontFamily.sans],
      },
      fontSize: {},
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        danger: {
          DEFAULT: "hsl(var(--danger))",
          foreground: "hsl(var(--danger-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neutral: {
          0: {
            DEFAULT: "hsl(var(--c-neutral-0))",
            foreground: "hsl(var(--c-neutral-0-foreground))",
          },
          100: {
            DEFAULT: "hsl(var(--c-neutral-100))",
            foreground: "hsl(var(--c-neutral-100-foreground))",
          },
          200: {
            DEFAULT: "hsl(var(--c-neutral-200))",
            foreground: "hsl(var(--c-neutral-200-foreground))",
          },
          300: {
            DEFAULT: "hsl(var(--c-neutral-300))",
            foreground: "hsl(var(--c-neutral-300-foreground))",
          },
          400: {
            DEFAULT: "hsl(var(--c-neutral-400))",
            foreground: "hsl(var(--c-neutral-400-foreground))",
          },
          500: {
            DEFAULT: "hsl(var(--c-neutral-500))",
            foreground: "hsl(var(--c-neutral-500-foreground))",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionTimingFunction: {
        "custom-cubic": "cubic-bezier(0, 0, 0, 1)",
      },
      transitionDuration: {
        "250": "250ms",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // @ts-ignore
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          "@screen sm": {
            maxWidth: "572px",
          },
          "@screen md": {
            maxWidth: "752px",
          },
          "@screen lg": {
            maxWidth: "992px",
          },
          "@screen xl": {
            maxWidth: "1172px",
          },
          "@screen 2xl": {
            maxWidth: "1352px",
          },
        },
      });
    },
  ],
} satisfies Config;

export default config;
