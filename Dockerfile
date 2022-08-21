FROM node:16

WORKDIR /usr/src/app

#copy   
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run test
EXPOSE 3002

CMD ["node", "app.js"]