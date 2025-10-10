import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'out',
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    }
};

export default withNextVideo(nextConfig);