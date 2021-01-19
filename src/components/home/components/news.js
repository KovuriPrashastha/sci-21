import React, { Component } from 'react';
import {
  Container,
  Card,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Grid,
  Typography,
} from '@material-ui/core';
import { TouchApp, PlayForWork, Announcement } from '@material-ui/icons';

class News extends Component {
  render() {
    const latestNews = [
      'WINNERS OF BEST PAPER & BEST PRESENTATION AWARDS',
      'Tracks for Online (Virtual) Technical Paper Presentations',
      'Programme Schedule',
      'The Conference shall be held in virtual / online mode due to Pandemic. The presentation slots shall be mailed to registered authors on 4th October 2020. Awards- 5 Best paper awards by Springer Nature and 5 Best Presentation awards by Conference organizers',
    ];
    const icons = [<TouchApp />, <TouchApp />, <TouchApp />, <PlayForWork />];
    return (
      <div style={{ marginTop: '10px' }}>
        <Container>
          <Card>
            <h1 style={{ color: 'blue' }}>News</h1>
            <List component='nav' aria-label='main mailbox folders'>
              <div
                style={{
                  'padding-left': '540px',
                  display: 'flex',
                  alignItems: 'center',
                  'flex-wrap': 'wrap',
                }}
              >
                <Announcement />
                <Typography
                  style={{
                    'padding-left': '20px',
                  }}
                >
                  To Be Updated Soon
                </Typography>
              </div>
              {/* {latestNews.map((post, index) => (
                <Grid container spacing={3}>
                  <ListItem key={latestNews[index]}>
                    <Grid item sm={0}>
                      <ListItemIcon>{icons[index]}</ListItemIcon>
                    </Grid>
                    <Grid item sm={10} xs={8}>
                      <ListItemText primary={latestNews[index]} />
                    </Grid>
                  </ListItem>
                </Grid>
              ))} */}
            </List>
          </Card>
        </Container>
      </div>
    );
  }
}

export default News;
