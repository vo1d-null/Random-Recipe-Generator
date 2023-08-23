# Random Recipe Generator :man_cook:

## Overview :bookmark_tabs:

The Random Recipe Generator is an Angular app that generates and displays random recipes fetched from the Spoonacular API. :spoon:

## Table of Contents :scroll:

- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Challenges and Solutions](#challenges-and-solutions)

## Description :page_with_curl:

The Random Recipe Generator is an Angular web application project that fetches random recipes from the Spoonacular API and presents them to users.
## Features :star2:

- Fetches random recipes from the Spoonacular API.
- Displays recipe details including title, image, and instructions.
- Offers a simple and clean user interface for easy navigation.

## Getting Started :rocket:

To start using the Random Recipe Generator app, follow these steps:

### Installation :computer:

1. Clone the repository to your local machine:
   ```shell
   git clone https://github.com/vo1d-null/Random-Recipe-Generator.git
   ```

2. Navigate to the project directory:
   ```shell
   cd Random-Recipe-Generator
   ```

3. Install the project dependencies:
   ```shell
   npm install
   ```

### Usage :clipboard:

1. Start the development server:
   ```shell
   ng serve
   ```

2. Open your web browser and go to `http://localhost:4200/` to view the app.

## Technologies :wrench:

- Angular
- HttpClient module for API communication
- HTML and CSS for the user interface!

## Contributing :handshake:

Contributions are welcome! If you have suggestions, bug reports, or feature requests, please feel free to open an issue or submit a pull request.

## License :scroll:

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Screenshots :camera_flash:

![thumb2](https://github.com/vo1d-null/Random-Recipe-Generator/assets/123015737/b2d5811c-10b5-4316-bdeb-6aecabfc01b3)

![recipe-gen](https://github.com/vo1d-null/Random-Recipe-Generator/assets/123015737/7dc9ee55-9a1c-481c-9a59-a6562b96ab4f)

## Challenges and Solutions :hammer_and_wrench:

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

## Future Ideas for Enhancements :bulb:

- Improve styling for a more appealing user interface.
- Implement a search feature to find specific recipes.
- Include ingredient quantities in the recipe details.

## Conclusion :tada:

Creating the Random Recipe Generator has been a valuable learning experience, building skills in Angular development and API integration. Further improvements will make this app even more user-friendly and engaging.

Feel free to explore the project [here](https://github.com/vo1d-null/Random-Recipe-Generator) for code and updates. For any queries or suggestions, don't hesitate to reach out. :rocket:
