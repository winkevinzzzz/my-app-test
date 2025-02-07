# Step 1: Use an official Node.js runtime as a parent image
FROM node:18 AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Serve the React app using a lightweight HTTP server
FROM nginx:alpine

# Step 8: Copy the build directory from the build stage to the Nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 for the Nginx server
EXPOSE 80

# Step 10: Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
