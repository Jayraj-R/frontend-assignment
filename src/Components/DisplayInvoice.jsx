import { Typography, Button, Grid } from '@material-ui/core'
import React , {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import logo from '../media/logo192.png'
import GetAppIcon from '@material-ui/icons/GetApp';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
    modal: {
      overflow:"scroll",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position:"relative",
    },
    paper: {
      background:"white",
      boxShadow: 10,
      padding: "2em",
      width:"60%",
      position:"relative",
    },
    iconSection:{
        width:"100%",
        display:"flex",
        justifyContent:"flex-end"
    },
    icons:{
        fontSize:"3em",
    },
    imgSection:{
        marginBottom:"3em"
    },
    img:{
        width:150,
    },
    heading:{
        textAlign:"right"
    },
    headers:{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        fontSize:"4em"
    },
    itemList:{
        margin:"2em 0em"
    },
    content:{
        display:"flex",
        alignItems:"center",
        marginLeft:"40px"
    },
    items:{
        position:"relative",
        left:"2em"
    },
    qty:{
        position:"relative",
        left:"17%"
    },
    price:{
        position:"relative",
        left:"39.5%"
    },
    totalPrice:{
        position:"relative",
        left:"61%"
    },
    divider1:{
        position:"absolute",
        width:"90%",
        top:"46%",
        left:"5%"
    },
    divider2:{
        position:"absolute",
        width:"90%",
        top:"56%",
        left:"5%"
    },
    grandTotal:{
        width:"100%",
        textAlign:"right",
        position:"absolute",
        top:"60%",
        left:"-12%"
    },
    notes:{
        marginTop:"6em",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",

    },
    thanks:{
        textAlign:"right"
    }
})

const DisplayInvoice = (props) => {
    const invoice = props.invoice
    const classes = useStyles()
    const [open, setOpen] = useState(false);

    let totalPrice = []
    let grandTotal = 0
    for(let i=0;i<invoice.price.length;i++){
        grandTotal += (invoice.price[i]*invoice.qty[i])
        totalPrice.push(invoice.price[i]*invoice.qty[i])
    }

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div>
            <Grid container justify="left">
                <Button
                    color="primary"
                    className={classes.button}
                    onClick={handleOpen}
                    gutterBottom
                >
                    <VisibilityIcon />
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

                    <section className={classes.iconSection}>
                        <Button>
                            <GetAppIcon className={classes.icons} color="primary"/>
                        </Button>
                        <Button>
                            <MailIcon  className={classes.icons} color="primary"/>
                        </Button>
                    </section>


                    <Grid className={classes.imgSection} container justify="space-between" alignItems="center" gutterBottom>
                        <img className={classes.img} alt="LOGO" src={logo}/>
                        <div className={classes.heading}>
                            <Typography variant="h2" style={{fontSize:"5em"}}>Invoice</Typography>
                            <Typography variant="h4">- {invoice.comp}</Typography>
                            <Typography variant="subtitle2">XGFD{invoice.ref}</Typography>
                        </div>
                    </Grid>

                    <section className={classes.itemList}>
                        <div className={classes.headers}>
                            <Typography variant="h5"><strong>Item</strong></Typography>
                            <Typography variant="h5"><strong>Quantity</strong></Typography>
                            <Typography variant="h5"><strong>Price</strong></Typography>
                            <Typography variant="h5"><strong>Total Cost</strong></Typography>
                        </div>

                        <div className={classes.content}>
                            <div className={classes.items}>
                                {
                                    invoice.invoiceItems.map(item => {
                                        return (
                                            <div>
                                                <Typography variant="h6">{item}</Typography>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            
                            <hr className={classes.divider1}/>

                            <div className={classes.qty}>
                                {
                                    invoice.qty.map(item => {
                                        return (
                                            <div>
                                                <Typography variant="subtitle1">{item}</Typography>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className={classes.price}>
                                {
                                    invoice.price.map(item => {
                                        return (
                                            <div>
                                                <Typography variant="subtitle1">{item}</Typography>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className={classes.totalPrice}>
                                {
                                    totalPrice.map(item => {
                                        return (
                                            <div>
                                                <Typography variant="subtitle1">{item}</Typography>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <hr className={classes.divider2}/>

                            <div className={classes.grandTotal}>
                                <Typography variant="h5">
                                    GRAND TOTAL : {grandTotal}    
                                </Typography>
                            </div>
                            
                        </div>

                        
                    </section>
                    
                    <section className={classes.notes}>
                        <Grid xs={4} className={classes.fromAddress}>
                            
                            <Typography variant="subtitle2" style={{lineHeight:"1.4em"}}>
                                <strong style={{fontSize:"1.3em"}}>Address </strong>
                                <div>Lorem idivsum dolor,  </div>
                                <div>adidivisicing elit,</div>
                                <div>Veritatis, corrudivti.</div>
                            </Typography>

                            <Typography variant="subtitle2" style={{marginTop:"1em", lineHeight:"1.4em"}}>
                                <strong  style={{fontSize:"1.3em"}}>Bank Details </strong>
                                <div>Jayraj Rathod</div>
                                <div>National Bank of India</div>
                                <div>Acct. No. 123-1234-1234-12</div>
                            </Typography>
                        </Grid>
                        <Grid xs={4} className={classes.thanks}>
                            <Typography variant="h2">
                                Thank You
                            </Typography>
                            <hr width="70%" align="right"/>
                        </Grid>
                    </section>
                </div>
              </Fade>
            </Modal>
        </div>
    )
}

export default DisplayInvoice
