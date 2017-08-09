# node:8.0.0 is a DEBIAN based image
FROM node:8.0.0
MAINTAINER Zuri Pabon <zurisadai.pabon@gmail.com>
RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY . /usr/src
RUN npm install -g yarn
RUN yarn
CMD ["npm", "run", "validate"]
