import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {InputLabel, MenuItem, FormControl, Select, Button , Grid, TextField, Checkbox, FormControlLabel   } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
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
    
  }));

  
const AddInvoices = () => {
    const classes = useStyles();

    let object = {
        ref : "",
        dateC : "",
        dateD : "",
        paid : "No",
        link : "",
        comp: "",
        invoiceItems : [],
        cost : 0,
    }
    
    const [invoice, setInvoice] =  useState(object)

    const handleChange = (e,label) => {
        if(label==="comp")  {
            object.comp = e.target.value
        }
        if(label==="item")  {
            object.invoiceItems.push(e.target.value)
        }
        if(label==="cDate")  {const str = `${e}`; object.dateC = str.substr(0,15)}
        if(label==="dDate")  {const str = `${e}`; object.dateD = str.substr(0,15)}

        if(label==="paid")  {
            if(e.target.checked===true) object.paid="Yes"
            if(e.target.checked===false) object.paid="No"
        }
    }    

    const costCalc = (a,b) => {
        let cost = 0;

        for(let i=0;i<a.length;i++){
            b.map(item => {
                if(item.item===a[i]){
                    cost+=(parseInt(item.total))
                }
            })
        }
        return(cost)
    }
    const qtyCalc = (a,b) => {
        const qty = [];
        for(let i=0;i<a.length;i++){
            b.map(item => {
                if(item.item===a[i]){
                    qty.push(parseInt(item.timeSpent))
                }
            })
        }

        return (qty)

    }
    const priceCalc = (a,b) => {
        const price = [];
        for(let i=0;i<a.length;i++){
            b.map(item => {
                if(item.item===a[i]){
                    price.push(parseInt(item.rate))
                }
            })
        }

        return (price)

    }

    const [isDone,setIsDone] = useState(false)

    const addInvoice = () => {

        if(object.comp!==""){
            setIsDone(true)
            setTimeout(function() {
                setIsDone(false)
            }, 2000);

            object.ref = 100+parseInt(window.$invoices.length)+1

            object.cost = costCalc(object.invoiceItems,window.$invoiceItems)
            object.qty = qtyCalc(object.invoiceItems,window.$invoiceItems)
            object.price = priceCalc(object.invoiceItems,window.$invoiceItems)
            
            // object.total = parseInt(object.rate)*parseInt(object.timeSpent)
            setInvoice(object)
            window.$invoices.push(invoice)
        }
    }
    


    return (
        <div>
            <form  autoComplete="off">
                <Grid xs={10} className={classes.root} container justify="center" gutterBottom>
                    
                    <Button onClick={addInvoice} color={isDone ? ("success") : ("primary")} variant="contained" className={classes.button}>
                            {
                                isDone ? (<DoneIcon/>) : (<AddIcon/>)
                            }
                    </Button>
                    <Grid xs={12} container justify="space-between" >
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Company</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value=""
                            onChange={e => {handleChange(e,"comp")}}
                            >
                                {
                                    window.$customers.map(customer => {
                                    return(
                                        <MenuItem value={customer.compName}>{customer.compName}</MenuItem>
                                    )
                                    })
                                }
                            </Select>
                        </FormControl>
                        <FormControl  className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Invoice Items</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value=""
                            onChange={e => {handleChange(e,"item")}}
                            >
                                {
                                    window.$invoiceItems.map(invoice => {
                                    return(
                                        <MenuItem value={invoice.item}>{invoice.item}</MenuItem>
                                    )
                                    })
                                }
                            </Select>
                        </FormControl>
                        <TextField id="standard-basic" type="text" label="Whoops" style={{visibility:"hidden"}} />
                    </Grid>

                    <Grid xs={12} container justify="space-between" >
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Creation Date"
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                value=""
                                onChange={e => {handleChange(e,"cDate")}}
                                />
                        </MuiPickersUtilsProvider>

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Due Date"
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                value=""
                                onChange={e => {handleChange(e,"dDate")}}
                                />
                        </MuiPickersUtilsProvider>
                    </Grid>

                    <Grid xs={12} container justify="space-between" >
                    <FormControlLabel
                        control={<Checkbox color="primary"  onChange={e => {handleChange(e,"paid")}} name="Paid" />}
                        label="Paid"
                    />
                    </Grid>
                </Grid>
            </form>

        </div>
    )
}

export default AddInvoices
