# Image officielle Node (avec npm + npx inclus)
FROM node:22-alpine AS build

# Dossier de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json ./

# Installer les dépendances (PAS npm ci)
RUN npm install

# Copier le reste du projet
COPY . .

# Build React
RUN npm run build

# ----------- Serveur ----------
FROM caddy:2-alpine

# Copier le build React
COPY --from=build /app/build /usr/share/caddy

# Port exposé (Railway)
EXPOSE 3000

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
