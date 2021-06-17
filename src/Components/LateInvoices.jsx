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

const LateInvoices = () => {
    const classes = useStyles()
    let lateInvoices = []
    let currentDate = new Date();
    let cDay = currentDate.getDate()

    window.$invoices.map(invoice => {
        console.log(cDay, parseInt(invoice.dateD.substring(8, 10)))
        if(cDay>parseInt(invoice.dateD.substring(8, 10))){
            if(invoice.paid==="No"){
                
                lateInvoices.push(invoice)
            }
        }
    })

    
    const headers = ["Reference Number", "Company Name", "Date Created", "Due Date", "Expenses", "Paid", "Total Cost", "Action"]
    return (
        <Grid xs={12} className={classes.root}>

            <Typography variant="h2" className={classes.header} gutterBottom>
                Late Invoices
            </Typography>
            <Divider style={{marginBottom:40}} gutterBottom/>

            <div xs={12} className={classes.list}>
                <Typography paragraph>

                    <TableComp label="Invoices" invoices={lateInvoices} headers={headers}/>
                </Typography>
            </div>


            
            
        </Grid>
    )
}

export default LateInvoices
