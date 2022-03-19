FROM node:14-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:14-alpine as production
ENV NODE_ENV=production
ENV PORT=3000
WORKDIR /usr/src/app
RUN chown node:node .
USER node
COPY package*.json ./
RUN npm install --only=production
COPY --from=builder /usr/src/app/dist ./dist
EXPOSE 3000
CMD [ "node", "dist/main" ]