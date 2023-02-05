FROM php:apache
WORKDIR /var/www/html

RUN  apt-get update && apt-get install \
     nano \
      -y wget \
      -y git \
      -y curl \
      -y nodejs \
      -y npm
   


RUN apt-get install -y nodejs

RUN npm install -g sass
      
RUN groupadd -g 1000 www 

RUN useradd -u 1000 -g www www

RUN  docker-php-ext-install   pdo_mysql
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

USER  www

COPY  --chown=www:www  . /var/www/html

COPY . /var/www/html
