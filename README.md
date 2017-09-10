# README

## **UNCalendario**

UNCalendario una plataforma web que permita visualizar de forma centralizada los eventos que ofrece la Universidad nacional de Colombia a la comunidad, permitiendo a los usuarios de la plataforma poder filtrar los eventos de su interés mediante categoréas, fechas, tags, horario disponible, entre otros. También permite compartir los eventos en redes sociales o invitar a otros miembros de la comunidad universitaria y poder marcar como “voy a asistir al evento”, también se podrá dar la respectiva retroalimentación de los eventos asistidos por el usuario mediante una calificación y/o un comentario, asé mismo todos podrán ver la retroalimentación de dicho evento.


### TEAM

* Daniel Cifuentes Guarnizo - jdcifuentesg@unal.edu.co - ScrumMaster
* David Felipe Rico Hernandez - dfricoh@unal.edu.co - Desarrollador
* Miguel Ángel Tovar Onofre - matovaro@unal.edu.co - Desarrollador
* Bryan Antonio Angarita Rodriguez - baangaritar@unal.edu.co - Desarrollador


Things you may want to cover:

* Ruby version 
	ruby 2.4.1p111 (2017-03-22 revision 58053
	Rails 5.1.3

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

### LO QUE SE HIZO

* DAVID RICO: Se crearon las branch develop y sprint-1.
* DAVID RICO: Configure la aplicación de Rails del proyecto, para que use en el entorno de desarrollo y testing la gema de SQLITE para base de datos
              y en producción la gema de POSTGRESQL.
* DAVID RICO: Se instalo la Gem Devise. Se definieron las opciones de url predeterminadas en los archivos de entorno. Se agrego unas notificaciones
			  de alerta en los layouts de la aplicacion, ademas las views basicas de Device para verificar funcionalidad.
* DAVID RICO: Funcionalidad verificada del user con Device (sign_in, sign_up, sign_out).
* BRYAN ANGARITA: Se crearon vistas, de Landspace, Registro, Sign in y Contacto. Se conectaron las vistas con la funcionalidad de la gem Devise.
