import React from "react";


const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.7138544970676!2d6.623487815396735!3d46.53356387912809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2e210ba5043f%3A0x34a0425c675a1199!2sFC+Lausanne!5e0!3m2!1sel!2sch!4v1545333865593" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen></iframe>

                <div className="location_tag">
                    <div>
                        Location
                    </div>
                </div>
        </div>
    );
}

export default Location;
