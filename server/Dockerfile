FROM node:14-alpine
WORKDIR /server
COPY . .
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]
