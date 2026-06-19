/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  output: "export",
  basePath: isGithubActions ? "/gemini-watermark-remove" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
