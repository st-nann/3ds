FROM node:10.16-alpine
WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn insatll
COPY . .
RUN yarn build
EXPOSE 8080