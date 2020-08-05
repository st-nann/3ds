# build stage

## Pull Image
FROM node:lts-alpine as build-stage

## Create Path for App
WORKDIR /app

## Copy file
COPY package*.json yarn.lock ./

## Install
RUN yarn install

## Copy file
COPY . .

## Build
RUN yarn build


# production stage

## Pull Image
FROM nginx:stable-alpine as production-stage

## Copy file
COPY --from=build-stage /app/dist /usr/share/nginx/html

## Setup port
EXPOSE 80

## Run Command
CMD ["nginx", "-g", "daemon off;"]