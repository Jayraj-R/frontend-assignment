import { Typography, Button, Grid,Divider } from '@material-ui/core'
import React , {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import AddInvoiceItem from './AddInvoiceItem';
import TableComp from './TableComp';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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

const InvoiceItems = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    const headers = ["Invoice Item","Rate (Rs/hr)", "Working hours", "Total Cost"]

    return (
        <Grid xs={12} className={classes.root}>

            <Typography variant="h2" className={classes.header} gutterBottom>
                Invoice Items
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
                    Add invoice item
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
                  <AddInvoiceItem/>
                </div>
              </Fade>
            </Modal>


            <div xs={12} className={classes.list}>
                <Typography paragraph>
                    <TableComp label="invoiceItems" items={window.$invoiceItems} headers={headers}/>
                </Typography>
            </div>



            
            
        </Grid>
    )
}

export default InvoiceItems
