/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/about',
//         destination: '/',
//         permanent: true,
//       },
//     ]
//   },
// }
const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
};

module.exports = nextConfig

