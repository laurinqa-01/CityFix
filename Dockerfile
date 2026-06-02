FROM node:20-alpine

# Preparar el espacio de trabajo
WORKDIR /app

# Copiar manifiestos primero para aprovechar la cache de capas de Docker
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Comando por defecto para mantener el contenedor listo para pruebas
CMD ["npm", "test"]