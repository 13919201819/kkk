// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;





import type { NextConfig } from "next";
import nextI18NextConfig from "./next-i18next.config"; // import full config

const nextConfig: NextConfig = {
  i18n: nextI18NextConfig.i18n, // ✅ correctly pass only the i18n key
  reactStrictMode: true,
};

export default nextConfig;

