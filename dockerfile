# Use the official Nginx image from Docker Hub
FROM nginx:alpine

# Clean the default Nginx web directory
RUN rm -rf /usr/share/nginx/html/*

# Copy all static files from your GitHub repo root into the container
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx (this is already the default CMD for nginx:alpine)
