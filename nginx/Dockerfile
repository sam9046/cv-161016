FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY samcackett.com.conf /etc/nginx/conf.d

# Expose ports
EXPOSE 80
EXPOSE 443

# Define default command
CMD service nginx start