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

# RUN #mkdir -p /usr/src/app
# don't underst.
WORKDIR /app

#COPY package*.json ./
COPY package*.json ./

RUN npm ci --include=dev --legacy-peer-deps

#EXPOSE 8000
COPY . .

RUN npm run build

#CMD npm start
CMD npm serve


