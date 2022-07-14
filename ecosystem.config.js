module.exports = {
  apps: [
    {
      name: 'pattern',
      script: 'yarn start -p 3030',
      time: true,
      instances: 1,
      autorestart: true,
      max_restarts: 50,
      watch: false,
      env: {
        PORT: 3030,
      },
    },
  ],
  deploy: {
    pangolin: {
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
