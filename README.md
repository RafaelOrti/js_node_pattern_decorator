# Decorator pattern in Node.js

This project implements the Decorator design pattern in Node.js to add additional functionality to objects dynamically.

The Decorator pattern is a structural design pattern that allows behavior to be added to individual objects dynamically, without modifying their code. It is used to extend the functionality of an object at runtime by wrapping it with additional layers of objects, called decorators.

The main idea behind the Decorator pattern is to create a set of decorator classes that provide additional features or behavior to the original object. These decorators implement the same interface as the original object, allowing them to be used interchangeably. The decorators contain an instance variable that points to the object they are decorating.

Here's how the Decorator pattern works:

1. Define the Component Interface: This is the common interface that all the objects, both the concrete components, and the decorators, should implement. It defines the methods that the decorators and components will use.

2. Create Concrete Component: Concrete Components are the original objects that we want to extend or modify. They implement the Component interface and provide the core functionality.

3. Create the Decorator: The Decorator class also implements the Component interface and contains a reference to the Component it is decorating. Decorators have the same interface as the components they decorate.

4. Create Concrete Decorators: Concrete Decorators are the additional features that can be added to the original components. They extend the functionality of the components by adding new behavior.

5. Using Decorators: The decorators can be stacked on top of each other, allowing you to combine various features dynamically and create flexible configurations.

Benefits of using the Decorator pattern include:

1. Flexibility: Decorators allow you to add or remove responsibilities to objects at runtime, providing greater flexibility compared to using inheritance.

2. Single Responsibility Principle: By separating the responsibilities into individual decorators, you keep the classes small and focused on specific functionalities.

3. Reusability: The decorators can be reused and combined in various ways, enabling the creation of complex configurations without the need to create multiple subclasses.

4. Overall, the Decorator pattern promotes the "Open/Closed Principle," which states that classes should be open for extension but closed for modification. It allows you to add new behaviors or features to objects without altering their existing code, making it a powerful and flexible design pattern.

## Folder Structure

The project folder structure is as follows:
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

## Facility

To install the project and its dependencies, follow these steps:

1. Clone the repository: `git clone https://github.com/your-user/decorator-project.git`
2. Navigate to the project directory: `cd project-decorator`
3. Install the dependencies: `npm install`

## Use

To run the app and see how the Decorator pattern works, you can use the following command:
```
npm start
```

This will run the `main.js` file, which demonstrates how the original objects and decorators can be used together to add functionality dynamically.

## Evidence

The project includes unit tests for the `ConcreteComponent`, `DecoratorA`, and `DecoratorB` classes. To run the tests, use the following command:
```
npm test
```

## Contribution

If you want to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch for your contribution: `git checkout -b my-contribution`
3. Make your changes and commits.
4. Push your changes to the remote repository: `git push origin my-contribution`
5. Create a pull request for your changes to be reviewed and merged.

## License

This project is licensed under the [MIT](LICENSE) License.
