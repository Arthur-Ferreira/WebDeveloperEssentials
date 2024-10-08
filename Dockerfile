# Dockerfile
FROM node:20
WORKDIR /

# Install dotenvx
RUN curl -fsS https://dotenvx.sh/ | sh

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000

# CMD ["dotenvx", "run",  "--env-file=.env", "--", "node", "app.js"]

# Prepend dotenvx run
CMD ["dotenvx", "run",  "--env-file=.env.production", "--", "node", "app.js"]