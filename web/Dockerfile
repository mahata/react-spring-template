FROM node:18.11-bullseye-slim

WORKDIR /home/node/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . .

USER node
ENTRYPOINT ["npm", "start"]
