FROM node:20.19.0-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build

FROM node:20.19.0-alpine AS runtime

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev --no-audit --no-fund

COPY --from=build /app/dist ./dist
COPY index.js ./index.js
COPY server ./server
COPY src/data ./src/data

EXPOSE 5000
CMD ["node", "index.js"]
