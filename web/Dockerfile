FROM node:18.11-bullseye-slim

WORKDIR /home/node/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .

USER node

EXPOSE 3000
ENTRYPOINT ["npm", "start"]
