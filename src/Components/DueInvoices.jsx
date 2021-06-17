import { Typography, Grid,Divider } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TableComp from './TableComp';

const useStyles = makeStyles({
    root:{
        margin:0,
        padding:0
    },
    header:{
        textAlign:"left"
    },
})

const DueInvoices = () => {
    const classes = useStyles()
    let dueInvoices = []
    let currentDate = new Date();
    let cDay = currentDate.getDate()


    window.$invoices.map(invoice => {
        if(invoice.paid==="No"){
            if(cDay<parseInt(invoice.dateD.substring(8, 10))){
                dueInvoices.push(invoice)
            }
        }
    })
    
    const headers = ["Reference Number", "Company Name", "Date Created", "Due Date", "Expenses", "Paid", "Total Cost", "Action"]
    return (
        <Grid xs={12} className={classes.root}>

            <Typography variant="h2" className={classes.header} gutterBottom>
                Due Invoices
            </Typography>
            <Divider style={{marginBottom:40}} gutterBottom/>

            <div xs={12} className={classes.list}>
                <Typography paragraph>

                    <TableComp label="Invoices" invoices={dueInvoices} headers={headers}/>
                </Typography>
            </div>


            
            
        </Grid>
    )
}

export default DueInvoices
