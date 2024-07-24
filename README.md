## Newsletter Sign-Up Form with Success Message

This project provides a responsive newsletter sign-up form that validates email input and displays a success message upon successful submission. The form features error handling to ensure users enter a valid email address before displaying the success message.

## Features

Responsive design that adjusts to different screen sizes.
Validation for email input.
Success message overlay that covers the entire screen on mobile devices.
Error message display near the email input field.

## Technologies Used
HTML
CSS
JavaScript

## Usage
Enter an email address into the input field.
Click the "Subscribe to monthly newsletter" button.
If the email address is valid, the success message will be displayed.
If the email address is invalid, an error message will appear next to the email input field.
Click the "Dismiss message" button on the success message to return to the form.

## Responsive Design
Desktop View: The .sign-up-desktop image is displayed, and the .sign-up-mobile image is hidden.
Mobile View: The .sign-up-mobile image is displayed, and the .sign-up-desktop image is hidden. The success message overlays the full viewport height.

## CSS Details
Container: The .container element is styled with padding and a maximum width. It is responsive and adjusts its padding and width based on screen size.
Form: The form adjusts its layout and padding based on screen size.

Success Message: The .emailsuccess element is positioned to cover the entire viewport height on mobile devices, with centered content.

## JavaScript Details
Validation Function: A regular expression is used to validate the email format.

## Event Listeners:
Click Event on Subscribe Button: Validates the email address and displays the success message or error message based on validation.

Click Event on Dismiss Button: Hides the success message and resets the form.
