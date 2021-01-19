import React, { Component } from 'react';
// import Carousel from 'react-material-ui-carousel'
import {Grid} from '@material-ui/core';
// import first from '../../../assests/images/past/sci2018.png';
// import second from '../../../assests/images/past/sistv2.png';
// import third from '../../../assests/images/past/2016.png';

class Past extends Component {
    render() {
        var items = [
            {
                picture: 'https://vce.ac.in/icsci/img/sistv2.png'
            },
            {
                picture: 'https://vce.ac.in/icsci/img/sci2018.png'
            },
            {
                picture: 'https://vce.ac.in/icsci/img/2016.png'
            }
        ];
        function Item(props)
        {
            return (
                // <Paper>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <img src={props.item.picture} alt="previous" width="200px" height="270px"/>
                    </Grid>
                // </Paper>
            )
        } 
        return (
            <div style={{paddingLeft:"10%",paddingRight:"10%",textAlign:"center",backgroundColor:"#007984",paddingTop:"2%",
            color:"#fff"}}>
                <h3 style={{color:"lightblue"}}>The proceedings of the conference will be published in Smart Innovation Systems and Technologies Series, Springer (Approved). Extended versions of selected best papers will be expected to appear in SCI/Scopus indexed international journals.</h3>
                <h1 className="aboutUsHeading">Past Springer Volumes</h1>
                {/* <Carousel
                autoPlay="false"
                indicators="false"
                animation="slide"
                navButtonsAlwaysVisible="true"           
                > */}
                <Grid container spacing={5}>
                    {
                        items.map( (item, i) => <Item key={i} item={item} /> )
                    }
                </Grid>
                {/* </Carousel> */}
            </div>
        );
    }
}

export default Past;