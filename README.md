Signup & Login Page Documentation

1. Project Overview
This project is a signup and login system built with HTML, CSS, and JavaScript. It allows users to:
Create a new account by signing up.
Log in using their credentials.
Receive instant feedback if inputs are invalid or actions are successful.
The system is designed to be user-friendly, visually appealing, and responsive for all devices.

2. Page Structure
Containers: Two main containers hold the signup and login forms. Only one is visible at a time.
Signup Form:
oFields: Email, Password, Confirm Password.
oButton: Submit to create an account.
oMessage area: Displays success or error messages.
Login Form:
oFields: Email, Password.
oButton: Submit to log in.
oMessage area: Shows success or error messages.
Form Groups: Each input is grouped with a label for clarity.

3. Styling (CSS)
Centering & Layout:
oForms are centered on the page both vertically and horizontally using flexbox.
oWhite background, rounded corners, and shadows make forms stand out against the background image.
Inputs & Buttons:
oInputs have padding, borders, and focus effects for easy interaction.
oButtons have a distinct color and hover effect to indicate interactivity.
Transitions & Animations:
oSmooth fade-in/fade-out and vertical movement for switching forms.
oHidden forms are invisible and non-clickable to prevent interaction.
Background:
oFull-page background image enhances the visual appeal of the system.

4. Functionality (JavaScript)
Signup Process:
1.Prevents default form submission to avoid page reload.
2.Validates that all fields are filled.
3.Checks that the email format is valid.
4.Ensures password and confirm password match.
5.Stores the email and password temporarily in a variable.
6.Displays a success message and automatically switches to the login form.
Login Process:
1.Prevents default form submission.
2.Compares entered email and password with stored signup data.
3.Displays a success message if credentials are correct.
4.Displays an error message if credentials do not match.
Feedback Messages:
oSuccess messages appear in green.
oError messages appear in red.
oMessages provide clear guidance to the user about what went wrong or right.

5. Responsive Design
Works on desktop, tablet, and mobile devices.
Input fields, buttons, and containers adjust their size based on screen width.
Smooth transitions and centering ensure the page looks good on any device.

6. Key Features
Easy-to-use interface: Simple form layout with clear instructions.
Form validation: Checks for empty fields, valid email format, and password matching.
Instant feedback: Messages appear immediately after user actions.
Form switching: Automatically shows the login form after successful signup.
Visual appeal: Background image, centered forms, shadows, and rounded corners.
Responsive layout: Works well on all screen sizes.

7. How to Use
1.Open the page in a browser.
2.Fill in the signup form with email and password, then confirm the password.
3.Click Sign Up. If inputs are correct, a success message appears and the login form shows.
4.Enter the same email and password in the login form.
5.Click Login. A success message will appear if credentials match; otherwise, an error message is shown.
