import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../Firebase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import './specialSessions.css';
import NavBar from './../../NavBar.js';
import { Announcement } from '@material-ui/icons';
import CopyRight from './../home/components/copyRight';

export default function SpecialSessions() {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    db.collection('SpecialSessions')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data);
        setSessions(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            product: doc.data(),
          }))
        );
      });
    console.log(sessions);
  }, []);
  return (
    
        <div>
        
        <div>
          <NavBar className='bar' title='Special Sessions'/>
        </div>

        <div className="subDiv">
        <Card style={{background:"linear-gradient(rgba(40,9,150,0.5),transparent)",textAlign:"center"}}>
        <Announcement style={{height:"30px",width:"30px"}}/>
        <p style={{display:"inline",fontSize:"30px",marginLeft:"10px"}}>To be Updated soon !!!</p>
        </Card>
        </div>
        
        <div className="bottomDiv">
        <CopyRight />
        </div>
        
        {/* <Grid container spacing={2} className='session'>
          {sessions.map(({ id, product }) => (
            <Grid key={id} item xs={6} sm={2}>
              <Card className='item'>
                <CardMedia
                  style={{ height: '300px', width: '300px' }}
                  image={product.imgUrl}
                />
                <CardContent>
                  <Typography variant='h6' component='p'>
                    {product.session}
                  </Typography>
                  <a href={product.link} alt=''>
                    <Typography variant='body2' component='p'>
                      Click Here
                    </Typography>
                  </a>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid> */}

     </div>
  );
}
