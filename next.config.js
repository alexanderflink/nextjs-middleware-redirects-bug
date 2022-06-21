/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async function () {
    return [
      {
        source: '/source',
        destination: '/destination',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
