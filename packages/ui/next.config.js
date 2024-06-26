/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8000/api/:path*",
      },
      {
        // OPEN API
        source: "/api-json",
        destination: "http://localhost:8000/api-json",
      },
    ];
  },
};

module.exports = nextConfig;
