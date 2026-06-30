# Calculadora IMC — Indice de Masa Corporal 

> Proyecto básico desarrollado con React y Vite, desplegado mediante vercel. Diseñado para ayudar a obtener el IMC que tiene cada adulto e infante; junto con información tecnica general. 

**[Calculadora en vivo](https://imcalculadora.vercel.app/)**

---

## ¿Como usar la página? 

Calculadora IMC es un proyecto, creado con el fin de facilitar el calculo y la interpretación del índice de masa corporal de las personas (adultos y niños). 

### Pasos para hallar tu IMC
 
 1. Hacer clic en el botón correspondiente ubicados en la página principal "Soy adulto", "Soy menor de edad"
  1.1 Si los botones no funcionan, en la barra de navegación hacer clic en el enlace correspondiente "IMC Adultos", "IMC Niños"

 2. Completar el formulario mostrado
  2.1 Seleccionar género
  2.2 Digitar el peso 
  2.3 Digitar la estatura en cm 
  2.4 Para menores de edad, también es necesario digitar la edad 

 3. Dar clic en el botón "Calcular IMC"

### Dudas frecuentes

 Para resolver dudas frecuentes como: 
 * ¿Cómo medir correctamente?
 * ¿Qué unidades debo usar?
 * ¿Por qué necesito ingresar el género?
 * ¿El resultado es un diagnostico médico?
 * ¿Qué hago si mi IMC está fuera del rango normal?
 * ¿Por qué el IMC de niños usa percentiles?

 Acceder a la sección de ayuda
 **[Sección ayuda](https://imcalculadora.vercel.app/#ayuda)**

## Secciones

- **Home** — Presentación y acceso rápido a la calculadora 
- **¿Qué es IMC?** — Explicación de que es el índice de masa corporal, los diferentes sistemas para calcular el IMC y, explicación en la diferenciación entre el calculo de infantes y adultos. 
- **Ayuda** — Uso de la calculadora y, preguntas frecuentes
- **IMC Adultos** — Acceso a la calculadora de IMC para adultos (personas mayores de 18 años)
- **IMC Niños** — Acceso a la calculadora de IMC para menores (personas entre 2 y 17 años)

---

## Tecnologías utilizadas

|    Tecnología    |                      Uso                    |
|------------------|---------------------------------------------|
| React            |          Librería principal de UI           |
| Vite             |          Bundler y servidor de desarrollo   |
| React Router DOM |       Navegación entre páginas de proyectos |
| CSS              |        Estilos personalizados con variables |
| Vercel           |          Despliegue en producción           |
| React-icons      |        Importación de iconos decorativos    |
| JavaScript       |       Manipulación y manejo de datos        |


---

## Instalación y uso local

```bash
# 1. Clona el repositorio
git clone https://github.com/KarlaaMS/Calculadora-imc

# 2. Entra a la carpeta
cd calculadora-imc

# 3. Instala las dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Ayuda.jsx
│   ├── CuerpoHumano.jsx
│   ├── Footer.jsx
│   ├── FormularioAdultos.jsx
│   ├── FormularioMenores.jsx
│   ├── Home.jsx
│   ├── Navbar.jsx
|   ├── QueEsImc.jsx
|   ├── Resultado.jsx
│   └── data/
│       ├── percentiles.js
├── App.jsx
├── main.jsx
└── index.css
```

---


## Despliegue

El proyecto está desplegado en **Vercel** con despliegue automático desde la rama `main` de GitHub.

---

## Contacto

**Karla Manuela Salgado Sánchez**  
Tecnóloga en Informática — Desarrolladora Frontend Junior  
📍 Colombia

[![GitHub](https://img.shields.io/badge/GitHub-Calculadora_IMC-181717?style=flat&logo=github)](https://github.com/KarlaaMS/calculadora-imc)
[![Vercel](https://img.shields.io/badge/Vercel-En_vivo-000000?style=flat&logo=vercel)](https://imcalculadora.vercel.app/)
