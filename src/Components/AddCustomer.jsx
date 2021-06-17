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

const AddCustomer = () => {
    const classes = useStyles()

    let object = {
        compName: "",
        contFname: "",
        contLname: "",
        emailAdd: "",
        contNum: "",
        addr: "",
        town: "",
        post: ""
    }
    
    const [customer, setCustomer] =  useState(object)

    const handleChange = (e,label) => {
        

        if(label==="compName")  object.compName = e.target.value
        if(label==="contFname")  object.contFname = e.target.value
        if(label==="contLname")  object.contLname = e.target.value
        if(label==="emailAdd")  object.emailAdd = e.target.value
        if(label==="contNum")  object.contNum = e.target.value
        if(label==="addr")  object.addr = e.target.value
        if(label==="town")  object.town = e.target.value
        if(label==="post")  object.post = e.target.value

    }

    const [isDone,setIsDone] = useState(false)

    const addCustomer = () => {

        if(object.compName!==""){
            setIsDone(true)
            setTimeout(function() {
                setIsDone(false)
            }, 2000);


            setCustomer(object)
            window.$customers.push(customer)
        }
    }

    return (
        <Grid>
            <form  autoComplete="off">
                <Grid xs={10} className={classes.root} container justify="center" gutterBottom>
                    
                    <Button onClick={addCustomer} color={isDone ? ("success") : ("primary")} variant="contained" className={classes.button}>
                        {
                            isDone ? (<DoneIcon/>) : (<AddIcon/>)
                        }
                    </Button>
                    <Grid xs={12} container justify="space-between">
                        <TextField id="standard-basic" type="text" label="Company Name" onChange={e => {handleChange(e,"compName")}}/>
                        <TextField id="standard-basic" label="Contact Number" style={{visibility:"hidden"}} />
                        <TextField id="standard-basic" type="text" label="Contact Person First Name"  onChange={e => {handleChange(e,"contFname")}}/>
                        <TextField id="standard-basic" type="text" label="Contact Person Last Name"  onChange={e => {handleChange(e,"contLname")}}/>
                    </Grid>
                    <Grid xs={12} container justify="space-between" >
                        <TextField id="standard-basic" type="email" label="Email Address"  onChange={e => {handleChange(e,"emailAdd")}}/>
                        <TextField id="standard-basic" label="Contact Number"  onChange={e => {handleChange(e,"contNum")}}/>
                        <TextField id="standard-basic" label="Contact Number" style={{visibility:"hidden"}} />
                    </Grid>
                    <Grid xs={12} container justify="space-between">
                        <TextField id="standard-basic" label="Address" multiline  onChange={e => {handleChange(e,"addr")}}/>
                        <TextField id="standard-basic" label="Town/City"  onChange={e => {handleChange(e,"town")}}/>
                        <TextField id="standard-basic" label="Post Code"  onChange={e => {handleChange(e,"post")}}/>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}

export default AddCustomer
