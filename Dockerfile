# Base image
FROM cypress/included:13.13.3

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