# TicketBookingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## For Backend run JSON Server 

Install JSON Server

`npm install -g json-server` 

Start JSON Server
 
Run this command inside your application directory
`json-server --watch db.json`

for more information : https://github.com/typicode/json-server
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

-------------------------------------------------

When designing an Online Movie Ticket Booking System in Angular, here are some high-level plans and the required functionality:

1. User Authentication:
   - Registration: Allow users to register by providing necessary details like name, email, and password.
   - Login: Provide a login functionality to authenticate users.

2. Movie Listing:
   - Fetch Movies: Retrieve a list of available movies from a database or API.
   - Display Movie Details: Show movie information such as title, synopsis, duration, and poster.
   - Movie Search: Allow users to search for movies based on title, genre, or other criteria.
   - Movie Filtering: Provide options to filter movies by genre, language, or release date.

3. Theater Selection:
   - Fetch Theaters: Retrieve a list of theaters and their details.
   - Theater Selection: Allow users to choose a theater from the available options.

4. Showtime Selection:
   - Fetch Showtimes: Retrieve the showtimes for a selected movie and theater.
   - Showtime Display: Present the available showtimes along with the date, time, and ticket availability.
   - Seat Selection: Enable users to select their preferred seats for the chosen showtime.

5. Booking and Payment:
   - Ticket Reservation: Allow users to reserve tickets by specifying the number of seats.
   - Seat Availability: Ensure that seats are available and not already booked by other users.
   - Price Calculation: Calculate the total ticket price based on the number of seats and applicable charges.
   - Payment Integration: Integrate with a payment gateway to facilitate secure online payments.
   - Ticket Confirmation: Provide a confirmation page with booking details and a unique ticket reference number.

6. User Profile and Booking History:
   - User Dashboard: Allow users to view their profile and access their booking history.
   - Booking Details: Display the user's past and upcoming bookings along with the ticket information.
   - Ticket Cancellation: Enable users to cancel their bookings within a specified time frame.

7. Error Handling and Validation:
   - Form Validation: Validate user inputs during registration, login, and booking processes.
   - Error Handling: Handle errors gracefully and display appropriate error messages to users.

8. Responsive Design:
   - Ensure that the application is responsive and works well on different devices and screen sizes.

These are some of the key features and functionality you would typically include in an Online Movie Ticket Booking System in Angular. Depending on your specific requirements, you may need to expand or customize these functionalities further.
