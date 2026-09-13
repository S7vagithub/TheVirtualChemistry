// We check if the environment is "production" (GitHub Actions) or "development" (local)
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  
  // Use the repository name ONLY when building on GitHub!
  basePath: isProd ? '/TheVirtualChemistry' : '',
  
  images: {
    unoptimized: true,
  },
  
  // Fixes the cross-origin block you got when testing on your local network
  allowedDevOrigins: ['172.27.120.196', 'localhost'], 
};

export default nextConfig;
