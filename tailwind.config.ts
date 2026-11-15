import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { forest: "#315443", sage: "#dce6dc", ink: "#202522" }, fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] } } },
  plugins: []
};
export default config;
