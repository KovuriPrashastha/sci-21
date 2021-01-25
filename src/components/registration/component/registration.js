import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Accordion,
  CssBaseline,
  Container,
  Card,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Table,
  TableBody,
  TableCell,
  Paper,
  TableRow,
  TableContainer,
} from '@material-ui/core';
import CopyRight from '../../home/components/copyRight';
import Sponsors from '../../home/components/sponsors';
import {
  ExpandMore,
  AccountBox,
  AccountBalance,
  Label,
  Dialpad,
  AccountBalanceWallet,
  PhonelinkRing,
} from '@material-ui/icons';
import NavBar from '../../../NavBar.js';
import '../css/registration.css';

class Registration extends Component {
  render() {
    const accountsDetails = [
      'Account Holder:Innovative Research Consultancy',
      'Name of Bank: ICICI Bank Limited, Mahanagar Branch, Sector-B, Mahanagar, Lucknow 226004, Uttar Pradesh (India)',
      'Account Type: Current Account',
      'Account Number: 104805001533',
      'IFSC Code: ICIC0001048',
      'SWIFT Code: ICICINBBCTS',
      'UPI ID: innovativeresearchconsultancy@icici',
    ];
    const icons = [
      <AccountBox />,
      <AccountBalance />,
      <Label />,
      <Dialpad />,
      <AccountBalanceWallet />,
      <AccountBalanceWallet />,
      <PhonelinkRing />,
    ];

    function createData(typeR, detailsR) {
      return { typeR, detailsR };
    }

    const feeDetails = [
      createData(
        'Indian Authors/Faculty/Research Scholars',
        'INR 5500 (Additional Paper: INR 4500; Co-Author Registration: INR 3000)'
      ),
      createData(
        'Industry Authors',
        'INR 7000 (Additional Paper: INR 4500; Co-Author Registration: INR 3000)'
      ),
      createData(
        'Foreign Authors',
        'USD 250 (Additional Paper: 150 USD; Co-Author Registration: 150 USD)'
      ),
      createData('Listeners', 'INR 200'),
    ];

    const StyledTableCell = withStyles((theme) => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      body: {
        fontSize: 14,
      },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
      },
    }))(TableRow);

    return (
      <div>
        <div>
          <NavBar className='bar' title='Registration' />
        </div>
        <CssBaseline />
        <Container
          style={{
            paddingLeft: '50px',
          }}
        >
          <div className='col-lg-2 col-md-4 col-sm-6 col-xl-3'>
            <Card className='instructionsCard' style={{marginLeft:'5%'}}>
              <h3 style={{ textAlign: 'start', marginLeft: '14px' }}>
                Instructions for Author(s) Registration & Payment of Reg. Fee
              </h3>

              <ol>
                <li className='instructionsList'>
                  Each paper must be at least registered by one author for
                  getting it published in Springer.
                </li>
                <li className='instructionsList'>
                  Extra page length charges would be applicable beyond 08 pages
                  strictly (on Springer Template available on conference
                  website) @ Rs. 1000/= per page (@USD 50 per page). You have to
                  make a combined fund transfer in such a case (i.e. Normal
                  Registration + Extra Page Charges).
                </li>
                <li className='instructionsList'>
                  The paper will not be uploaded to Springer unless we receive
                  the payment.
                </li>
                <li className='instructionsList'>
                  Pay the conference registration fee via Online Bank Transfer
                  or Cash Deposit in Bank (Please quote "SCI-2020 Registration
                  Fee, Your Name and Your Paper IDs" in the description section
                  of your transfer) to the account details mentioned below:
                </li>
              </ol>
            </Card>

            {/*
            Below is the for the accordion which has account details for which the user needs to pay;
        */}
            <Accordion
              style={{
                marginRight: '0px',
                marginTop: '10px',
                marginLeft:'5%',
                backgroundColor: '#007984',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography className='accountDetailsHeading'>
                  AccountDetails
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List component='nav' aria-label='main mailbox folders'>
                  {accountsDetails.map((post, index) => (
                    <Grid container spacing={3}>
                      <ListItem key={accountsDetails[index]}>
                        <Grid item sm={0}>
                          <ListItemIcon style={{ color: 'white' }}>
                            {icons[index]}
                          </ListItemIcon>
                        </Grid>
                        <Grid item sm={10} xs={8}>
                          <ListItemText
                            primary={accountsDetails[index]}
                            style={{ color: 'white' }}
                          />
                        </Grid>
                      </ListItem>
                    </Grid>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>

            {/*
            // for the table,i.e the registration details;
            the details are in a list and we map the list;
        */}

            <h3 style={{ textAlign: 'start', marginLeft: '5%' }}>
              Registration Fee Details
            </h3>
            <TableContainer component={Paper} style={{ marginBottom: '20px',marginLeft:'5%'}}>
              <Table className='table' aria-label='simple table'>
                <TableBody>
                  {feeDetails.map((row) => (
                    <StyledTableRow key={row.typeR}>
                      <StyledTableCell component='th' scope='row'>
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align='left'>
                        {row.typeR}
                      </StyledTableCell>
                      <StyledTableCell align='left'>
                        {row.detailsR}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Card
              className='instructionsCard'
              style={{ marginBottom: '20px', backgroundColor: '#007984',marginLeft:'5%' }}
            >
              <h3
                style={{
                  textAlign: 'start',
                  marginLeft: '14px',
                  color: 'white',
                }}
              >
                Note
              </h3>

              <ol>
                <li className='instructionsList2'>
                  <p style={{ color: 'white', display: 'inline' }}>
                    "Academicians, Faculty Members, Students and Research
                    Scholars"
                  </p>{' '}
                  means any PhD Scholar or Researcher or U.G./P.G. Student or
                  Academician working in an educational institute.
                </li>
                <li className='instructionsList2'>
                  <p style={{ color: 'white', display: 'inline' }}>
                    "Industry Participants"
                  </p>
                  means any Indian citizen working in industrial or commercial
                  sector.
                </li>
                <li className='instructionsList2'>
                  <p style={{ color: 'white', display: 'inline' }}>
                    "Listener / Participant Only"
                  </p>
                  means any student or academician or industry author who would
                  like to attend conference programme. (Not registered author)
                </li>
                <li className='instructionsList2'>
                  <p style={{ color: 'white', display: 'inline' }}>
                    "Co-Author Registration"
                  </p>
                  means a Co-author who would like to attend conference
                  programme and present the paper along with main registered
                  author.
                </li>
                <li className='instructionsList2'>
                  <p style={{ color: 'white', display: 'inline' }}>
                    "Additional Paper Registration"
                  </p>
                  means the same authors who wish to apply their second paper.
                  (For one additional paper only)
                </li>
                <li className='instructionsList2'>
                  <p style={{ color: 'white', display: 'inline' }}>
                    "The above registration fee"
                  </p>
                  is inclusive of GST
                </li>
              </ol>
            </Card>
          </div>
        </Container>
        <div
          style={{
            paddingLeft: '50px',
          }}
        >
          <Sponsors />
          <CopyRight />
        </div>
      </div>
    );
  }
}

export default Registration;
