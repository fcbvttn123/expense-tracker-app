import { Link, Outlet } from "react-router-dom"
import { useState } from "react"
import { useStyles } from "./mui-style"

import CssBaseline from "@material-ui/core/CssBaseline"
import MenuIcon from "@material-ui/icons/Menu"
import HomeIcon from "@material-ui/icons/Home"
import AddIcon from "@material-ui/icons/Add"
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn"
import CreateIcon from "@material-ui/icons/Create"
import {
  AppBar,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core"

const links = [
  { title: "Home", icon: <HomeIcon />, path: "/" },
  { title: "Budgets", icon: <MonetizationOnIcon />, path: "/budget" },
  { title: "Create Transaction", icon: <AddIcon />, path: "/create" },
  { title: "Create Budget", icon: <CreateIcon />, path: "/createBudget" },
]

export function Layout({ window }) {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const container =
    window !== undefined ? () => window().document.body : undefined

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {links.map((e) => (
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

  return (
    <div className="flex">
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
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
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={() => setMobileOpen(!mobileOpen)}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <Outlet />
    </div>
  )
}
