const fs = require('fs');

fs.writeFileSync('./.env', `EMAIL_TOKEN=${process.env.EMAIL_TOKEN}/n`);