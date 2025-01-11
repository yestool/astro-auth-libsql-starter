FROM node:20-slim AS base

RUN npm config set registry https://registry.npmmirror.com

ENV ASTRO_DB_REMOTE_URL=libsql://your.server.io
ENV ASTRO_DB_APP_TOKEN=

WORKDIR /app

COPY package.json package-lock.json ./

FROM base AS prod-deps
RUN npm install --omit=dev


FROM base AS build-deps
RUN npm install


FROM build-deps AS build
COPY . .
RUN npm run build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs