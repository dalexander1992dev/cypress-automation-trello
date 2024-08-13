# Base image
FROM cypress/included:cypress-13.9.0-node-20.12.2-chrome-124.0.6367.155-1-ff-125.0.3-edge-124.0.2478.80-1

# Set working directory
WORKDIR /e2e

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Run Cypress tests with the specified environment variable
CMD ["npx", "cypress", "run", "--env", "envSelected=dev"]