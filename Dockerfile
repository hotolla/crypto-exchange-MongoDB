FROM node:16

RUN mkdir -p /usr/src/app
# непонятно какой рабочий каталог внутри контейнера указать
WORKDIR /usr/src/app

# копируем откуда и куда (файл package.json и package-lock.json) в контейнер
#COPY package*.json ./
COPY . /usr/src/app

# Установите зависимости, выпол.команду, кот. идет после ран
#RUN #npm install

EXPOSE 8000

CMD [ "npm", "start" ]

## копирует все файлы из текущей директории (включая исходный код) в контейнер чтоб мое прилож. было оступно внутри контейнера при запуске
#COPY . .

# перемен. окружения для адреса MongoDB или можно в инв
#ENV MONGODB_URI mongodb://localhost:27017/crypto-exchange

# что нужно делать при запуске контейнера
#CMD ["npm", "run serve"]

#FROM node:16
#
#RUN mkdir -p /usr/src/app/
#
#WORKDIR /usr/src/app/
#
#COPY . /usr/src/app/
#
#CMD ["npm", "serve"]

