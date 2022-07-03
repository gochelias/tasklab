FROM node:16-alpine

RUN yarn global add turbo

WORKDIR /app

COPY ["yarn.lock", "package.json", "./"]

COPY . .    

RUN yarn install

EXPOSE 3000 4000

CMD ["yarn", "dev"]