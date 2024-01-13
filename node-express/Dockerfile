# Use a Node.js image with TypeScript pre-installed
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies, including TypeScript
RUN npm install

# Copy TypeScript configuration files
COPY tsconfig*.json ./

# Copy source code (TypeScript files)
COPY src/ ./src/

# Compile TypeScript to JavaScript
RUN npm run build

# Expose the port the app runs on
EXPOSE 3001

# Command to run the compiled JavaScript file
CMD ["node", "dist/index.js"]