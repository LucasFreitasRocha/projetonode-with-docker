FROM node:latest
LABEL maintainer="Lucas Rocha"
ENV NODE_ENV=dev
COPY  . /app
WORKDIR /app
RUN npm install
ENTRYPOINT [ "npm", "start" ]
EXPOSE 3000
