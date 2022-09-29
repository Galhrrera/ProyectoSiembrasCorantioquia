# Proyecto Siembras Corantioquia
Proyecto realizado en el curso de tópicos avanzados de bases de datos 2022-02 UPB.

## Propósito del proyecto
Elaborar una solución qe soporte operaciones CRUD a través de una interfaz gráfica con el propósito de ser facilmente usada por "cualquier usuario"

## Dominio del problema
El dominio del problema consta de un **Reporte siembras reportadas en el aplicativo Sembraton sobre la juridicción de Corantioquia.**
La base de datos utilizada es de acceso público, y puede revisarla y descargarla a través de [Datos abiertos Colombia](https://www.datos.gov.co/Ambiente-y-Desarrollo-Sostenible/Siembras/4wun-xk5g). Los datos han sido normalizados y transformados para usos prácticos del proyecto del curso.

### Tablas
Para el dominio del problema que se está trabajando hay un total de 5 tablas:
- **Tabla siembras:** La tabla principal del dominio del problema. Esta tabla contiene las siembras registradas, cada una con un código de siembra, un código de vereda, un código de árbol, un código de contratista, una fecha, un total de árboles sembrados y un total de hectáreas sembradas.
- **Tabla árboles:** La tabla en la que se almacenan todos los árboles sembrados. Esta tabla contiene un código de árbol y un tipo de árbol (o el nombre del mismo).
- **Tabla contratistas:** La tabla en la que se almacenan los contratistas que se encargan de las siembras. Esta tabla contiene un código de contratista y el nombre del contratista.
- **Tabla veredas:** La tabla en la que se almacenan las veredas en las que se realizan las siembras. Esta tabla contiene un código de vereda, un nombre de vereda y el código del municipio al que pertenece la vereda.
- **Tabla municipios:** La tabla en la que se almacenan los municipios en los que se encuentran las veredas en las que se realizan las siembras. esta tabla contiene un código de municipio y un nombre de municipio.
