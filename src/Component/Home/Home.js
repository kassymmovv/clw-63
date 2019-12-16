import React, {Component} from 'react';
import './Home.css'
class Home extends Component {
    state = {
        purch:false,
    };

continue = () => {
    this.props.history.push({
        pathname: '/checkout',
    })
}
    render() {
        return (
            <div>
                <h1 className="title">HOME</h1>

                <div className="containerr">
                    <div className="block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cumque doloribus dolorum explicabo officiis qui quis recusandae repellendus sunt.</div>
                    <div className="block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cumque doloribus dolorum explicabo officiis qui quis recusandae repellendus sunt.</div>
                    <div className="block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cumque doloribus dolorum explicabo officiis qui quis recusandae repellendus sunt.</div>
                    <div className="block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cumque doloribus dolorum explicabo officiis qui quis recusandae repellendus sunt.</div>
                    <button onClick={this.continue} className="btn-main">next</button>


                </div>
            </div>
        );
    }
}

export default Home;