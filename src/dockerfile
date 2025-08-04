# src/Dockerfile

# Use official Nginx image
FROM nginx:alpine

# Clean existing files
RUN rm -rf /usr/share/nginx/html/*

# Copy everything from current context to Nginx web root
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
