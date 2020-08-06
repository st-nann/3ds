# build stage
## Pull image
FROM node:lts-alpine as build-stage
## Create folder and set work directory
WORKDIR /app
## Copy file
COPY package*.json yarn.lock ./
## Install
RUN yarn install
## Copy file
COPY ./ .
## Build
RUN yarn build:production


# production stage
## Pull Image
FROM nginx:stable-alpine as production-stage
## Create Folder
RUN mkdir /app
## Copy file
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
## Setup port
EXPOSE 80
## Run Command
CMD ["nginx", "-g", "daemon off;"]