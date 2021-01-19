import { Avatar, Container, Grid, Hidden, Typography } from '@material-ui/core';
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import image from '../../assets/images/profile_image.jpg';
import MKM from '../../assets/images/MKM.jpg';
import CEO from '../../assets/images/Balaji CEO.jpg';
import Principal from '../../assets/images/principal_SVR.jpg';
import cseHod from '../../assets/images/HOD.png';
import satha from '../../assets/images/sathapathy.png';
import hegde from '../../assets/images/Nagarathna.jpg';
import vik from '../../assets/images/vikranth.jpeg';
import NavBar from '../../NavBar.js';
import CopyRight from '../home/components/copyRight';

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

function createData(id, name, pos, pic) {
  return { id, name, pos, pic };
}

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function CustomizedTables(props) {
  const classes = useStyles();
  var hh = 80;
  if (!props.rows[0].pic) {
    hh = hh / 2;
    console.log(hh);
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableBody>
          {props.rows.map((row) => (
            <StyledTableRow style={{ height: hh }} key={row.name}>
              <StyledTableCell component='th' scope='row'>
                {row.id || 1}
              </StyledTableCell>
              <StyledTableCell component='th' scope='row'>
                {row.name}
              </StyledTableCell>
              <StyledTableCell component='th' scope='row'>
                {row.pos}
              </StyledTableCell>
              <StyledTableCell>
                {!row.pic ? (
                  ''
                ) : (
                  <Avatar
                    src={row.pic}
                    variant='rounded'
                    style={{ alignSelf: 'center' }}
                    className={classes.large}
                  />
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
function Committes() {
  const cheifPatron = [
    createData(
      1,
      'Sri M. Krishna Murthy',
      'Secretary, Vasavi Academy of Education',
      MKM
    ),
    createData(2, 'Sri P. Balaji', 'CEO, Vasavi College of Engineering', CEO),
  ];

  const patron = [
    createData(
      1,
      'Dr. S. V. Ramana',
      'Principal, Vasavi College of Engineering',
      Principal
    ),
  ];
  const hC = [createData(1, 'Dr. Lakhmi Jain', 'Australia')];
  const gC = [
    createData(1, '1	Dr. T. Adilakshmi', 'Professor & HOD, CSE, VCE', cseHod),
    createData(
      2,
      'Dr. Suresh Chandra Satapathy',
      'KIIT DU, Bhubaneswar',
      satha
    ),
  ];
  const pC = [
    createData(1, 'Dr. Nagaratna P. Hegde', 'Professor, CSE, VCE', hegde),
    createData(
      2,
      'Dr. Vikrant Bhateja',
      'Professor, ECE, Head of Academics and Quailty Control, SRMGPC, Lucknow',
      vik
    ),
  ];
  const oC = [
    createData(1, 'Dr. T. Adilakshmi', 'Professor & HOD, CSE, VCE', cseHod),
  ];
  const progC = [
    createData(1, 'Dr. S.Ramachandram', 'Vice Chancellor, Anurag University'),
    createData(2, 'Dr. Banshidhar Majhi', 'Director, IITDM Kancheepuram'),
    createData(3, 'Dr. Siba K Udgata', 'Professor, HCU'),
    createData(
      4,
      'Dr. Sourav Mukhopadhyay',
      'Associate Professor, IIT Kharaghpur'
    ),
    createData(5, 'Dr. P. Radha Krishna	Professor', 'CSE, NIT Warangal'),
    createData(6, 'Dr. M. M. Gore', 'Professor, MNNIT, Allahabad'),
    createData(7, 'Dr. S M Hegde', 'Professor, NIT Surathakal'),
    createData(8, 'Dr. Bapi Raju S', 'Professor, IIIT Hyderabad'),
    createData(9, 'Dr. Rajendra Hegadi', 'Associate Professor, IIIT Dharwad'),
    createData(10, 'Dr. S Sameen Fatima', 'Registrar, Anurag University'),
    createData(11, 'Dr. K Shyamala', 'Professor, OU'),
    createData(12, 'Dr. Naveen Sivadasan', 'TCS Innovation Labs, Hyderabad'),
    createData(
      13,
      'Dr. Badrinath G Srinivas',
      'Research Scientist - III, Amazon Development Center, Hyderabad'
    ),
    createData(
      14,
      'Dr. Ravindra S Hegadi',
      'Professor, PAH Solapur University'
    ),
    createData(
      15,
      'Dr. S. P. Algur',
      'Professor & Chairman, CSE, Rani Chennamma University, Belgavi'
    ),
    createData(16, 'Dr. R Sridevi', 'Professor, Dept. of CSE, JNTUH'),
  ];

  const tC = [
    createData(1, 'Dr. Rammohan', ' South Korea'),
    createData(2, 'Dr. Kailash C Patidar', ' South Africa'),
    createData(3, 'Dr. Naeem Hanoon ', 'Malaysia'),
    createData(4, 'Dr Vimal Kumar', ' The University of Waikato, New Zealand'),
    createData(
      5,
      'Dr Akshay Sadananda Uppinakudru Pai',
      ' University of Copenhagen, Denmark'
    ),
    createData(6, 'Dr. K.C. Santosh', ' The University of South Dakota'),
    createData(7, 'Dr. Ayush Goyal', ' Texas A&M University, Kingsville'),
    createData(8, 'Dr. Sobhan Babu', ' Assoc. Professor, IIT Hyderabad'),
    createData(9, 'Dr. DVLN Somayajulu', ' Director, IIIT, Kurnool'),
    createData(10, 'Dr. Siba Udgata', ' Professor, HCU'),
    createData(11, 'Dr. R.B.V. Subramaanyam', ' Professor, NITW'),
    createData(12, 'Dr. S G Sanjeevi', ' Professor, NITW'),
    createData(13, 'Dr. Sanjay Sengupta', ' CSIR, New Delhi'),
    createData(14, 'Dr. A. Govardhan', ' Rector, JNTU Hyderabad'),
    createData(
      15,
      'Prof. Chintan Bhatt',
      ' Chandubhai Patel Institute of Technology, Gujarat'
    ),
    createData(16, 'Dr. Munesh Chandra Trivedi', '	ABES Engg College, Ghazibad'),
    createData(17, 'Dr. Alok Aggarwal', ' Professor'),
    createData(
      18,
      'Dr. Anuja Arora',
      ' Jaypee Institute of Information Technology,Noida,India'
    ),
    createData(
      19,
      'Dr. Divakar Yadav',
      ' Associate Professor, MMMUT, Gorakhpur,India'
    ),
    createData(20, 'Dr. Kuda Nageswar Rao', ' Andhra University,Visakhapatnam'),
    createData(21, 'Dr. M. Ramakrishna Murthy', ' ANITS, Visakhapatnam'),
    createData(22, 'Dr. Suberna Kumar', ' MVGR,Vizayanagaram'),
    createData(
      23,
      'Dr. JVR Murthy',
      ' Director Incubation and IPR, JNTU Kakinada'
    ),
    createData(24, 'Dr. D Ravi', ' IDRBT, Hyderabad'),
    createData(
      25,
      'Dr. Badrinath G Srinivas',
      ' Research Scientist - III, Amazon Development Center, Hyderabad'
    ),
    createData(26, 'Dr. K. Shyamala', ' Professor,OU'),
    createData(27, 'Dr. P. V. Sudha', ' Professor, OU'),
    createData(28, 'Dr. M. A. Hameed', ' Assistant Professor, OU'),
    createData(29, 'Dr. B. Sujatha', '	Assistant Professor, OU'),
    createData(30, 'Dr. T. Adilakshmi', ' Professor & HOD, CSE, VCE'),
    createData(31, 'Dr. Nagaratna P. Hegde', ' Professor, CSE, VCE'),
    createData(32, 'Dr. V. Sireesha', ' Assistant Professor, CSE, VCE'),
  ];

  const orgC = [
    createData(1, 'Dr. D. Baswaraj', ' Professor, CSE, VCE'),
    createData(2, 'Dr. M. Shanmukhi', ' Professor, CSE, VCE'),
    createData(3, 'Dr. K. Srinivas', ' Assoc. Professor, CSE, VCE'),
    createData(4, 'Dr. V. Sireesha', ' Asst. Professor, CSE, VCE '),
    createData(5, 'M. Sunitha Reddy', ' Asst. Professor, CSE, VCE'),
    createData(6, 'R. Sateesh Kumar', ' Asst. Professor, CSE, VCE'),
    createData(7, 'Mr. S. Vinay Kumar', ' Asst. Professor, CSE, VCE'),
    createData(8, 'Mr. M. Sashi Kumar', ' Asst. Professor, CSE, VCE'),
  ];

  const publC = [
    createData(1, 'Dr. M. Shanmukhi', ' Professor, CSE, VCE'),
    createData(2, 'Ms. M. Sunitha Reddy', ' Assistant Professor, CSE, VCE'),
    createData(3, 'Mr. S. Vinay Kumar', ' Assistant Professor, CSE, VCE'),
    createData(4, 'Mr. M. S. V. Sashi Kumar', ' Assistant Professor, CSE, VCE'),
    createData(5, 'Mr. C. Gireesh', ' Assistant Professor, CSE, VCE'),
    createData(6, 'Ms. T. Jalaja', ' Assistant Professor, CSE, VCE'),
    createData(7, 'Mr. I. Navakanth', ' Assistant Professor, CSE, VCE'),
    createData(8, 'Ms. S. Komal Kaur', ' Assistant Professor, CSE, VCE'),
    createData(9, 'Mr. T. Saikanth', ' Assistant Professor, CSE, VCE'),
    createData(10, 'Ms. K. Mamatha', ' Assistant Professor, CSE, VCE'),
  ];

  const wC = [
    createData(1, 'Mr. S. Vinay Kumar', ' Assistant Professor, CSE, VCE'),
    createData(2, 'Mr. M. S. V. Sashi Kumar', ' Assistant Professor, CSE, VCE'),
  ];
  return (
    <div>
      <div>
        <NavBar title='Committes' />
      </div>
      <Container maxWidth='md'>
        <Grid container>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='h3' align='left' component='h6'>
              Chief Patrons
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <CustomizedTables rows={cheifPatron} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='h3' align='left' component='h6'>
              Patrons
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <CustomizedTables rows={patron} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='h3' align='left' component='h6'>
              Honorary Chair
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <CustomizedTables rows={hC} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='h3' align='left' component='h6'>
              General Chair
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <CustomizedTables rows={gC} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='h3' align='left' component='h6'>
              Publication Chair
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <CustomizedTables rows={pC} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='h3' align='left' component='h6'>
              Organizing Chair
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <CustomizedTables rows={oC} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='h3' align='left' component='h6'>
              Program Committee
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <CustomizedTables rows={progC} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='h3' align='left' component='h6'>
              Technical Programme Committee
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <CustomizedTables rows={tC} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='h3' align='left' component='h6'>
              Organizing Committee
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <CustomizedTables rows={orgC} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='h3' align='left' component='h6'>
              Publicity Committee
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <CustomizedTables rows={publC} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} sm={12} md={12}>
            <Typography variant='h3' align='left' component='h6'>
              Website Committee
            </Typography>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <CustomizedTables rows={wC} />
          </Grid>
        </Grid>
      </Container>
      <Grid container>
        <Grid item lg={12} md={12} sm={12}>
          <CopyRight />
        </Grid>
      </Grid>
    </div>
  );
}

export default Committes;
