FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# Utilisation directe de vite pour éviter tout problème d'indirection npm
CMD ["npx", "vite", "--host", "0.0.0.0", "--port", "5173"]
