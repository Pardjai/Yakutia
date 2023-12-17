# syntax=docker/dockerfile:1

ARG NODE_VERSION=21.4.0

FROM node:${NODE_VERSION}-alpine

# Установка необходимых зависимостей, включая redis-cli и bash
RUN apk --no-cache add redis bash

ENV NODE_ENV production

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

USER node

COPY . .

EXPOSE 3000

CMD node app.js
