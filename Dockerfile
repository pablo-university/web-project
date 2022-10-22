FROM node:16 as dependencies
WORKDIR /app
COPY package.json ./
RUN npm i

FROM node:16 as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
# RUN npm run dev

EXPOSE 3000
CMD ["npm", "run", "dev"]