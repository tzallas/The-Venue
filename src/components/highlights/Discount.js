import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import MyButton from "../Utils/MyButton";

class Discount extends React.Component {
    state = {
        discountStart: 0,
        discountEnd: 30
    }

    porcentage = () => {
        if ( this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage()
        },30)
    }

    render() {
        return(
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    
                    <Fade
                    onReveal={() => this.porcentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before the 23th</h3>
                            <p>A ticket is a voucher that indicates that an individual is entitled to admission to an event or establishment such as a theatre, amusement park or tourist attraction, or has a right to travel on a vehicle, such as with an airline ticket, bus ticket or train ticket.</p>

                            <MyButton
                                text="Purchase Tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link="http://google.com"
                            />
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
};

export default Discount;

