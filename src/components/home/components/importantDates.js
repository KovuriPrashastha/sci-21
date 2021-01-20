import React, { Component } from 'react';
import { Table,
    TableBody,
    TableCell,
    Paper,
    TableRow,
    TableContainer, } from "@material-ui/core";
import { withStyles} from '@material-ui/core/styles';

class ImportantDates extends Component {
    render() {
        const tableContents=[
            {
                content: "Paper submission Last Date",
                date:"12th June, 2021"
            },
            {
                content: "Notification of Acceptance",
                date:"19th June, 2021"
            },
            {
                content: "Registration Fee Payment",
                date: "26th June, 2021"
            }
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
            <div className="homeImportantDates" style={{backgroundColor:"#007984",paddingTop:"2%",paddingBottom:"2%",marginBottom:"0px",
            color:"#fff"}}>
                <h1 className="aboutUsHeading">Important Dates</h1>
                <div className="importantTable">
                    <TableContainer component={Paper} style={{marginBottom:"20px"}}>
                        <Table className="table" aria-label="simple table">
                        <TableBody>
                            {tableContents.map((row) => (
                            <StyledTableRow key={row.content}>
                                <StyledTableCell align="left">{row.content}</StyledTableCell>
                                <StyledTableCell align="left">{row.date}</StyledTableCell>
                            </StyledTableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <h2>Venue: QEEE HALL , Vasavi College of Engineering(Autonomous), Hyderabad, Telangana, India</h2>
            </div>
        );
    }
}

export default ImportantDates;