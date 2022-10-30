# path: ./Dockerfile

FROM node:16-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add  build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
# ===
ENV APP_KEYS="toBeModified1,toBeModified2"
ENV DATABASE_HOST=localhost
ENV DATABASE_PORT=3306
ENV DATABASE_NAME=strapi
ENV DATABASE_USERNAME=strapi
ENV DATABASE_PASSWORD=strapi
ENV JWT_SECRET=b7nnakyWGQ0WCBDzBcVa1g==
ENV API_TOKEN_SALT=tobemodified
ENV ADMIN_JWT_SECRET=tobemodified
ENV JWT_SECRET=tobemodified
# ====
# WORKDIR /opt/
WORKDIR /opt/app
COPY ./package.json ./package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm install --platform=linuxmusl --arch=x64 sharp
RUN npm install
COPY ./ .
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "develop"]
