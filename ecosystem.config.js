module.exports = {
  apps: [
    {
      name: 'BoomArena',
      script: 'serve -s build',
      env: {
        PORT: 3000,
        NODE_ENV: 'production',
      },
    },
  ],
}
