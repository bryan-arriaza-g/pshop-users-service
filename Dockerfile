# === CONFIGURING ===
FROM node:16-alpine as builder
# === HEALTHCHECK ===
RUN apk add --no-cache wget gettext moreutils
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD wget -q --method=HEAD localhost/health
# === WORKING DIR ===
# Set the working directory to /app inside the container
WORKDIR /app
COPY . /app
# === BUILDING ===
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm set-script prepare ""
RUN npm ci --legacy-peer-deps
# === LOGS ===
# RUN mkdir /app/logs && chmod 777 /app/logs/
USER root
# Expose port
EXPOSE 8080
# Start server
CMD ["npm", "run", "start"]
