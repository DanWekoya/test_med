import React from 'react';
import './Sign_up.css';

function Sign_up (){
    return(
        <div ClassName = "Sign_up">
            <div ClassName="container" style="margin-top: 5%;">  //Main container with margin-top
           
        <div ClassName="signup-grid"> // Grid layout for sign-up form
            <div ClassName="signup-text"> // Title for the sign-up form
                <h1>Sign Up</h1>
            </div>
            <div ClassName="signup-text1" style="text-align: left;"> // Text for existing members to log in
                Already a member? <span><a href="../Login/Login.html" style="color: #2190FF;"> Login</a></span>
            </div>
            <div ClassName="signup-form"> //Form for user sign-up
                <form> //Start of the form

                    <div ClassName="form-group"> //Form group for user's name
                        <label for="name">Name</label> //Label for name input field
                        <input type="text" name="name" id="name" required ClassName="form-control" placeholder="Enter your name" aria-describedby="helpId" /> //Text input field for name
                    </div>

                    <div ClassName="form-group"> //Form group for user's phone number
                        <label for="phone">Phone</label> //label for phone input field
                        <input type="tel" name="phone" id="phone" required ClassName="form-control" placeholder="Enter your phone number" aria-describedby="helpId" /> //Tel input field for phone number
                    </div>

                    <div ClassName="form-group"> //Form group for user's email
                        <label for="email">Email</label> //Label for email input field
                        <input type="email" name="email" id="email" required ClassName="form-control" placeholder="Enter your email" aria-describedby="helpId" /> //Email input field
                    </div>

                    <div ClassName="form-group"> //Form group for user's password
                        <label for="password">Password</label> //Label for password input field
                        <input name="password" id="password" required ClassName="form-control" placeholder="Enter your password" aria-describedby="helpId" /> //Password input field
                    </div>

                    <div ClassName="btn-group"> //Button group for form submission and reset
                        <button type="submit" ClassName="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button> //Submit button
                        <button type="reset"ClassName="btn btn-danger mb-2 waves-effect waves-light">Reset</button> //Reset button
                    </div>
                </form> //End of the form
            </div>
        </div>
    </div>
    </div>
    )
}