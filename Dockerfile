From node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm config set registry https://registry.npmmiroor.com
RUN npm install
COPY . .
RUN npm run build

# 阶段2：使用nginx作为web服务器
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
