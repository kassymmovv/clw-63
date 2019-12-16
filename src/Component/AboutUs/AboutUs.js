import React, {Component} from 'react';
import './AboutUs.css'
class AboutUs extends Component {
    continue = () => {
        this.props.history.push({
            pathname: '/checkout/contact',
        })
    };
    back = () => {
        this.props.history.goBack()
    }
    render() {
        return (
            <div>
                <div className="service-block container">
                    <div className="service-title">
                        <h3>our <span>service</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga facilis, perspiciatis dolor
                            reprehenderit.</p>
                    </div>
                </div>
                <div className="boxes container">
                    <div className="box q">
                        <h3>Pure Javascript Slider</h3>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non molestias,
                            corporis et natus rerum magni nemo.</p>
                        <p className="textt">read more</p>
                    </div>
                    <div className="box w">
                        <h3>different color option</h3>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non molestias,
                            corporis et natus rerum magni nemo.</p>
                        <p className="textt">read more</p>
                    </div>
                </div>
                <div className="boxx container">
                    <div className="box e">
                        <h3><span className="ee">seo</span>friendly</h3>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non molestias,
                            corporis et natus rerum magni nemo.</p>
                        <p className="textt">read more</p>
                    </div>
                    <div className="box r">
                        <h3>creative modern design</h3>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non molestias,
                            corporis et natus rerum magni nemo.</p>
                        <p className="textt">read more</p>
                    </div>
                </div>
             <button onClick={this.continue}>next</button>
             <button onClick={this.back}>back</button>
            </div>
        );
    }
}

export default AboutUs;