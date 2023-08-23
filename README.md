# Random Recipe Generator
## Overview

The Random Recipe Generator is an Angular app that generates and displays random recipes fetched from the Spoonacular API.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Challanges and Solutions](#challenges-and-solutions)

## Description

The Random Recipe Generator is a beginner-friendly Angular project that showcases how to create a web application that fetches random recipes from the Spoonacular API and displays them to the user. The app is designed to provide a fun and practical way to explore new recipes and learn about Angular development concepts.

## Features

- Fetches random recipes from the Spoonacular API.
- Displays recipe details including title, image, and instructions.
- Simple and clean user interface for easy navigation.

## Getting Started

To get started with the Random Recipe Generator app, follow these steps:

### Installation

1. Clone the repository to your local machine:

``
git clone https://github.com/vo1d-null/Random-Recipe-Generator.git
``

3. Navigate to the project directory:
``
cd Random-Recipe-Generator
``

5. Install the project dependencies:
``
npm install
``


### Usage

1. Start the development server:
``
ng serve
``

3. Open your web browser and go to `http://localhost:4200/` to view the app.

## Technologies

- Angular
- HttpClient module for API communication
- HTML and CSS for the user interface!


## Contributing

Contributions are welcome! If you have suggestions, bug reports, or feature requests, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Screenshots

![recipe-gen](https://github.com/vo1d-null/Random-Recipe-Generator/assets/123015737/7dc9ee55-9a1c-481c-9a59-a6562b96ab4f)

## Challenges and Solutions

### Challenge: API Integration and Data Display

Integrating the Spoonacular API and dynamically displaying fetched recipe data on the user interface required utilizing Angular's `HttpClient` module and directives like `*ngIf`.

**Solution:** 
- Used `HttpClient` to make API requests.
- Stored fetched recipe details in a component property (`recipe`).
- Utilized `*ngIf` to conditionally render recipe details.

### Challenge: Property Binding and Input Decorator

Passing data between parent and child components using property binding and the `@Input` decorator required understanding component interaction.

**Solution:**
- Defined `@Input` property in the child component.
- Bound the parent component's recipe data using `[recipe]`.

## Future Enhancements

- Improve styling for a more appealing user interface.
- Implement a search feature to find specific recipes.
- Include ingredient quantities in the recipe details.

## Conclusion

Creating the Random Recipe Generator has been a valuable learning experience, building skills in Angular development and API integration. Further improvements will make this app even more user-friendly and engaging.

Feel free to explore the project [here](https://github.com/vo1d-null/Random-Recipe-Generator) for code and updates. For any queries or suggestions, don't hesitate to reach out. Happy exploring and coding!
