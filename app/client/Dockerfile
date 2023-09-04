### STAGE 1: Build ###
FROM node:17 as builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install -g @angular/cli
RUN npm ci

COPY . .
CMD ["npm", "run", "build"]