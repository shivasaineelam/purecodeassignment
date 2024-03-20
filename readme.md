

# Project Development Steps

This README outlines the steps followed during the development of the project.

## 1. Project Setup

### Creating a Basic React Project

The project was initiated using `npx create-react-app` command to create a basic React project.

```bash
npx create-react-app my-project
```

## 2. Dependency Extraction

### Extracting Dependencies

Dependencies were extracted from the `package.json` file provided in the assignment zip.

## 3. Component Extraction

### Extracting Components

The following components were extracted from the provided files:

- `BreadcrumbAdmin`
- `LanguageDropdown`
- `MaximizeScreen`
- `Navbar`
- `NotificationDropdown`
- `PageTitle`
- `ProfileDropdown`
- `SimplebarReactClient`
- `Timeline`
- `Topbar`
- `VerticalMenu`

## 4. Asset Management

### Managing Assets

Assets were organized into folders within the `assets` directory:

- `avatars`: Contains avatar images (`avatar1`, `avatar2`, `avatar3`, `avatar4`).
- `flags`: Contains flag images (`germany`, `italy`, `russia`, `spain`).
- `navbar`: Contains logo images (`logo-dark`, `logo-light`) and background image (`offer-bg`).
- `small`: Contains small images (`small1`, `small2`, `small3`).

## 5. Helper Functions

### Utilizing Helper Functions

Helper functions were extracted from the assignment folder:

- `verticalmenuhelper`: Contains helper functions for vertical menus.
- `cn`: Utility function for conditional classnames.

## 6. State Lifting

### Implementing State Lifting

State lifting was utilized for managing the state of the following components:

#### Language Dropdown

The state for the language dropdown was lifted to a parent component to ensure consistent behavior across multiple dropdowns. This allows the language dropdown to close when other dropdowns, such as notifications or profile, are opened.

#### Notification Dropdown

Similarly, the state for the notification dropdown was lifted to a parent component to enable synchronization with other dropdowns. This ensures that when a notification is clicked, other dropdowns, like language or profile, are closed if they are open.

#### Admin Components

State lifting was also employed for managing the admin-related components, such as profile information and admin-specific functionalities. This facilitates centralized state management and enables seamless interaction between different parts of the application.

---
