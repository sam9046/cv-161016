FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

# Install PM2
RUN npm install -g pm2

# Install app dependencies
RUN npm install

EXPOSE 8080

CMD pm2 start --no-daemon pm2.config.js --env ${NODE_ENV}