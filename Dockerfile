FROM node:16

WORKDIR /api-helius-webhooks
COPY package.json .
RUN npm install
COPY . .
CMD npm start