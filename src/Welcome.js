import React from 'react';
import Signup from './content/components/Signup'
import Login from './content/components/Login'


const welcome = () => {
    return (
    <div className="body">
        <section>
            <div className="container">
                <div className="background-img"> 
                <div className="box">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="content">
                        <h2>Welcome to: </h2>
                        <h3>New Friends</h3>
                        <h4>Login or Sign up and start making friends today. </h4>
                        </div>
                </div>
                </div>
            </div> 
        </section> 
    </div>

    );
};



export default welcome;




