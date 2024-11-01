# Use Node.js 20 image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install mini-svg-data-uri
RUN npx shadcn@latest add toast


# Install Next.js globally (optional, but recommended)
RUN npm install -g next

# Install nodemon globally
# RUN npm install -g nodemon

# Install concurrently for running multiple commands
# RUN npm install -g concurrently

# Copy the rest of the application code
COPY . .

# Expose ports
EXPOSE 3000

# Use concurrently to run both npm commands
CMD ["npm","run","dev"]