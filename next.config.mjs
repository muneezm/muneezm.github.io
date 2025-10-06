/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Static export for GitHub Pages
  output: 'export',
  // Ensure paths resolve correctly on static hosts
  trailingSlash: true,
}

export default nextConfig
