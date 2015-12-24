# Work-in-out

Jesús García Godoy [![Build Status](https://travis-ci.org/jesmorc/Proyecto-IV-modulo1.svg)](https://travis-ci.org/jesmorc/Proyecto-IV-modulo1) [![Snap-CI](https://snap-ci.com/jesmorc/Proyecto-IV-modulo1/branch/master/build_image)](https://snap-ci.com/jesmorc/Proyecto-IV-modulo1/branch/master) [![Heroku](https://www.herokucdn.com/deploy/button.png)](https://work-in-out-jesmorc.herokuapp.com/)

### Plataforma enfocada a los deportistas, híbrido entre red social y tablón de eventos. Proyecto relacionado con la asignatura DAI.
## Descripción

El proyecto consiste en una plataforma virtual pensada a modo de híbrido entre red social y tablón de eventos. La plataforma se centra en los deportistas y pretende abarcar todo su rango, desde principiantes a avanzados.
Entrando en detalle, la plataforma consistiría en un sitio web donde es necesario el registro, y en el cual se tiene acceso a un tablón de eventos donde los distintos usuarios puede tanto visualizar (y unirse) a los eventos ya creados por otros usuarios como también crear un evento nuevo, al cual los demás puedan unirse.

Cada evento especifica dentro de sí todos sus detalles y al tipo de público al que va dirigido, además de mostrar los participantes que asistirían y los comentarios que se han hecho al respecto sobre el mismo.
Debido a la naturaleza de la plataforma, orientada mayormente al campo abierto, se pretende hacer uso de integración con mapas, posibilitando así funcionalidades como ver rutas, compartirlas, etc...

Además , la plataforma actuará como una especia de red social, siendo capaz cada usuario de tener su red de amigos, así como de permanecer en contacto con estos por mensajería.

## Requisitos básicos

* Tablón de eventos

* Funciones propias de una red social(mensajería, comentarios, etc...)

* Gestión de rutas

* Organización por deportes

## Trabajo futuro

- Chat

- Versión móvil

- Creación de grupos

## Herramientas a usar

* Usaremos **Flask** como framework para la aplicación.

* **Python**, para la parte del servidor, así como funcionalidades de la web.

* **HTML5** y **CSS3** para la interfaz web.

* **MySQL**, para bases de datos de usuarios y eventos.


## Descripción del Módulo 1

Este módulo se centrará en el servidor de bases de datos, el cual necesitaremos para almacenar los datos de la aplicación, como los usuarios, eventos, comentarios, etc..
La tecnología usada para la base de datos en sí será MySQL.

## Participación en el certamen de proyectos de libres organizado por la Oficina de Software Libre de la UGR
El proyecto ha sido inscrito en el certamen de proyectos libres de la UGR.




#Desarrollo basado en pruebas
#Avances en el proyecto
Para un primer avance en el proyecto hemos creado una pantalla de login de usuario y de registro, con su hoja de estilo correspondiente.
Y además, un formulario de registro para registrar nuevos usuarios. También hemos añadido comprobación de campos al rellenar los formularios, como por ejemplo que no estén vacíos, que el formato del email tenga un formato correcto, etc.
![Login Work-in-out](http://i770.photobucket.com/albums/xx346/BkY_1234/captura_clienthtml_zpshnc3jzys.jpg)

Éstos ficheros creados se pueden ver en la carpeta static en éste repositorio.

También, he creado una clase básica sobre la que poder realizar test básicos con el fin de éste hito.
Ésta clase es "User", que contendrá funciones básicas como get_email, get_id, login, etc.

También hemos empezado a gestionar el logeo de usuarios registrados, aunque aún no está operativo.
Éste avance se encuentra en Work-in-out/__init__.py


#Makefile
He creado un makefile para automatizar la instalación de los paquetes necesarios, y ejecución del programa, añadiendo la opción para hacer limpieza y test con la herramienta nose:
```
#Makefile autor: Jesus Garcia Godoy
all: test install run
clean:
	rm *~*
	rm '*.pyc'
test:
	nosetests runserver.py
install:
	sudo apt-get install libmysqlclient-
	sudo apt-get install python-dev
	pip install --upgrade pip
	pip install MySQL-python
	pip install Flask
	pip install nose
run:
	python runserver.py

```

#Integración Continua
Para la automatización del proceso de pruebas y para desarrollar el proyecto bajo el concepto de Integración Contínua, he usado Travis-CI para la integración continua.
La configuración para Travis-CI se indica en el fichero .travis.yml.

![travis1](http://i.imgur.com/mRKIGN8.png)

#Fichero .travis.yml
Hemos especificado en el fichero **.travis-yml** las dependencias a instalar así como indicar que *nose* debe ejecutar los tests que existan.
```
language: python

python:
  - "2.7"

install:
   - sudo apt-get install libmysqlclient-dev
   - sudo apt-get install python-dev
   - pip install --upgrade pip
   - pip install MySQL-python
   - pip install Flask
   - pip install nose

script:       # script para tests
   - nosetests runserver.py

```

#Tests
Para realizar los tests hemos realizado test básicos en la clase "User" nombrada añadido, que serán ejecutados por la herramienta nosetests.
```
import unittest
class User (unittest.TestCase):
    name =  "Prueba_test"
    id = "123_test"
    email = "test@gmail.es"

    def get_name_test(self):
        self.assertEqual(self.name, "Prueba_test")

        return self.name

    def get_id_test(self):
        self.assertEqual(self.id, "123_test")

        return self.id

    def get_email_test(self):
        self.assertEqual(self.email,"test@gmail.es")

        return self.email

    def login_test(self,id="123_test",password="123456"):
        self.assertEqual(id,"123_test")
        self.assertEqual(password,"123456")

        return True

    def get_gender_test(self):
        gender = "male"

        self.assertEqual(gender,"male")

        return gender

```

Al ejecutar nosetests sobre éste archivo, podemos comprobar que pasa los tests correctamente:
![nosetests local](http://i.imgur.com/thhMNLd.png)

Ahora, tras haber preparado los tests y el archivo ".travis.yml" procedemos a hacer un push, y comprobar qué es lo que ocurre en Travis.

Como vemos en la siguiente captura, el push se ha realizado correctamente, se han pasado los tests y han concluido sin problemas:
![travis2](http://i.imgur.com/nyp39lR.png)


# Despliegue en PaaS: Heroku
El PaaS elegido ha sido Heroku ya que para lo que se va a usar en la asignatura, sus funcionalidades gratuitas son suficientes, además de ser compatible con *Python* e integrable con *GitHub*. 

Primero se crea el archivo *Procfile*, que contiene la orden de ejecución de la aplicación web.

```
web: python runserver.py

```

El siguiente paso es indicar las dependencias (y sus versiones) creando el archivo *requirements.txt*. Contiene lo siguiente


```
Flask==0.10.1
Flask-WTF==0.12
MySQL-python==1.2.3
Jinja2==2.8
MarkupSafe==0.23
WTForms==2.0.2

```

Desde el terminal nos logueamos en Heroku con nuestras credenciales de esta manera:

![heroku_login](http://i.imgur.com/DO0jIcz.png)

Nos situamos en el directorio de la aplicación en sí y procedemos a crear la app en Heroku propiamente dicha, indicando el nombre como parámetro:

![heroku_create](http://i.imgur.com/0mK68Ed.png)


##Integración con Heroku

Conectamos la app de Heroku con nuestro repo de GitHub (también activando la opción de pasar primero los tests) y activamos el despliegue automático.
![heroku_integracion_github](http://i.imgur.com/32fkLPd.png)

Tras esto ya podemos commitear y tras hacerlo hay que hacer un *push* a la rama de Heroku mediante:

```
git push heroku master
```
![heroku_push](http://i.imgur.com/F2wK9Hk.png)

Escalamos el *dynos* de Heroku para poder visualizarlo con el navegador mediante:

```
heroku ps:scale web=1

```

Abrimos la app en una pestaña del navegador con:

```
heroku open

```

Link de la app: [work-in-out-jesmorc](https://work-in-out-jesmorc.herokuapp.com)


##Integración con SNAP-CI

VInculamos con GitHub autorizando la aplicación y ya podemos seleccionar nuestro repositorio para añadirlo a Snap-CI.

Configuramos nuestras *pipelines*:

La primera es la que instalará las dependencias:
![snap_ci_dependencies](http://i.imgur.com/sXAULbU.png)

La segunda la que conecta con Heroku:
![snap_ci_deploy](http://i.imgur.com/U8eBMgY.png)

Vemos como ambas funcionan correctamente:
![pipelines_passed](http://i.imgur.com/Gt6TKiy.png)


##Entorno de pruebas : Docker

Se usa Docker como plataforma que automatiza el despliegue de la aplicación dentro de contenedores software, de manera que pueda probarse en un entorno aislado antes de desplegarla a producción.

[LINK IMAGEN DOCKER](https://hub.docker.com/r/jesmorc/proyecto-iv/)

Para la creación de la imagen, Docker usa un fichero dentro del directorio de la aplicación llamado Dockerfile, que contiene lo siguiente:

```
FROM ubuntu:latest

#Autor
MAINTAINER Jesus Garcia Godoy <jesusgg90@hotmail.com>

#Actualizar Sistema Base
RUN sudo apt-get update
#Descargar aplicacion
RUN sudo apt-get install -y git
RUN sudo git clone https://github.com/jesmorc/Proyecto-IV-modulo1

#Instalar paquetes necesarios
RUN sudo apt-get install -y python-setuptools
RUN sudo apt-get -y install python-dev
RUN sudo apt-get -y install build-essential
RUN sudo apt-get -y install python-psycopg2
RUN sudo apt-get -y install libpq-dev
RUN sudo apt-get install -y libmysqlclient-dev
RUN sudo apt-get install -y python-dev
RUN sudo easy_install pip
RUN sudo pip install --upgrade pip
RUN sudo pip install MySQL-python
RUN sudo pip install Flask
RUN sudo pip install nose

#Instalar la app
RUN cd Proyecto-IV-modulo1 && sudo pip install -r requirements.txt
```

En el directorio del repo, creamos una imagen con:
```
sudo docker build -t jesmorc_iv .
``` 
Esto cogerá por defecto el fichero *Dockerfile* si existe, tal y como vemos aquí:

![docker_jesmorc_iv](http://i.imgur.com/oczpPyj.png)

Ahora, cargamos la imagen con:
```
sudo docker run -t -i jesmorc_iv /bin/bash
```

Estando dentro, comprobamos la IP, porque luego la usaremos:

![docker_jesmorc_iv_ifconfig](http://i.imgur.com/X9EL12o.png)

Ejecutamos la aplicación(desde dentro):

![workinout_runserver](http://i.imgur.com/0GPpGwn.png)

En el navegador, en la dirección *http://172.17.0.19:5000/* (IP vista antes)podemos ver que la app funciona bien:

![workinout_working](http://i.imgur.com/iBOyF0T.png)

Hecho esto, procedemos a crear nuestra imagen en la página web de docker. Tras registrarme en su página me he creado un repositorio con *visibilidad pública*.

![docker_register](http://i.imgur.com/diwrPTM.png)

![docker_created_repo](http://i.imgur.com/KEHDXIW.png)

Ahora, introduzco el siguiente comando:
```
sudo docker build -f Dockerfile -t jesmorc/proyecto-iv:latest --no-cache=true ./
```

Me logueo con las credenciales de Docker:

```
sudo docker login
```

Y finalmente hago el push al repositorio de Docker:

```
sudo docker push jesmorc/proyecto-iv:latest
```

[**ENLACE A DOCKER DEL PROYECTO**](https://hub.docker.com/r/jesmorc/proyecto-iv/)

Para una mayor eficiencia he procedido a crear el siguiente script, el cual se encuentra en la carpeta *scripts* y se llama [*docker.sh*](https://github.com/jesmorc/Proyecto-IV-modulo1/blob/master/scripts/docker.sh). Contiene lo siguiente:

```
#!/bin/bash

#Actualizamos e instalamos docker
sudo apt-get update
sudo apt-get install -y docker-engine

#Descargar la imagen
sudo docker pull jesmorc/proyecto-iv:latest
#Ejecuta la imagen
sudo docker run -i -t jesmorc/proyecto-iv:latest /bin/bash
```

## Progreso del proyecto

Por ahora está hecho el login de la app , junto con un formulario de registro con sus correspondientes comprobaciones.

Para verlo se puede visualizar en la propia *dynos* de Heroku: [work-in-out-jesmorc](https://work-in-out-jesmorc.herokuapp.com)
