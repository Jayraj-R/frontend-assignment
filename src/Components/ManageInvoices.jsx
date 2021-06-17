import { Typography, Button, Grid,Divider } from '@material-ui/core'
import React , {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddInvoices from './AddInvoices';
import TableComp from './TableComp';

const useStyles = makeStyles({
    root:{
        margin:0,
        padding:0
    },
    header:{
        textAlign:"left"
    },
    list:{
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      background:"white",
      boxShadow: 10,
      padding: "2em",
      width:"60%"
    },
})

const ManageInvoices = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const headers = ["Reference Number", "Company Name", "Date Created", "Due Date", "Expenses", "Paid", "Total Cost", "Action"]
    return (
        <Grid xs={12} className={classes.root}>

            <Typography variant="h2" className={classes.header} gutterBottom>
                Invoice Management
            </Typography>
            <Divider style={{marginBottom:40}} gutterBottom/>
            
            <Grid container justify="left">
                <Button variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<CreateIcon />}
                    onClick={handleOpen}
                    gutterBottom
                >
                    Add invoice
                </Button>
            </Grid>


            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <AddInvoices/>
                </div>
              </Fade>
            </Modal>

            <div xs={12} className={classes.list}>
                <Typography paragraph>

                    <TableComp label="Invoices" invoices={window.$invoices} headers={headers}/>
                </Typography>
            </div>


            
            
        </Grid>
    )
}

export default ManageInvoices
