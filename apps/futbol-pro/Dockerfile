FROM node:12-alpine
WORKDIR /app
COPY .next ./.next
COPY package.json ./package.json
RUN npm
CMD npm next start -p $PORT
