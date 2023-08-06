# Proyecto Decorator en Node.js

Este proyecto implementa el patrón de diseño Decorator en Node.js para agregar funcionalidades adicionales a objetos dinámicamente.

## Estructura de Carpetas

La estructura de carpetas del proyecto es la siguiente:
```
project/
|-- src/
| |-- components/
| | |-- component.js // Base component interface or abstract class
| | |-- concreteComponent.js // Concrete class representing the original object
| |-- decorators/
| | |-- decorator.js // Abstract decorator class
| | |-- decoratorA.js // Concrete decorator class A
| | |-- decoratorB.js // Concrete decorator class B
| |-- utils/
| | |-- logger.js // Logger utility
| |-- main.js // Entry point of the application
|-- test/
| |-- components/
| | |-- component.test.js // Unit tests for the components
| |-- decorators/
| | |-- decorator.test.js // Unit tests for the decorators
|-- .circleci/ // CircleCI configuration folder
|-- .editorconfig // EditorConfig file for consistent coding styles across editors
|-- .eslintrc.json // ESLint configuration for code linting
|-- .gitignore // List of files and folders to ignore in version control
|-- .github/
| |-- workflows/
| | |-- ci.yml // GitHub Actions workflow for continuous integration
|-- .prettierrc // Prettier configuration for code formatting
|-- LICENSE // License information for the project
|-- package.json // Node.js package configuration file
|-- package-lock.json // Auto-generated file for package dependencies
|-- README.md // Project documentation

```

## Instalación

Para instalar el proyecto y sus dependencias, sigue estos pasos:

1. Clona el repositorio: `git clone https://github.com/tu-usuario/proyecto-decorator.git`
2. Navega al directorio del proyecto: `cd proyecto-decorator`
3. Instala las dependencias: `npm install`

## Uso

Para ejecutar la aplicación y ver cómo funciona el patrón Decorator, puedes usar el siguiente comando:
```
npm start
```

Esto ejecutará el archivo `main.js`, que demuestra cómo se pueden utilizar los objetos originales y los decoradores en conjunto para agregar funcionalidades dinámicamente.

## Pruebas

El proyecto incluye pruebas unitarias para las clases `ConcreteComponent`, `DecoratorA` y `DecoratorB`. Para ejecutar las pruebas, utiliza el siguiente comando:
```
npm test
```

## Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu contribución: `git checkout -b mi-contribucion`
3. Realiza tus cambios y commits.
4. Envía tus cambios al repositorio remoto: `git push origin mi-contribucion`
5. Crea un pull request para que tus cambios sean revisados y fusionados.

## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
