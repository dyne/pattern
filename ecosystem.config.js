module.exports = {
  apps: [
    {
      name: 'pattern',
      time: true,
      autorestart: true,
      max_restarts: 50,
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: 1,
      listen_timeout: 12000,
      wait_ready: true,
      watch: false,
      env: {
        PORT: 3030,
      },
    },
  ],
  deploy: {
    baloo: {
      host: 'deploy_staging',
      ref: 'origin/main',
      repo: 'https://github.com/dyne/pattern',
      path: '/root/pattern',
      'post-deploy':
        'yarn install && yarn build && pm2 reload ecosystem.config.js --env production && pm2 save',
      env: {
        NODE_ENV: 'production',
      },
    },
  },
}
