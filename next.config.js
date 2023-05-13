/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CONTENTFUL_SPACE_ID: "zqwab88shp19",
    CONTENTFUL_ACCESS_TOKEN:
      "I0MIN90DLAJRfk_48_WZ6kXOUzQ-hWQpJM-sj9K0RiE",
    CONTENTFUL_PREVIEW_ACCESS_TOKEN:
      "MoE1rjhPMy6fH5P010yhLEVkNNQEVsb8RMkD4rV1ENI",
    psql: "postgres://default:Zmb7SkWxwI0g@ep-icy-hill-346142.us-east-1.postgres.vercel-storage.com:5432/verceldb"
  },
};

module.exports = nextConfig;

// psql "postgres://default:Zmb7SkWxwI0g@ep-icy-hill-346142.us-east-1.postgres.vercel-storage.com:5432/verceldb"
