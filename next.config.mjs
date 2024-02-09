/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Nous sert à définir les hostname authorisés pour les images */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
