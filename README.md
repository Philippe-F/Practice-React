package.json

A manifest file that has some information about our app. It has all the 
dependencies and packages that are being used. We have three main packages. 

Dependencies
  "react" - The library itself.

  "react-dom" - Handles the loading of components in the browser. This is only 
  used for web applicatons that have a DOM. React Native (which is used to create 
  modile React apps) does not need "react-dom". 

  "react-script" - Has to with the dev server being able to compile our 
  application and run tests. 

Scripts
  "start" - Starts the dev server.

  "build" - Compiles all of our code into something that the browser can read 
  without needing a dev server. 