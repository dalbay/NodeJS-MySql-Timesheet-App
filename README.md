# NodeJS-MySql-Timesheet-App
Simple Register/Time-sheet app using Node.js and MySQL


### Application Overview - Development Process - Coding Modules
 
#### Information Architecture & User-Experience
This application starts by presenting a welcome page. Users will have to login or sign up to proceed to the next stages. Once access is granted,  features displayed in the navigation pane will be available. 
Here are the main four functionalities for the application:
- Personal Info - Personal information will be displayed; updating each field will be available.
- Create a New Time Sheet - User creates a time-sheet.
- Current Period Time Sheet - Current Time Sheet will be displayed; functionality to update each field will also be available.
- Previous Period Time Sheet - Previously Saved Time-sheet will be displayed; a dropdown list to recall older time-sheets will be available.

##### Architecture General Overview:
![General Overview](/Images/screenArch1.png)

#### Workflow 
Navigating through the models is accomplished by clicking on the "a" tag residing inside the navigation. Each screen has an Exit Button on the bottom right corner which takes a user back to the welcome page. The Logout button will also lead you back to the welcome screen; additionally, it will clear the Session for the particular user.
Here is the Workflow Overview for each page:
- Personal Info - Disabled Text-Boxes will display personal data. The Update button will enable Text-Fields for data to be modified. The Save button will save all changes to the database.
- Create New Time-sheet - Text-Boxes are collecting the data. The Save button saves the input to the database. The Date, Time-In, and Time-out text box imply date/time picker controls. Break Period is a dropdown menu with 15-minute increments; Pay Period is a dropdown with months value, and Course is dropdown with available courses to sign up.
- Current Period Time-sheet - This page displays the current valid time-sheet for this month. If any changes are required, users click the Update button which will turn into a Save button. Each cell within the table will become a text-box. Once changes made users click the Save button to exit the update mode. The print button will let the user print out the Current Time-sheet.
- Previous Period Time Sheet - This page displays former time-sheets. The user can choose a pay-period from a dropdown menu. Once the pay-period is selected, the data is displayed. The print button will let the user print out the Selected Time-sheet.


### Welcome Page:
![Welcome Page](/Images/screen1.png)

