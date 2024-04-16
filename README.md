## Project Description

The Meet app is a progressive web application with a serverless backend, offering offline access to upcoming events in specific cities. Its responsive design ensures seamless display across devices, delivering a superior user experience. Powered by Test-Driven Development, it prioritizes code quality and test coverage for optimal performance.

**User Stories**
   * As a user, I should be able to filter events by city So that I can easily find events in my desired location.
   * As a user, I should be able to show/hide event details So that I can focus on the information I need at the moment.
   * As a user, I should be able to specify the number of events to display So that I can control the amount of information shown on my screen.
   * As a user, I should be able to use the app when offline So that I can access event information even without an internet connection.
   * As a user, I should be able to add an app shortcut to the home screen So that I can quickly launch the app without navigating through menus.
   * As a user, I should be able to display charts visualizing event details So that I can gain insights and understand event data more effectively.

**Scenarios**
* SCENARIO 1
   
   **Given** a user is on the events page
  
   **When** they select a city from the filter options
  
   **Then** they should see only events happening in that city

* SCENARIO 2

  **Given** a user is viewing event details

  **When** they choose to show or hide event details

  **Then** the event details should be displayed or hidden accordingly  

* SCENARIO 3

   **Given** a user is on the events page

  **When** they specify the number of events to display

  **Then** the page should show the specified number of events

* SCENARIO 4
 
  **Given** a user has previously accessed event data

  **And** they are currently offline

  **When** they open the app

  **Then** they should still be able to view the previously accessed event information

* SCENARIO 5

  **Given** a user is on their device's home screen

  **When** they choose to add a shortcut for the app

  **Then** the app shortcut should be added to the home screen for easy access

* SCENARIO 6

  **Given** a user is viewing event details

  **When** they request to see charts visualizing event details

  **Then** the app should display charts providing insights into the event data

  **USE OF SERVERLESS FUNCTION IN THE MEET APP**
  * Using serverless functions in the meet app will allow the app to dynamically scale the
resources based on user demands. It will allow having backend code without a server and
simplify the code needed.
  
