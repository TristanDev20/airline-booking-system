# Technical Specifications Document

## 1. Title Page
- **Project Name**: Simple Airline Booking System Application
- **Version**: 1.0
- **Date**: May 05, 2025
- **Author(s)**: 
    - Mr. Tristan James A. Flordeliza
    - Mr. Jether Paul Quintana
    - Ms. Clarissa Isis A. Salvador
    - Ms. Francheska Clair A. Salvador

## 2. Table of Contents
1. [Introduction](#3-introduction)
2. [Overall Description](#4-overall-description)
3. [Visual Mockup Reference](#5-visual-mockup-reference)
4. [Features](#6-features)
5. [Functional Requirements](#7-functional-requirements)
6. [Non-Functional Requirements](#8-non-functional-requirements)
7. [Data Requirements](#9-data-requirements)
8. [External Interface Requirements](#10-external-interface-requirements)
9. [Glossary](#11-glossary)
10. [Appendices](#12-appendices)

## 3. Introduction
- **Purpose**: To develop a simple airline booking system application that allows users to search, book and retrieve flight details.  
- **Scope**: The application will include user registration, login/logout, flight details, explore places with prices and FAQs
- **Definitions, Acronyms, and Abbreviations**: 
  - **API**: Application Programming Interface
- **References**: None

## 4. Overall Description
- **Product Perspective**: The application is a standalone web app for airline booking businesses 
- **Product Functions**: 
  - User registration and login
  - User View - Discover Flights
  - Contact Page
  - User View - Book a flight
  - User View - View Flights
  - User View - Flights Status
  - User View - Update Flights
  - User View - Check-in to booked Flight
  - User View - View Flight Bookings
  - Search Flights by destination and/or date
  - User View - Flight Confirmation Screen
  - User View - Payment Screen 
- **User Classes and Characteristics**: 
  - **End Users**: Customers who will book a flight.
  - **Admin Users**: Users who will manage available flights and other setups
- **Operating Environment**: 
  - **Client**: Modern web browsers (Chrome, Firefox, Safari)
  - **Server**: Node.js backend, MongoDB database
- **Assumptions and Dependencies**: 
  - Users have internet access.
  - Payment gateway API (e.g., Stripe) is available and functional.

## 5. Visual Mockup Reference
- **Link or Screenshot**: [Login_mockup.png], [Airline_Booking_mockup.png]

## 6. Features
- **User Registration and Login**: Users can create accounts and log in.
- **Discover Flights**: Users can view flight details 
- **Book a Flights**: Users can book a flight
- **Flight Status**: Users can retrieve their flight with a status
- **Update Flights**: Users allowed to update flights 
- **Check-in to booked Flight**: Users should check in to their booked flight
- **View Flight booking**: Users can retrieve their flight bookings
- **Search Flights**: Users can search flights by destination and/or date
- **Flight Confirmation Screen**: Users should confirm their flight thru a screen 
- **Payment Screen**: Users can able to pay
## 7. Functional Requirements
### Use Cases
- **Use Case 1**: User Registration
  - **Title**: Register a new user
  - **Description**: Users can create an account with an email and password.
  - **Actors**: End User
  - **Preconditions**: User is on the registration page.
  - **Postconditions**: User account is created and user is logged in.
  - **Main Flow**: User enters email and password > User clicks "Register" > System creates account and logs in user.
  - **Alternate Flows**: User enters invalid email > System shows error.

### System Features
- **Feature 1**: User Registration and Login
  - **Description**: Allow users to register and log in.
  - **Priority**: High
  - **Inputs**: Email, password
  - **Processing**: Validate input, create user account
  - **Outputs**: User is logged in
  - **Error Handling**: Show error messages for invalid input

## 8. Non-Functional Requirements
- **Performance**: 
  - The application should load pages within 2 seconds.
- **Security**: 
  - Passwords should be hashed and stored securely.
  - All transactions should be encrypted using HTTPS.
- **Usability**: 
  - The application should be easy to navigate with a clean user interface.
- **Reliability**: 
  - The application should have 99.9% uptime.
- **Supportability**: 
  - The code should be well-documented and maintainable.

## 9. Data Requirements
- **Data Models**: 
  - **User**: { userId, firstName, lastName, isAdmin, phoneNumber, dateOfBirth, gender, username, email, password, isActive, dateCreated }
  - **Flight Details**: {flightid, flightNo, airlineName, originAirportID, destinationAirportId, departureTime, arrivalTime, aircraftId, status}
  - **Airport**: {airportId, code, name, city, country}
  - **Aircraft**: {aircraftId, model, seatCapacity, airlineName}
  - **Flight Booking**: {bookingId, userId, flightId, bookingDate, seatNumber, class, status, tripType, fareType, totalPrice}
  - **Check-in**: {checkinId, bookingId, checkinTime, boardingPassNumber, baggageCount}
  - **Payment**: {paymentId, bookingId, paymentMethod, amount, currency, paymentDate, paymentStatus}

  
- **Database Requirements**: 
  - Use MongoDB for storing user, flight details, flight booking, check-in, payment, airport, aircraft data.
- **Data Storage and Retrieval**: 
  - Users can retrieve their account and flights information.

## 10. External Interface Requirements
- **User Interfaces**: 
  - Registration/Login page
  - Product Catalog page
  - Product Detail page
  - Shopping Cart page
  - Checkout page
- **API Interfaces**: 
  - Payment gateway API (e.g., Stripe API) for processing payments.
- **Hardware Interfaces**: 
  - None required.
- **Software Interfaces**: 
  - Interact with the MongoDB database.
  - Connect with the payment gateway for transactions.

## 11. Glossary
- **SKU**: Stock Keeping Unit
- **API**: Application Programming Interface

## 12. Appendices
- **Supporting Information**: 
  - User flow diagrams
  - Wireframes
- **Revision History**: 
  - **v1.0**: Initial version - June 20, 2024
