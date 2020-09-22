###### How to run the Project #####
#### Prerequisites ###
Node.js should be installed in the system to install "npm packages"

Step-1: Clone the Project from the github

Step-2: Unzip the Project

Step-3: Open command prompt/terminal in project directory

Step-4: Type Command "npm install" to install all dependicies npm packages of a project

Step-5: After installing all the packages type "npm start" on command prompt to run the development server.

Step-6: Type Ctrl+c for window / Command+c for mac to exit from the development server 
(Make Sure your Development server is running while your are using the project.)

####
This is not a full stack project, basically this is a front end project. 
Using React, Redux and Styled components.
*  Redux is Used for maintaining states
*  Styled components are used for styling

###### Folder Structure ######
* Src Folder ---- containes source code of the project
** Container Folder=>
    Contains ---- App.js (Main Container)
    -------------AppCss.js (Styles of App.js)

*** Component Folder
**** Data Folder=>
        Contains ----Data.js (Data File)
**** Input Field Folder=>
        Contains ----- Input Field Component
        ---------------InputData.js (Input Component Code)
        ---------------InputDataCss.js (Styles)
**** List Folder=>
        Contains ----- Whole List Component
        -------------- List.js (Whole List)
        -------------- ListElement.js (Indivisual list component)
        -------------- ListElement.js (Styling of indivisual List component)
**** Reducer Folder=>
        Contains ----- Reducer Function and initial state
        -------------- Used for maintaing states.

##### Working of the project
1--- User can easily add his / her task in the input field and on hitting add button that task will be visible in the To Do List
2--- User cannot add any empty task 
3--- user can delete his/her task anytime by hitting delete key