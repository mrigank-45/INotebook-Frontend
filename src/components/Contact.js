import React from 'react'
import '../App.css';
import '../tooplate_style.css';

const Contact = () => {

    return (
        <div className="panel" id="contactus">
            <h1>Contact Information</h1>
            <p>Brooklyn, NY, 11245 | +91 8223781928 | mrigankshukla2015@gmail.com</p>
            <div className="cleaner_h10"></div>

            <div className="col_380 float_l">
                <div id="contact_form">
                    <form  name="contact" >
                        <label for="author">Name:</label>
                        <input type="text" maxlength="40" id="author" className="input_field" name="author" />
                        <div className="cleaner_h10"></div>
                        <label for="email">Email:</label>
                        <input type="text" maxlength="40" id="email" className="input_field" name="email" />
                        <div className="cleaner_h10"></div>
                        <label for="subject">Subject:</label>
                        <input type="text" maxlength="40" id="subject" className="input_field" name="subject" />
                        <div className="cleaner_h10"></div>
                        <label for="text">Message:</label>
                        <textarea id="text" name="text" rows="0" cols="0" className="required"></textarea>
                        <div className="cleaner_h10"></div>
                        <button  type="submit" name='submit' id='submit' className="float_l btn btn-dark" >Send</button>
                        <button  type="reset" name='reset'  id='reset' className=" float_r btn btn-dark" >Reset</button>
                    </form>
                </div>
               
            </div>

            <div className="col_380 float_r"> </div>
        </div>
    )
}

export default Contact
