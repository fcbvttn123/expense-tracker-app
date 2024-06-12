import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import { AppBar, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, makeStyles, useTheme } from "@material-ui/core";

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

export function Layout({window}) {
    
    const classes = useStyles()
    const theme = useTheme()
    const [mobileOpen, setMobileOpen] = useState(false)

    const container = window !== undefined ? () => window().document.body : undefined

    const links = [
        { title: "Home", icon: <HomeIcon />, path: "/" },
        { title: "Create Transaction", icon: <AddIcon />, path: "/create" }
    ]

    const drawer = (
        <div>
            <div className={classes.toolbar} />
                <Divider />
                <List>
                    {links.map(e => (
                        <Link to={e.path} key={e.title}>
                            <ListItem button>
                                <ListItemIcon>{e.icon}</ListItemIcon>
                                <ListItemText primary={e.title} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
        </div>
    )

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }
    
    return (
        <div className="flex">
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap> 
                        Expense Tracker
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{ paper: classes.drawerPaper }}
                        ModalProps={{ keepMounted: true }}
                    >
                        {drawer}        
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <Outlet />
        </div>
    )
    
}