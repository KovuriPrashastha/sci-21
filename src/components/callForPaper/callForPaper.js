import React from 'react';
import NavBar from '../../NavBar.js';
import { Typography, Container, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { MoreHoriz } from '@material-ui/icons';
import CopyRight from '../home/components/copyRight';

const useStyles = makeStyles({
  root: {
    width: '100%',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
});
const WhiteTextTypography = withStyles({
  root: {
    color: 'rgb(20, 33, 220)',
  },
})(Typography);
function CallForPaper() {
  const classes = useStyles();

  const l = [
    'Artificial Intelligence',
    'Machine Learning',
    'Approximate Computing',
    'Computational Intelligence',
    'Cognitive Computing',
    'Intelligent Control Agents',
    'Optimization Techniques',
    'Intelligent Agents',
    'Soft Computing Techniques',
    'Internet of Things',
    'Cloud & Fog Computing',
    'Mobile Computing & Ad hoc Networks',
    'Security Tools & Technologies',
    'Stream Mining',
    'Social Media',
    'Knowledge - based Systems and Formal Methods',
    'Search Engines and Information Retrieval',
    'Parallel & Scalable Computing',
    'Real- time Systems',
    'Real- time Analytics',
    'Autonomous Agents',
    'Security and Information Assurance',
    'Robotics',
    'Robust Control Agents',
    'Big data Tools & Technologies',
    'Recent Trends & Developments in Networking',
  ];
  return (
    <div>
      <div>
        <NavBar title='Call For Papers' />
      </div>
      <div style={{ paddingTop: '0px', paddingLeft: '50px' }}>
        <Container>
          <Card
            style={{
              textAlign: 'justify',
              paddingLeft: '5%',
              paddingRight: '5%',
              paddingBottom: '1%',
              paddingTop: '2%',
              marginTop: '5%',
              marginLeft:'5%',
              backgroundColor: '#e1f5fe',
            }}
          >
            <p>
              Authors are invited to submit full papers for consideration
              (maximum 8 pages) in SCI 2020. The conference looks for
              significant contributions to all major fields of the Computer
              Science and Information Technology in theoretical and practical
              aspects. The conference aims to provide a platform to the
              researchers and practitioners from both academia as well as
              industry to meet and share cutting-edge development in the field.
              Authors are solicited to contribute to the conference by
              submitting articles that illustrate research results, projects,
              surveying works and industrial experiences that describe
              significant advances in the following areas but are not limited
              to.
            </p>
            <div>
              <WhiteTextTypography variant='p' gutterBottom align='left'>
                The proceedings of the conference will be published in Smart
                Innovation Systems and Technologies Series, Springer (Approved).
                Extended versions of selected best papers will be expected to
                appear in SCI/Scopus indexed international journals.
              </WhiteTextTypography>
            </div>
            <br></br>
          </Card>
          <Card
            style={{
              textAlign: 'justify',
              paddingLeft: '5%',
              paddingRight: '5%',
              paddingBottom: '1%',
              paddingTop: '2%',
              marginTop: '5%',
              marginLeft:'5%',
              backgroundColor: '#e1f5fe',
            }}
          >
            <Typography variant='h5' gutterBottom align='left'>
              Conference Focus Areas
            </Typography>
            <ul>
              {l.map((i) => (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    'flex-wrap': 'wrap',
                  }}
                >
                  <li>
                    <Typography
                      variant='body1'
                      gutterBottom
                      align='left'
                      styles={{ 'padding-left': '10px' }}
                    >
                      {' ' + i}
                    </Typography>
                  </li>
                </div>
              ))}
            </ul>
          </Card>

          <Card
            style={{
              textAlign: 'justify',
              paddingLeft: '5%',
              paddingRight: '5%',
              paddingBottom: '1%',
              paddingTop: '2%',
              marginTop: '5%',
              marginLeft:'5%',
              backgroundColor: '#e1f5fe',
            }}
          >
            <Typography variant='h5' gutterBottom align='left'>
              Paper submission guidelines
            </Typography>
            <p>
              Submission of paper must be original and should not have been
              previously published or under consideration for publication. All
              papers will be sent for peer review and the corresponding author
              will be notified of the outcome of the review process. At least
              one of the authors of each accepted paper must register for the
              conference. All submissions are to be done electronically through
              easychair link.
            </p>
            <p>
              Before submission,{' '}
              <a
                target='_blank'
                href='https://www.springer.com/gp/authors-editors/editors/publishing-ethics-for-journals/4176'
                alt=''
                rel='noreferrer'
              >
                Click here
              </a>{' '}
              to read the Springer publication ethics and guidelines.
            </p>
            <p>
              All submissions must comply with the Springer SIST format:
              <a
                alt=''
                rel='noreferrer'
                target='_blank'
                href='https://www.springer.com/gp/authors-editors/conference-proceedings/conference-proceedings-guidelines'
              >
                Click here
              </a>
            </p>
            <ul>
              <li>
                <p>
                  Page limit for Camera Ready papers is 8 pages (With regular
                  registration fees).{' '}
                </p>
              </li>
              <li>
                <p>
                  Extra page charge: INR 1000 per page (for Indian authors) and
                  USD 50 per page (for foreign authors).
                </p>
              </li>
            </ul>
          </Card>
        </Container>
      </div>
      <div
        style={{
          paddingLeft: '50px',
        }}
      >
        <CopyRight />
      </div>
    </div>
  );
}

export default CallForPaper;
