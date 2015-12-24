#!/bin/bash

#Actualizamos e instalamos docker
sudo apt-get update
sudo apt-get install -y docker-engine

#Descargar la imagen
sudo docker pull jesmorc/proyecto-iv:latest
#Ejecuta la imagen
sudo docker run -i -t jesmorc/proyecto-iv:latest /bin/bash
