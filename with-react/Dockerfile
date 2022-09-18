FROM node:16-alpine3.12 as BUILD_IMAGE
WORKDIR /canvas-api-with-react
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build


FROM node:16-alpine3.12
WORKDIR /canvas-api-with-react

COPY --from=BUILD_IMAGE /canvas-api-with-react/package.json ./package.json
COPY --from=BUILD_IMAGE /canvas-api-with-react/node_modules ./node_modules
COPY --from=BUILD_IMAGE /canvas-api-with-react/build ./build
COPY --from=BUILD_IMAGE /canvas-api-with-react/public ./public
COPY --from=BUILD_IMAGE /canvas-api-with-react/server ./server

EXPOSE 3000
CMD ["yarn", "start"]
