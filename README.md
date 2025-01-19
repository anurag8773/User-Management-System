# User Management System

This project involves building a full-stack web application that allows users to manage their personal data, including their hobbies. The application includes a backend API implemented with Django and a frontend built with React.

## Implementation Details

### Backend Implementation (API)

#### 1. CRUD Operations for Users

The backend API provides CRUD operations for managing user data:

- **GET** `api/users`: Fetch all users (Status: 200)
- **POST** `api/users`: Create a new user (Status: 201, 400)
- **PUT** `api/users/{userId}`: Update a user (Status: 200, 400, 404)
- **DELETE** `api/users/{userId}`: Delete a user (Status: 204, 400, 404)

#### 2. User Object Structure

Each user is represented by an object with the following properties:

- **id**: Unique identifier (string, UUID) generated server-side
- **username**: User's name (string, required)
- **age**: User's age (number, required)
- **hobbies**: List of hobbies (array of strings or an empty array, required)

#### 3. Error Handling

- Non-existing endpoints return a **404** status.
- Proper error handling is implemented, with **500** for internal server errors.

#### 4. Configuration

- Use of `.env` file for configuration settings (e.g., PORT).

---

### Frontend Implementation

#### 6. React Application Features

1. **Main Visualization Area**:
   - Users are visualized as nodes using **react-flow**.
   - Each user node displays the username and age.
   - Connected hobbies are displayed as child nodes of the user.

2. **Sidebar Component**:
   - Displays a list of available hobby categories.
   - Hobbies are draggable and can be dropped onto user nodes to associate hobbies with users.
   - A search/filter option is provided to filter the hobby list.

3. **User Management**:
   - Form to create and edit users.
   - Validation for required fields (username, age, hobbies).
   - Success and error notifications after form submission.
   - Confirmation dialogs for deletion of users.

4. **State Management**:
   - Proper state management is implemented for both users and hobbies.
   - Handles loading states and errors.
   - Ensures data consistency between the backend and frontend.

---

## Setup Instructions

### Backend Setup

1. **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

2. **Create the Django Project and App**:
    ```bash
    django-admin startproject user-api
    cd userhobbies
    django-admin startapp users
    ```

3. **Add the App to `INSTALLED_APPS` in `settings.py`**:
    ```python
    INSTALLED_APPS = [
        ...
        'rest_framework',
        'users',
    ]
    ```

4. **Set Up the API Endpoints**:
    - Implement the user management API with the required CRUD operations.

5. **Configure Environment Variables**:
    - Create a `.env` file and configure necessary settings.

6. **Run the Backend**:
    ```bash
    python manage.py runserver
    ```

### Frontend Setup

1. **Create a React App**:
    ```bash
    npx create-react-app user-interface
    cd user-interface
    ```

2. **Install Dependencies**:
    ```bash
    npm install -r requirements.txt
    ```

3. **Implement the Features**:
    - **Main Visualization Area**: Set up `react-flow` to visualize users and their hobbies.
    - **Sidebar Component**: Implement a sidebar to display and drag hobbies.
    - **User Management Form**: Create a form to add/edit users and validate required fields.
    - **State Management**: Use `useState` or a state management library to manage users and hobbies.

4. **Run the Frontend**:
    ```bash
    npm start
    ```

---

### Steps to Clone and Run

1. Clone the repository:
   ```bash
   git clone https://github.com/anurag8773/User-Management-System.git
   cd User-Management-System
   ```

## Postman Documentation
  Collection Link: https://documenter.getpostman.com/view/37271849/2sAYQanBvH

  A Postman collection has been prepared for manual testing of the APIs. Import the collection into Postman to start testing.

### API Endpoints

#### 1. **GET** `/api/users/`

- **Description**: Fetch all users.
- **Response**: A list of users in JSON format.
- **Status**: 200

#### Example Request:

```bash
curl -X GET http://localhost:8000/api/users/
```

## Project Structure

```
  user-management-system/
  ├── backend/
  │   ├── userhobbies/
  │   │   ├── settings.py          # Django settings
  │   │   ├── urls.py              # API routes
  │   │   └── wsgi.py              # WSGI entry point
  │   ├── api/
  │   │   ├── views.py             # API views
  │   │   ├── models.py            # User model
  │   │   ├── serializers.py       # User serializers
  │   │   ├── urls.py              # API endpoints
  │   │   └── tasks.py             # Celery tasks (if any)
  │   └── manage.py                # Django management commands
  ├── frontend/
  │   ├── public/
  │   │   └── index.html           # HTML entry point
  │   ├── src/
  │   │   ├── components/          # Reusable UI components
  │   │   │   ├── UserNode.js      # User node visualization
  │   │   │   ├── Sidebar.js       # Hobby sidebar
  │   │   │   ├── UserForm.js      # Form to create/edit users
  │   │   │   ├── Notification.js  # Notification component
  │   │   │   └── ConfirmationDialog.js # Dialogs for confirmation
  │   │   ├── services/            # API calls and external services
  │   │   │   └── api.js           # Functions for interacting with backend
  │   │   ├── App.js               # Main app component
  │   │   ├── index.js             # React entry point
  │   └── package.json             # NPM package and dependencies
  ├── .env                         # Environment variables
  ├── .gitignore                   # Git ignore file
  └── README.md                    # Project documentation

```

## Screenshots

1. **Home**

    ![Home](screenshots/home.png)
    - This screenshot shows the Home Page.

2. **User Register**

    ![User Register](screenshots/User_Register.png)
    - This screenshot shows the User Registraton.

    
