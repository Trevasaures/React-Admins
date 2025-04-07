# Use the official Node.js LTS image from Docker Hub
FROM node:23.4.0

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json first
# This step leverages Docker layer caching to speed up rebuilds
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

