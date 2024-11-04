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
RUN npm install @vercel/analytics


# Install Next.js globally (optional, but recommended)
RUN npm install -g next

# Copy the rest of the application code
COPY . .
# Copy .env file
COPY .env .env

# Expose ports
EXPOSE 3000

# Set environment variables from build arguments
ARG NEXTAUTH_SECRET
ARG NEXT_PUBLIC_API_URL
ARG GITHUB_ID
ARG GITHUB_SECRET
ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET

# Set environment variables in the container
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV GITHUB_ID=$GITHUB_ID
ENV GITHUB_SECRET=$GITHUB_SECRET
ENV GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET

# Use concurrently to run both npm commands (optional)
CMD ["npm", "run", "dev"]
