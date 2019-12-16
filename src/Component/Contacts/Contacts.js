import React, {Component} from 'react';
import './Contacts.css'
class Contacts extends Component {
    back = () => {
        this.props.history.goBack()
    };
    render() {
        return (
            <div>
                <h1>OUR CONTACTS</h1>
                <p className="p">email:asasuna@mail.ru</p>
                <p className="p">996443322</p>
                <div></div>
                <button onClick={this.back}>back</button>
            </div>
        );
    }
}

export default Contacts;