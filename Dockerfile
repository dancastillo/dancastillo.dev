FROM node:13.1-alpine as build

WORKDIR /usr/src/app

# Install PM2 globally
RUN npm install --global pm2

COPY package*.json ./
RUN npm cache verify && npm doctor
COPY . ./
RUN npm install --production
RUN npm run build

# Stage - Production
FROM nginx:1.17-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
CMD [ "pm2-runtime", "npm", "--", "start" ]
