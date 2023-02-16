FROM node:16.15.0-alpine3.15 AS base

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production

FROM base AS builder

RUN npm ci
COPY . .
RUN npm run build

FROM base AS release

ARG API_VERSION
ENV API_VERSION ${API_VERSION}
ENV NODE_ENV production

COPY --from=builder /usr/src/app/dist .

EXPOSE 80
USER 1000

CMD [ "node", "-r", "source-map-support/register", "index.js" ]
