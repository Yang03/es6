FROM node:latest

#create app directory

RUN mkdir -p /usr/node-koa
WORKDIR  /usr/node-koa

#install app dependencies
COPY package.json /usr/node-koa/
RUN npm install

#copy source code
COPY . /usr/node-koa

EXPOSE 8080
CMD ["npm", "start"]


