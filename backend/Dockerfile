
FROM node:22-alpine

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

CMD ["sh", "-c", "npm run migration:run && npm run dev"]
