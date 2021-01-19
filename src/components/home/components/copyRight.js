import React, { Component } from 'react';
import {Container} from '@material-ui/core'
import '../css/home.css'

class CopyRight extends Component {
    render() {
        return (
            <div className="copyRight">
                <Container maxWidth="sm">
                    <p className="copyRightText">
                        Organized by, Vasavi College of Engineering (Autonomous), Hyderabad. Copyright © 2021.&nbsp; &nbsp;
                        <a href="http://www.vce.ac.in/"><i class="fa fa-dribbble"></i></a>
                    </p>
                </Container>
            </div>
        );
    }
}

export default CopyRight;