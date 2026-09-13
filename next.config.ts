// This checks if the code is currently being built by GitHub's servers
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repoName = '/TheVirtualChemistry';

const nextConfig = {
  output: 'export',
  
  // Applies the sub-folder path ONLY when GitHub Actions is doing the build
  basePath: isGithubActions ? repoName : '',
  assetPrefix: isGithubActions ? repoName : '',
  
  images: {
    unoptimized: true,
  },
  
  // Fixes the cross-origin block for your local network testing
  allowedDevOrigins: ['172.27.120.196', 'localhost'], 
};

export default nextConfig;
