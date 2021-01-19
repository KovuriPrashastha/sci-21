import React, { Component } from 'react';
import NavBar from '../../NavBar.js';
import { Container, Card } from '@material-ui/core';
import Sponsors from '../home/components/sponsors';
import CopyRight from '../home/components/copyRight';
import './about.css';
import { lightBlue } from '@material-ui/core/colors';

class AboutUs extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar title='About Us' />
        </div>
        <div style={{ paddingTop: '0px' }}>
          <Container>
            <Card
              style={{
                textAlign: 'justify',
                paddingLeft: '5%',
                paddingRight: '5%',
                paddingBottom: '1%',
                paddingTop: '2%',
                marginTop: '5%',
                backgroundColor:"#e1f5fe"
              }}
            >
              <h1 className="aboutUsHeading">PROFILE OF THE INSTITUTE</h1>
              <p>
                Founded in 1981 by Vasavi Academy of Education, Vasavi College
                of Engineering represents a rich tradition of excellence in
                technology-based education. A premier-league institution among
                the affiliates of Osmania University, Vasavi College of
                Engineering owes its vision to Sri Pendekanti Venkata Subbaiah,
                a veteran statesman of Independent India.
              </p>
              <p>
                Vasavi College of Engineering, in its 38 years of existence, is
                a reputed institution in the State of Telangana. The college in
                its pursuit for quality in technical education has earned 3rd
                ranking in the State and 32nd in the country (source: Hindustan
                Times on 24th June 2009). The college offers six UG (Civil,
                Mechanical, ECE, CSE, EEE and IT) with total sanctioned intake
                of 780 and 6 PG programmes [ME (ES & VLSI); ME (CE & SP); ME
                (ADM); ME(PS & PE); M.Tech (CSE) and MCA with total sanctioned
                intake of 156].
              </p>
              <p>
                Located in the sylvan suburbs of Ibrahimbagh in Hyderabad,
                Vasavi College of Engineering presents a picturesque view
                flanked by the glorious Golconda Fort. Situated over a sprawling
                13.6 acre campus with lush lawns, a beautiful landscape,
                aesthetic architecture and avant-garde infrastructure, the
                College epitomizes an exemplary setting for higher learning.
                With dedicated efforts of over three decades, Vasavi College of
                Engineering has emerged into a centre of excellence in
                engineering education. Building purposive partnerships with the
                industry, bolstering its wherewithal continually and evolving
                innovative programmes consistent with changing times, Vasavi
                College of Engineering strives to maintain its pre-eminent
                position.
              </p>
              <p>
                The college has been granted autonomy by the University Grants
                Commission, New Delhi and Osmania University, Hyderabad for all
                the programs for a period of six years with effect from 2014-15.
              </p>
            </Card>
            <Card
              style={{
                textAlign: 'justify',
                paddingLeft: '5%',
                paddingRight: '5%',
                paddingBottom: '1%',
                paddingTop: '2%',
                marginTop: '5%',
                backgroundColor:"#e1f5fe"
              }}
            >
              <h1 className="aboutUsHeading">ABOUT THE DEPARTMENT</h1>
              <p>
                Established in the year 1994, the Department of Computer Science
                and Engineering diligently strives to develop analytical &
                synthesizing skills, thus fostering the overall development of
                students. The Department is committed to building ethical and
                competent professionals with the support of highly qualified
                faculty, innovative novel curricula, and state of the art
                infrastructure. The curriculum includes courses on the latest
                technologies like Artificial Intelligence, Machine Learning,
                Image Processing, Internet of Things, Natural Language
                Processing, and Robotic Process Automation, to name a few. Apart
                from the curriculum, a value-added course, CISCO, is also
                offered to meet the contemporary market demands.
              </p>
              <p>
                The programs offered by the department enable students to be
                recruited by distinguished multinational companies namely
                Amazon, Cisco, Microsoft, Qualcomm, Commvault, EA Games, Service
                Now, Accolite, Oracle, Pega Systems, JP Morgan, ADP, etc. MoU’s
                have been signed with eminent organizations like Pega Systems,
                Infosys, UiPath, EPAM, Aptude, Inncircles, Navaratan
                Technologies, Chidhagni Consulting & Misplaced Minds that offer
                students training programmes, internships and placements.
              </p>
              <p>
                Industry-related research and consultancy is carried out in
                partnership with organizations such as BOSCH, RCI, TITAN, etc.
                The Department has received a grant from AICTE under MODROBS to
                establish a lab for Industrial Internet of Things (IIoT).
                Seminars, workshops, theme-based projects and hackathons are
                conducted regularly to keep the students abreast in latest
                developments in Computer Science & Engineering
              </p>
              <p>
                Furthermore, the department has been recognized as a research
                centre by Osmania University and two professors have been
                recognized as research supervisors.
              </p>
            </Card>
            <Card
              style={{
                textAlign: 'justify',
                paddingLeft: '5%',
                paddingRight: '5%',
                paddingBottom: '1%',
                paddingTop: '2%',
                marginTop: '5%',
                backgroundColor:"#e1f5fe"
              }}
            >
              <h1 className="aboutUsHeading">Department Vision</h1>
              <p>
                Be a pioneer in producing ethical and competent professionals in
                the domain of Computer Science and Engineering.
              </p>
            </Card>
            <Card
              style={{
                textAlign: 'justify',
                paddingLeft: '5%',
                paddingRight: '5%',
                paddingBottom: '1%',
                paddingTop: '2%',
                marginTop: '5%',
                backgroundColor:"#e1f5fe"
              }}
            >
              <h1 className="aboutUsHeading">Department Mission</h1>
              <p>
                To build analytical and synthesizing skills in the domain of
                Computer Science and Engineering for the benefit of the society.
              </p>
            </Card>
            <Card
              style={{
                textAlign: 'justify',
                paddingLeft: '5%',
                paddingRight: '5%',
                paddingBottom: '1%',
                paddingTop: '2%',
                marginTop: '5%',
                backgroundColor:"#e1f5fe"
              }}
            >
              <h2 className="aboutUsHeading">Program Educational Objectives (PEOs) - BE (CSE):</h2>
              <p>Program Educational Objectives (PEOs) - BE (CSE):</p>
              <ul>
                <li>
                  <b>PEO 1:</b> Solve problems in a modern technological society
                  as valuable and productive engineers.
                </li>
                <li>
                  <b>PEO 2:</b> Function and communicate effectively, both
                  individually and within multidisciplinary teams.
                </li>
                <li>
                  <b>PEO 3:</b> Be sensitive to the consequences of their work,
                  both ethically and professionally, for productive professional
                  careers.
                </li>
                <li>
                  <b>PEO 4:</b> Continue the process of life-long learning.
                </li>
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
                backgroundColor:"#e1f5fe"
              }}
            >
              <h2 className="aboutUsHeading">Program Outcomes (PO’S) - BE (CSE)</h2>
              <i>Engineering Graduates will be able to:</i>
              <ul>
                <li>
                  <b>Engineering knowledge:</b> Apply the knowledge of
                  mathematics, science, engineering fundamentals, and an
                  engineering specialization to the solution of complex
                  engineering problems.
                </li>
                <li>
                  <b>Problem analysis:</b> Identify, formulate, review research
                  literature, and analyze complex engineering problems reaching
                  substantiated conclusions using first principles of
                  mathematics, natural sciences, and engineering sciences.
                </li>
                <li>
                  <b>Design/development of solutions:</b> Design solutions for
                  complex engineering problems and design system components or
                  processes that meet the specified needs with appropriate
                  consideration for the public health and safety, and the
                  cultural, societal, and environmental considerations.
                </li>
                <li>
                  <b>Conduct investigations of complex problems:</b> Use
                  research-based knowledge and research methods including design
                  of experiments, analysis and interpretation of data, and
                  synthesis of the information to provide valid conclusions.
                </li>
                <li>
                  <b>Modern tool usage:</b> Create, select, and apply
                  appropriate techniques, resources, and modern engineering and
                  IT tools including prediction and modeling to complex
                  engineering activities with an understanding of the
                  limitations.
                </li>
                <li>
                  <b>The engineer and society:</b> Apply reasoning informed by
                  the contextual knowledge to assess societal, health, safety,
                  legal and cultural issues and the consequent responsibilities
                  relevant to the professional engineering practice.
                </li>
                <li>
                  <b>Environment and sustainability:</b> Understand the impact
                  of the professional engineering solutions in societal and
                  environmental contexts, and demonstrate the knowledge of, and
                  need for sustainable development.
                </li>
                <li>
                  <b>Ethics:</b> Apply ethical principles and commit to
                  professional ethics and responsibilities and norms of the
                  engineering practice.
                </li>
                <li>
                  <b>Individual and team work:</b> Function effectively as an
                  individual, and as a member or leader in diverse teams, and in
                  multidisciplinary settings.
                </li>
                <li>
                  <b>Communication:</b> Communicate effectively on complex
                  engineering activities with the engineering community and with
                  society at large, such as, being able to comprehend and write
                  effective reports and design documentation, make effective
                  presentations, and give and receive clear instructions.
                </li>
                <li>
                  <b>Project management and finance:</b> Demonstrate knowledge
                  and understanding of the engineering and management principles
                  and apply these to one’s own work, as a member and leader in a
                  team, to manage projects and in multidisciplinary
                  environments.
                </li>
                <li>
                  <b>Life-long learning:</b> Recognize the need for, and have
                  the preparation and ability to engage in independent and
                  life-long learning in the broadest context of technological
                  change.
                </li>
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
                backgroundColor:"#e1f5fe"
              }}
            >
              <h2 className="aboutUsHeading">PROGRAM SPECIFIC OUTCOMES (PSOs) - BE (CSE)</h2>
              <ul>
                <li>
                  Graduates will have knowledge of programming and designing to
                  develop solutions for engineering problems.
                </li>
                <li>
                  Graduates will be able to demonstrate an understanding of
                  system architecture, information management and networking.
                </li>
                <li>
                  Graduates will possess knowledge of applied areas of computer
                  science and engineering and execute them appropriately.
                </li>
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
                backgroundColor:"#e1f5fe"
              }}
            >
              <h2 className="aboutUsHeading">Program Educational Objectives (PEOs) - M.Tech. (CSE)</h2>
              <ul>
                <li>
                  To provide students with the in depth knowledge in the area of
                  Computer Science and Engineering to enable them to analyze and
                  solve complex engineering problems.
                </li>
                <li>
                  To provide the required knowledge to the students and prepare
                  them to pursue research in the area of Computer Science and
                  Engineering.
                </li>
                <li>
                  To inculcate effective communication, teamwork and leadership
                  skills and demonstrate an ability to relate engineering issues
                  to social context.
                </li>
                <li>
                  To impart professional, ethical and social attitude and
                  demonstrate the ability towards reflective learning needed for
                  a successful career.
                </li>
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
                backgroundColor:"#e1f5fe"
              }}
            >
              <h2 className="aboutUsHeading">Program Outcomes (POs) - M.Tech. (CSE)</h2>
              <ul>
                <li>
                  <b>PO1:</b> An ability to independently carry out research /
                  investigation and development work to solve practical
                  problems.
                </li>
                <li>
                  <b>PO2:</b> An ability to write and present a substantial
                  technical report / document.
                </li>
                <li>
                  <b>PO3:</b> An ability to demonstrate a degree of mastery in
                  the area of Computer Science & Engineering.
                </li>
                <li>
                  <b>PO4:</b> An ability to apply appropriate techniques and
                  modern engineering tools in the design and development of
                  solutions for complex Computer Science & Engineering problems.
                </li>
                <li>
                  <b>PO5:</b> An ability to apply engineering and management
                  principles as a member and leader in a team, to manage
                  projects in a multidisciplinary environment with lifelong
                  learning capabilities.
                </li>
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
                backgroundColor:"#e1f5fe"
              }}
            >
              <h2 className="aboutUsHeading">Programme Specific Outcomes - M.Tech.(CSE)</h2>
              <ul>
                <li>
                  <b>PSO1:</b> Graduates will be able to design efficient
                  algorithms and develop solutions for engineering problems.
                </li>
                <li>
                  <b>PSO2:</b> Graduates will possess knowledge in specialized
                  areas of computer science and Engineering.
                </li>
                <li>
                  <b>PSO3:</b> Graduates will be able to take-up higher
                  education and research and development (R&D).
                </li>
              </ul>
            </Card>
          </Container>
          <Sponsors />
          <CopyRight />
        </div>
      </div>
    );
  }
}

export default AboutUs;
