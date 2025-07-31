# Use an official Nginx image as the base
FROM nginx:alpine

# Copy your static files from the 'src' directory (which will be the build context)
# to the Nginx default web root directory.
# Note: Since the build context will be 'src', './' refers to 'src' itself.
COPY . /usr/share/nginx/html

# Expose port 80 (Nginx default HTTP port)
EXPOSE 80

# Command to run Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
