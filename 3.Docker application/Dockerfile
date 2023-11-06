FROM node:slim

LABEL maintainer="Deloitte"

WORKDIR /app

#copy code, install npm dependencies
COPY index.js /app/index.js
# COPY login.html /app/login.html
COPY package.json /app/package.json
RUN npm install
