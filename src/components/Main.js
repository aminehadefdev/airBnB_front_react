import React from 'react';
import '../assets/css/main.css'

import Propertycard from './Propertycard'
class Main extends React.Component {

    render() {
        return (
            <div className="main">
                <Propertycard />
                <Propertycard />
            </div >
        );
    }
}

export default Main;
