FROM node:14-alpine
WORKDIR /client
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install
RUN apk update
RUN apk add git
EXPOSE 3000
