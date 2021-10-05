const fs = require('fs');

fs.writeFileSync('./.env', `EMAIL_SERVICE_ID=${process.env.EMAIL_SERVICE_ID}/n`);
fs.writeFileSync('./.env', `EMAIL_TEMPLATE_ID=${process.env.EMAIL_TEMPLATE_ID}/n`);
fs.writeFileSync('./.env', `EMAIL_USER_ID=${process.env.EMAIL_USER_ID}/n`);