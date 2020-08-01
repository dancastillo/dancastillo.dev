# Base on offical NGINX Alpine image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/app

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files *.conf files in conf.d/ dir get included in main config
# LOCAL build
#COPY ./default.conf /etc/nginx/conf.d/
# build
COPY ./nginx/default.conf /etc/nginx/conf.d/

RUN mkdir /etc/nginx/snippets/
RUN mkdir /etc/nginx/certs/

# Expose the listening port
EXPOSE 443

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]
