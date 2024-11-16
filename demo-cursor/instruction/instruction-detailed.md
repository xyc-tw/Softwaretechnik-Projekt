# Project Requirements Document (PRD)

## Project Title
One-Page Demo Website

## Project Overview
The goal of this project is to create a single-page demo website with a simple user interaction: a text input and a "senden" button. The input is validated based on specific criteria, and feedback is provided to the user. If valid, the input is saved to the database, and a success message is shown. The project will be implemented using Next.js 14, Shadcn/UI, Tailwind CSS, and Lucide icons.

## Functional Requirements

### Components

#### Text Input Box
- Placeholder: "enter..."
- Allows users to input text with a minimum length and special character restrictions.

#### "Senden" Button
- Located to the right of the text input.
- When clicked, triggers input validation.
- Shows feedback messages based on validation results.

#### Validation Rules
The text input must meet the following criteria:
- Minimum length of 8 characters.
- Must contain at least 1 but no more than 3 special characters (e.g., !, @, #, etc.).
- Special characters must not appear consecutively (e.g., abbaa!b!ba is allowed, but abbaa!!ba is not).

#### Feedback Messages
- Case 1: If the input is empty, display "Empty input!" in red.
- Case 2: If the input is invalid, display "Invalid input!" in red.
- Case 3: If the input is valid, save it to the database and display "Successful input, saved back to database" in green.

### Core Functions

#### Input Validation
- Validate the input on button click to ensure it meets all criteria specified in Validation Rules.
- Show the appropriate feedback message based on validation results.

#### Database Save Operation
- If input is valid, simulate saving the input to the database and display a success message.
- The actual database save function can be simulated (e.g., console log) for this demo.

## Non-Functional Requirements
- **Technologies**: Use Next.js 14, Shadcn/UI, Tailwind CSS, and Lucide icons.
- **Accessibility**: Ensure the form and buttons are keyboard-navigable and screen-reader-friendly.
- **Responsiveness**: The page should be responsive and look good on mobile and desktop screens.

## File Structure
The following file structure is suggested to maintain clear separation of concerns, facilitate modular development, and ensure easy navigation and maintenance.

```
demo-cursor
├── README.md
├── app
│   ├── favicon.ico
│   ├── globals.css          # Global CSS, including Tailwind base styles
│   ├── layout.tsx           # Layout component (defines HTML structure)
│   └── page.tsx             # Main page (UI and logic for textbox & button)
├── components
│   └── InputForm.tsx        # Input form with textbox and "senden" button
├── lib
│   └── validateInput.ts     # Input validation logic (keeps page.tsx cleaner)
├── public
│   └── image@3x.png         # Background image
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## File Details

### 1. app/globals.css
Global CSS file. Includes Tailwind base styles and any additional global styles needed.

### 2. app/layout.tsx
Defines the basic layout structure for the application:
- Sets up HTML metadata (language, charset, etc.).
- Wraps the main application content.

### 3. app/page.tsx
The main page of the application where UI logic resides:
- Contains InputForm component, which includes the text input and button.
- Manages feedback messages based on input validation results.
- Calls the simulated database save function when input is valid.

### 4. components/InputForm.tsx
The core component handling user interaction:
- Contains a text input field with a placeholder and a button.
- Accepts two props:
  - setStatusMessage: Function to update feedback message displayed on the main page.
  - onSave: Function to save valid input to the database (simulation).
- Executes validation logic on button click and communicates results back to the main page.

### 5. lib/validateInput.ts
Utility function for input validation:
- Accepts a string and checks if it meets the validation criteria.
- Returns a boolean (true if valid, false if invalid).
- Validation Criteria:
  - Minimum of 8 characters.
  - Contains 1-3 special characters.
  - Special characters are not consecutive.

### 6. README.md
Provides an overview of the project, setup instructions, and a quick start guide.

## UI and UX Requirements

### Design and Styling
#### Input and Button Layout:
- Text input box with a placeholder "enter...".
- "Senden" button aligned to the right of the input.

#### Feedback Messages:
- Displayed below the form input.
- Color-coded: red for errors, green for success.

#### Icons:
- Lucide icons for styling and visual cues, particularly on the button.

## Acceptance Criteria
When a user clicks the "senden" button:
- If the input is empty, display "Empty input!" in red.
- If the input is invalid, display "Invalid input!" in red.
- If the input is valid, simulate saving it to the database and display "Successful input, saved back to database" in green.

### Validation Tests:
- Input of less than 8 characters: should fail validation.
- Input with 0 or more than 3 special characters: should fail validation.
- Input with consecutive special characters (e.g., ab!!cd): should fail validation.
- Valid input with 8+ characters, 1-3 non-consecutive special characters: should pass validation.

### Responsiveness:
- UI should adapt to both desktop and mobile screen sizes.

## Future Extensions
This demo could be expanded in future iterations with the following:
- Actual database integration.
- Backend API endpoint for data storage.
- Additional form validation logic and features.