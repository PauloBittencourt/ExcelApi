# Use Node 16 alpine as parent image
FROM node:16-alpine

# Change the working directory on the Docker image to /app
WORKDIR /app

# Copy package.json and package-lock.json to the /app directory
COPY --chown=node:node . package*.json  tsconfig.json ./

RUN chown -R node:node /app 

# Copy the rest of project files into this image
#COPY .  ./

# Install dependencies
RUN npm install

#Run build
RUN npm build

RUN chmod 777 ./node_modules

# Expose application port
EXPOSE 3333

# Start the application
CMD [ "npm" , "start" ]

