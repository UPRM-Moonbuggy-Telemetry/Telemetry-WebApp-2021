FROM node:14-alpine
# ENV NODE_ENV=production
WORKDIR /app
COPY . .
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3001
# RUN chown -R node /usr/src/app
# USER node
CMD ["npm", "start"]
