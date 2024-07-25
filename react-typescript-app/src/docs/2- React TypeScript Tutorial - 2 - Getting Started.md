### React TypeScript Tutorial - 2 - Getting Started

#### Setting Up the Workspace

1. **Create Workspace**:
   - Create a folder named `react-typescript`.
   - Open Visual Studio Code (VS Code) in this folder.

2. **Create a React App with TypeScript**:
   - Open the terminal and run:
     ```sh
     npx create-react-app react-typescript-demo --template typescript
     ```
   - This command creates a React app named `react-typescript-demo` configured with TypeScript.

3. **Navigate and Start the Application**:
   - Navigate into the project folder:
     ```sh
     cd react-typescript-demo
     ```
   - Start the application:
     ```sh
     yarn start
     ```
     or
     ```sh
     npm start
     ```
   - This command will open your application in the browser at `localhost:3000`.

#### Understanding the Project Structure

- In the `src` folder, you'll find `index.tsx` and `app.tsx` files:
  - `index.tsx`: The entry point of the React app where the App component is mounted onto the root DOM node.
  - `app.tsx`: Contains the App component, which is the root component of the application.

#### Key Points

- **File Extensions**:
  - Components in a React TypeScript project should have the `.tsx` file extension, not `.js` or `.jsx`.
  - Ensure you use `.tsx` for components to avoid issues and confusion.

- **Type Inference**:
  - Even if the TypeScript code looks similar to JavaScript, VS Code will provide type inference.
  - Hovering over components and functions will show the inferred types, helping catch potential errors early.

#### Making Initial Adjustments

1. **Clean Up `App.tsx`**:
   - Remove the header content and unnecessary imports.
   
2. **Create Components Folder**:
   - In the `src` folder, create a new folder named `components`.
   - This folder will hold your React components as you build them.

#### Preparing for Future Lessons

- Future lessons will focus on TypeScript aspects, assuming basic React knowledge.
- Components will be pre-created in some lessons to help focus on TypeScript features.

### Next Steps

- With the React app configured for TypeScript, the next steps will involve working with component props and integrating TypeScript features into your React components.