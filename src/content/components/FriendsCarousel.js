import React from 'react'







const FriendsCarousel = (props) => {
    return (
        <div>
            <section className="mainboxouter">
                <div id="mainbox">
                    <img id="manyfriends" src={`${props.blog.imgUrl}`} alt="face of a person" /> 
                </div>
                <div id="mainbox">
                    <img id="manyfriends" src={`${props.blog.imgUrl}`} alt="face of a person" /> 
                </div>
                <div id="mainbox">
                    <img id="manyfriends" src={`${props.blog.imgUrl}`} alt="face of a person" /> 
                </div>
                <div id="mainbox">
                    <img id="manyfriends" src={`${props.blog.imgUrl}`} alt="face of a person" /> 
                </div>
            </section>   
        </div>
    );
};

export default FriendsCarousel;