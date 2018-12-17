import React, { Component } from 'react';
import MyButton from "../Utils/MyButton";

import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
    state = {
        prices: [100, 150, 250],
        positions: ["balcony", "medium", "star"],
        desc: [
            "A hotel is an establishment that provides paid lodging on a short-term basis",
            "Facilities provided may range from a modest-quality mattress in a small room to large",
            "The precursor to the modern hotel was the inn of medieval Europe. For a period of about 200 years"
        ],
        linkto:["http://sales/b", "http://sales/m", "http://sales/s"],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((price, i) => (
            <Zoom  delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            <span>{this.state.desc[i]}</span>
                        </div>
                        <div className="pricing_buttons">
                            <MyButton 
                            bck="#ffa800"
                            color="#ffffff"
                            text="Purchase"
                            link={this.state.linkto[i]} 
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;