# Base image
FROM cypress/included:cypress-13.13.3-node-20.16.0-chrome-127.0.6533.119-1-ff-129.0.1-edge-127.0.2651.98-1

# Install Firefox
RUN apt-get update && apt-get install -y firefox-esr

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

# Verifying cypress
RUN npx cypress verify