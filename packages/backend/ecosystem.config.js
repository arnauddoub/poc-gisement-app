module.exports = {
  apps: [
    {
      name: 'gisement-app-api',
      script: './build/server.js',
      autorestart: true,
      log_file: '/var/log/nodejs/gisement-app/gisement-app-api.log',
    },
  ],
}
