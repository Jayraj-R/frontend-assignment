import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody,TableCell,TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import DisplayInvoice from './DisplayInvoice';

const useStyles = makeStyles({
  table: {
    top:"5em",
    position:"relative",
    left:"50%",
    width:"75%",
    transform:"translateX(-50%)",
  },
  headers:{
    background:"#7a7294"
  },
  cell:{
    fontSize:"1.1em",
    color:"white"
  }
});


export default function TableComp(props) {
  const classes = useStyles();

  const tableContent = () => {
    if(props.label==="Customers"){
      return (
        props.customers.map(customer => {
          return(
            <TableRow key={customer.compName}>
              <TableCell align="right" component="th" scope="row">
                {customer.compName}
              </TableCell>
              <TableCell align="right">{customer.contFname} {customer.contLname}</TableCell>
              <TableCell align="right">{customer.emailAdd}</TableCell>
              <TableCell align="right">{customer.contNum}</TableCell>
              <TableCell align="right">{customer.addr},{customer.town}-{customer.post}</TableCell>
            </TableRow>
          )
        })
        )
    }
    
    if(props.label==="invoiceItems"){
      return (
        props.items.map(item => {
          return(
            <TableRow key={item.item}>
              <TableCell align="right" component="th" scope="row">
                {item.item}
              </TableCell>
              <TableCell align="right">{item.rate}</TableCell>
              <TableCell align="right">{item.timeSpent}</TableCell>
              <TableCell align="right">{item.total}</TableCell>
            </TableRow>
          )
        })
      )
    }

    if(props.label==="Invoices"){
      return (
        props.invoices.map(invoice => {
          return(
            <TableRow key={invoice.ref}>
              <TableCell align="right" component="th" scope="row">
                {invoice.ref}
              </TableCell>
              <TableCell align="right">{invoice.comp}</TableCell>
              <TableCell align="right">{invoice.dateC}</TableCell>
              <TableCell align="right">{invoice.dateD}</TableCell>
              <TableCell align="right">
                {
                  invoice.invoiceItems.map(item => {
                    return (
                        <>{item} </>
                      )
                  })
                }
              </TableCell>
              <TableCell align="right">{invoice.paid}</TableCell>
              <TableCell align="right">{invoice.cost}</TableCell>
              <TableCell align="right">
                <DisplayInvoice invoice={invoice}/>  
              </TableCell>
            </TableRow>
          )
        })
      )
    }
      
    }
  
  return (
      <TableContainer component={Paper} className={classes.table}>
        <Table  size="small" aria-label="a dense table">
          <TableHead>

            <TableRow className={classes.headers}>
              {
                  props.headers.map(header => {
                    return(
                        <TableCell className={classes.cell} align="right">{header}</TableCell>
                    )
                  })
                }
              </TableRow>
          </TableHead>
          <TableBody>
            {
              tableContent()
            }

          </TableBody>
        </Table>
      </TableContainer>
  );
}
