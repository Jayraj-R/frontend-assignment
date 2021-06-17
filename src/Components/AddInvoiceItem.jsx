import React, { useState } from 'react'
import { Button, Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles({
    root:{
        position:"relative",
        left:"50%",
        transform:"translateX(-50%)",
        padding:"2em 4em"
    },
    header:{
        textAlign:"left"
    },
    button:{
        position:"relative",
        left:"50%"
    },
})

const AddInvoiceItems = () => {
    const classes = useStyles()

    let object = {
            item: "",
            rate: 0,
            timeSpent:2,
            total:0
    }
    
    const [invoice, setInvoice] =  useState(object)

    const handleChange = (e,label) => {
        if(label==="item")  object.item = e.target.value
        if(label==="rate")  object.rate = e.target.value
        if(label==="timeSpent")  object.timeSpent = e.target.value
    }

    const [isDone,setIsDone] = useState(false)

    const addInvoice = () => {

        if(object.item!==""){
            setIsDone(true)
            setTimeout(function() {
                setIsDone(false)
            }, 2000);


            object.total = parseInt(object.rate)*parseInt(object.timeSpent)
            setInvoice(object)
            window.$invoiceItems.push(invoice)
        }
    }

    return (
        <Grid>
            <form  autoComplete="off">
                <Grid xs={10} className={classes.root} container justify="center" gutterBottom>
                    
                    <Button onClick={addInvoice} color={isDone ? ("success") : ("primary")} variant="contained" className={classes.button}>
                        {
                            isDone ? (<DoneIcon/>) : (<AddIcon/>)
                        }
                    </Button>
                    <Grid xs={12} container justify="space-between">
                        <TextField id="standard-basic" type="text" label="Invoice Item" onChange={e => {handleChange(e,"item")}}/>
                        <TextField id="standard-basic" type="text" label="Rate (Rs/hr)"  onChange={e => {handleChange(e,"rate")}}/>
                        <TextField id="standard-basic" type="text" label="Whoops" style={{visibility:"hidden"}} />
                    </Grid>
                    <Grid xs={12} container justify="space-between" >
                        <TextField id="standard-basic" type="email" label="Working Hours"  onChange={e => {handleChange(e,"timeSpent")}}/>
                        <TextField id="standard-basic" label="Contact Number" style={{visibility:"hidden"}} />
                        <TextField id="standard-basic" label="Contact Number" style={{visibility:"hidden"}} />
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}

export default AddInvoiceItems
