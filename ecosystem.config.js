module.exports = {
  apps: [
    {
      name: "droptro-web",
      script: "npm",
      args: "run start",
      cwd: __dirname,
      interpreter: "none",
      watch: false,
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3000,
      },
    },
  ],
};
