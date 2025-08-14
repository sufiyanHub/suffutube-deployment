FROM nginx:1.29.0

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy your app files to nginx html directory
COPY ./ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
