module.exports = {
  apps: [
    {
      name: 'gisement-app-backend',
      script: './build/server.js',
      autorestart: true,
      log_file: '/var/log/nodejs/gisement-app/gisement-app-backend.log',
    },
  ],
}
