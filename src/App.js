// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Landing Page
import LandingPage from './Components/Landing_Page/LandingPage';

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';

// Import Login component
import Login from './Components/Login/Login';

// Import Signup component
import SignUp from './Components/SignUp/SignUp';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>

          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
          <Route path = "/" element = {<LandingPage />}></Route>
          <Route path = "/Login" element = {<Login />}></Route>
          <Route path  = "/SignUp" element = {<SignUp />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;