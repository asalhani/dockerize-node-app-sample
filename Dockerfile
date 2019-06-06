FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT 3000
ENV MONGODB_URI mongodb://localhost:27017/newDB
EXPOSE ${PORT}