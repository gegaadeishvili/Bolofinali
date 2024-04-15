FROM mongo:latest

# Setting environment variables for authentication
ENV MONGO_INITDB_ROOT_USERNAME=GegaGeorgianHero
ENV MONGO_INITDB_ROOT_PASSWORD=PiF9uTZpxmkI9Rop
EXPOSE 3000
#Expose port of MongoDB
EXPOSE 27017
# added mongoDB link
CMD ["mongod", "--bind_ip_all", "--auth", "--port", "3000", "--dbpath", "/data/db", "--replSet", "rs0"]