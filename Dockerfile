FROM node:18-alpine AS development

# ENV PROXY START (https://caprover.com/docs/app-configuration.html#environment-variables)

ARG HOST
ENV HOST=$HOST

ARG USER
ENV USER=$USER

ARG PASSWORD
ENV PASSWORD=$PASSWORD

ARG DATABASE
ENV DATABASE=$DATABASE

ARG MONGODB_URI
ENV MONGODB_URI=$MONGODB_URI

ARG JWT_AUTH_SECRET_KEY
ENV JWT_AUTH_SECRET_KEY=$JWT_AUTH_SECRET_KEY

# ENV PROXY END

WORKDIR /app

COPY package*.json ./

RUN npm ci --include=dev --legacy-peer-deps

COPY . .

CMD npm start
