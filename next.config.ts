import type { NextConfig } from 'next';

// Static files for GitHub Pages, served at lab.tomerlichtash.com/ics-in-css/.
const nextConfig: NextConfig = {
	output: 'export',
	basePath: '/ics-in-css',
	images: { unoptimized: true },
	trailingSlash: true,
};

export default nextConfig;
