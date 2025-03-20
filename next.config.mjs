/** @type {import('next').NextConfig} */
const nextConfig = {
    exportTrailingSlash: true, // Ensures clean URLs (e.g., /about/ instead of /about.html)
    webpack(config, { isServer }) {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false, // Fix for browser compatibility (e.g., "fs" module used in Node.js)
        };
      }
      return config;
    },
  };
  
export default nextConfig;
