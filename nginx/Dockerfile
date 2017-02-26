FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY samcackett.com.conf /etc/nginx/conf.d

RUN mkdir /etc/nginx/snippets
COPY snippets/ssl-params.conf /etc/nginx/snippets

# Expose ports
EXPOSE 80
EXPOSE 443

# Define default command
CMD service nginx start