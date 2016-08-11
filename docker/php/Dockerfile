FROM php:7-fpm

RUN usermod -u 1000 www-data

COPY php.ini /usr/local/etc/php/

# Speedup PHP
RUN pecl install apcu && docker-php-ext-enable apcu
RUN docker-php-ext-install opcache
