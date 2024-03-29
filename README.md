# NodeJS-MySql-Timesheet-App
Simple Register/Time-sheet app using Node.js and MySQL


### Application Overview
 
#### Information Architecture & User-Experience
This application starts by presenting a welcome page. Users will have to login or sign up to proceed to the next stages. Once access is granted,  features displayed in the navigation pane will be available. 
Here are the main four functionalities for the application:
- Personal Info - Personal information will be displayed; updating each field will be available.
- Create a New Time Sheet - User creates a time-sheet.
- Current Period Time Sheet - Current Time Sheet will be displayed; functionality to update each field will also be available.
- Previous Period Time Sheet - Previously Saved Time-sheet will be displayed; a dropdown list to recall older time-sheets will be available.

##### Architecture - General Overview:
![General Overview](/Images/screenArch1.png)

#### Workflow 
Navigating through the models is accomplished by clicking on the ```<a>``` tag residing inside the navigation. Each screen has an Exit Button on the bottom right corner which takes a user back to the welcome page. The Logout button will also lead you back to the welcome screen; additionally, it will clear the Session for the particular user.
Here is the Workflow Overview for each page:
- Personal Info - Disabled Text-Boxes will display personal data. The Update button will enable Text-Fields for data to be modified. The Save button will save all changes to the database. The Sign Up page will automatically direct the user to this page.
- Create New Time-sheet - Text-Boxes are collecting the data. The Save button saves the input to the database. The Date, Time-In, and Time-out text box imply date/time picker controls. Break Period is a dropdown menu with 15-minute increments; Pay Period is a dropdown with months value, and Course is dropdown with available courses to sign up.
- Current Period Time-sheet - This page displays the current valid time-sheet for this month. If any changes are required, users click the Update button which will turn into a Save button. Each cell within the table will become a text-box. Once changes made users click the Save button to exit the update mode. The print button will let the user print out the Current Time-sheet.
- Previous Period Time Sheet - This page displays former time-sheets. The user can choose a pay-period from a dropdown menu. Once the pay-period is selected, the data is displayed. The print button will let the user print out the Selected Time-sheet.


##### Welcome Page:
![Welcome Page](/Images/screen1.png)

##### Login Page:
![Login Page](/Images/screen2.png)
##### Signup Page:
![Signup Page](/Images/screen3.png)
##### Personal Info Page:
![Personal Info Page](/Images/screen4.png)
##### Create Time-Sheet Page:
![Create time sheet Page](/Images/screen5.png)
##### Current Period Time Sheet Page:
![Current time sheet Page](/Images/screen6.png)
##### Previous Period Time-Sheets Page:
![Previous time sheet Page](/Images/screen7.png)

### Front-end Design Idea - CSS and JavaScript Modal Box
*A modal is a dialog box/popup window that is displayed on top of the current page.*
###### Create A Modal:
- The w3-modal class defines a container for a modal.
- The w3-modal-content class defines the modal content.
Modal content can be any HTML element (divs, headings, paragraphs, images, etc.).
- [link to w3schools!](https://www.w3schools.com/w3css/w3css_modal.asp)

##### Example:
![Modal Example](/Images/modalImg.png)
##### index.html file
```HTML
        <!-- The SignUp Modal -->
        <div id="signupModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <span id="signupClose" class="close">&times;</span>
                <form>
                    <div class="modal-image"><img src="./Images/atcLogo.png"></div>
                    <div id="fieldsetBckg">
                        <fieldset class="row">
                            <!--Groups elements in a form-->
                            <ul>
                                <div class="col-sm-1"></div>
                                <div class="col-sm-10" style="text-align: left">
                                    <li class="text">Firstname</li>
                                    <li><input type="text" name="firstname" placeholder="Firstname"></li>
                                    <li class="text">Lastname</li>
                                    <li><input type="text" name="lastname" placeholder="Lastname"></li>
                                    <li class="text">Email</li>
                                    <li><input type="email" name="email" placeholder="Email"></li>
                                    <li class="text">Password(6 or more characters)</li>
                                    <li><input type="password" name="password" placeholder="Password"></li>
                                    <li class="text" style="color: rgb(185, 179, 179,0.0);">Button</li>
                                    <li><input class="inputBtn" type="button" value="Join Now"></li>
                                </div>
                                <div class="col-sm-1"></div>
                            </ul>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
```
##### style.css file
``` css
/* The Modal */

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 60%;
}
.modal-content span.close {
  padding: 10px;
}
.modal-content form {
  text-align: center;
  margin: 50px;
}
.modal-content form #fieldsetBckg {
  display: inline-block;
  background-color: #efefef;
  line-height: 11px;
}
.modal-image img {
  width: 110px;
  height: 110px;
}
.modal-content span#spacer {
  color: #fefefe;
  margin: 20px 0px;
}
.modal-content fieldset {
  border: none;
  padding: 30px 0px;
}
.modal-content ul {
  list-style: none;
  padding-left: 3px;
}
.modal-content ul li input {
  padding-left: 10px;
  font-size: 8px;
  border-radius: 3px;
  border: 1px solid rgb(188, 188, 188);
  width: 150px;
  height: 20px;
}
.modal-content ul li.text {
  font-weight: bold;
  font-size: 9px;
  margin-top: 10px;
}
.inputBtn {
  background-color: #005935;
  color: #f1f1f1;
  font-size: 12px;
  font-weight: bold;
}
```
##### app.js file
``` JavaScript
/*Login button - Displays Login Modal*/
var btnLogin = document.getElementById("btnLogin").addEventListener('click',function(){modalLogin.style.display='block'});
var modalLogin = document.getElementById("loginModal");

/*SignUp button - Displays Signup Modal */
var modalSignup = document.getElementById("signupModal");
var btnSignup = document.getElementById("btnSignup").addEventListener('click',function(){modalSignup.style.display='block'});

/*Hide the Modal*/
document.getElementById('loginClose').addEventListener('click',()=>{modalLogin.style.display='none'});
document.getElementById('signupClose').addEventListener('click',()=>{modalSignup.style.display='none'});
```


### Front-end Design Idea - Bootstrap Grid System
*Bootstrap's grid system is responsive, and the columns will re-arrange depending on the screen size*
###### Create A Grid System & Rules:
- Rows must be placed within a .container (fixed-width) or .container-fluid (full-width) for proper alignment and padding
- Use rows to create horizontal groups of columns
- Content should be placed within columns
- Predefined classes like .row and .col-sm-4 are available for quickly making grid layouts
- Columns create gutters (gaps between column content) via padding. That padding is offset in rows for the first and last column via negative margin on .rows
- Grid columns are created by specifying the number of 12 available columns you wish to span
- Column widths are in percentage, so they are always fluid and sized relative to their parent element
- [link to w3schools!](https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp)

##### Example:
![Bootstrap Grid System Example](/Images/bootstrapImg.png)
##### index.html file

``` HTML
            <!-- Content here -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="main-content">

                        <!-- First Row -->
                        <div class="row">
                            <!-- Left Section -->
                            <div class="col-sm-6">
                                <div class="row main-content-row">
                                    <span>First Name</span><br/>
                                <input class="main-content-input" type="text" placeholder="Firstname" name="firstname">    
                                </div>
                            </div>
                            <!-- Right Section -->
                            <div class="col-sm-6">
                                <!-- First Row -->
                                <div class="row main-content-row">
                                    <span>Last Name</span><br/>
                                    <input class="main-content-input" type="text" placeholder="Lastname" name="lastname">
                                </div>
                            </div>
                     </div>
                    <!-- Second Row -->
                     <div class="row">
                            <!-- Left Section -->
                            <div class="col-sm-6">
                                <div class="row main-content-row">
                                    <span>Employee ID</span><br/>
                                <input class="main-content-input" type="text" placeholder="Employee Id" name="employeeId">    
                                </div>
                            </div>
                            <!-- Right Section -->
                            <div class="col-sm-6">
                                <div class="row main-content-row">
                                    <span>Job Title</span><br/>
                                    <input class="main-content-input" type="text" placeholder="Job Title" name="jobTitle">
                                </div>
                            </div>
                     </div>
                    <!-- Third Row -->
                     <div class="row">
                            <!-- Left Section -->
                            <div class="col-sm-6">
                                <div class="row main-content-row">
                                    <span>Email</span><br/>
                                <input class="main-content-input" type="email" placeholder="Email" name="email">    
                                </div>
                            </div>
                            <!-- Right Section -->
                            <div class="col-sm-6">
                                <div class="row main-content-row">
                                    <span>Department</span><br/>
                                    <input class="main-content-input" type="text" placeholder="Department" name="department">
                                </div>
                            </div>
                     </div>

                    </div>
                </div>
            </div>
```
##### style.css file
``` CSS
		/* Content */
		.main-content{
		  background-color: #cccccc;
		  border: 1px solid #005935;
		  border-radius: 3px;
		  margin: 30px 60px 30px;
		  text-align: center;
		  font-weight: bold;
		  color: #005935;
		  padding-bottom: 50px;
		  padding-top: 20px;
		}
		.main-content-row{
		  display: inline-block;
		  text-align: left;
		  padding-top: 20px;
		}
		.main-content-input{
		  background-color: white;
		  border: 1px solid #005935;
		  border-radius: 3px;
		  padding: 5px 0px 5px 10px;
		  font-weight: normal;
		  font-size: 10px;
		  width: 200px;
		}

```