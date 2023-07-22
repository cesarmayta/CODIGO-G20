FROM node:18.17 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html