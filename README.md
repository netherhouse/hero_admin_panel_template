# Hero Admin Panel Template

This project is a template for an admin panel to manage heroes using React, Redux, and Redux Toolkit. It features a user-friendly interface to view, filter, add, and delete heroes with asynchronous data fetching via a JSON server.

## Features

- **Display Heroes**: Render a list of heroes with details such as name, description, and elemental attribute.
- **Filtering**: Filter heroes based on their elements.
- **Add & Delete Heroes**: Add new heroes and remove existing ones.
- **State Management**: Efficient state handling with Redux Toolkit.
- **Async Operations**: Seamless data retrieval and persistence using a JSON server.

## Installation

### Prerequisites

- Node.js (v14 or above)
- npm (v6 or above)

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the project directory:**
   ```bash
   cd hero_admin_panel_template
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Project

The project uses `concurrently` to run both the React development server and the JSON server simultaneously.

To start the development environment, run:

```bash
npm start
```

- The React app will be available at [http://localhost:3000](http://localhost:3000)
- The JSON server will be running at [http://localhost:3001](http://localhost:3001)

## Building for Production

To build the project for production, run:

```bash
npm run build
```

## Testing

To run tests, execute:

```bash
npm test
```

## Project Structure

- **src**: Contains the application source code.
  - **components**: UI components (HeroesList, HeroesAddForm, HeroesFilters, etc.).
  - **store**: Redux store and slices for state management.
  - **hooks**: Custom hooks (e.g., useHttp for HTTP requests).
- **public**: Static files and the HTML template.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contribution

Feel free to fork the repository, submit pull requests, or open issues for improvements and bug fixes.

Happy Coding!
