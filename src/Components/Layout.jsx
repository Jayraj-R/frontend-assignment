import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Navigation from './Navigation'

const theme = createMuiTheme({
    palette:{
        primary:{
            main:'#3d8f79'
        },
        secondary:{
            main:"#fff"
        },
        error:{
            main:"#414756"
        }
    },
    typography: {
        fontFamily: ['"Montserrat"', 'Open Sans'].join(',')
    }
})

window.$customers = [
    {
        compName: "JR Ltd.",
        contFname: "Jayraj",
        contLname: "Rathod",
        emailAdd: "jayrahod5@gmail.com",
        contNum: "1234567890",
        addr: "Abc,defgh,ijk",
        town: "xyz",
        post: "123456"
    }]

    window.$invoiceItems = [
        {
            item: "Work Expenses",
            rate: 150,
            timeSpent: 2,
        },
        {
            item: "Labour",
            rate: 350,
            timeSpent: 6,
        }
    ]
    window.$invoiceItems[0].total=(window.$invoiceItems[0].rate*window.$invoiceItems[0].timeSpent)
    window.$invoiceItems[1].total=(window.$invoiceItems[1].rate*window.$invoiceItems[1].timeSpent)

    window.$invoices = [
        {   
            ref : "101",
            dateC : "Sat Jun 19 2021",
            dateD : "Sat Jun 29 2021",
            paid : "Yes",
            link : "",
            comp: window.$customers[0].compName,
            invoiceItems : [window.$invoiceItems[0].item, window.$invoiceItems[1].item],
            cost : (window.$invoiceItems[0].total + window.$invoiceItems[1].total ),
            qty: [window.$invoiceItems[0].timeSpent, window.$invoiceItems[1].timeSpent ],
            price : [window.$invoiceItems[0].rate, window.$invoiceItems[1].rate]
        }
    ]


const Layout = () => {
    return (
        <ThemeProvider theme={theme}>

            {/* NAVIGATION */}
            <Navigation/>

        </ThemeProvider>
    )
}

export default Layout
