import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  // Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
  Clock as ClockIcon,
} from 'react-feather';
import NavItem from './NavItem';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import './index.css';

const user = {
  avatar: 'data:image/jpeg;base64,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',
  jobTitle: 'Product Developer',
  name: 'Abbishek Kumar'
};

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/customers',
    icon: UsersIcon,
    title: 'Employees'
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Previous Reports'
  },
  // {
  //   href: '/app/products',
  //   icon: ShoppingBagIcon,
  //   title: 'Previous Reports'
  // },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/login',
    icon: ClockIcon,
    title: 'Pending Reports'
  },
  {
    href: '/register',
    icon: UserPlusIcon,
    title: 'Register'
  },
  {
    href: '/404',
    icon: AlertCircleIcon,
    title: 'Error'
  }
];


const NavBar = ({ onMobileClose, openMobile }) => {
  const [width, setWidth] = useState(156);
  const [noIcon, setnoIcon] = useState("");
  const useStyles = makeStyles(() => ({
    mobileDrawer: {
      width: 256,
    },
    desktopDrawer: {
      width: width,
      top: 76,
      height: 'calc(100% - 64px)'
    },
    avatar: {
      cursor: 'pointer',
      width: 64,
      height: 64,
      boxShadow: '3px 3px 6px #b8b9be, -3px -3px 6px #fff ',
      marginBottom: '8px',
    }
  }));
  const classes = useStyles();
  const location = useLocation();


  function expandOut() {
    setWidth(256);
    setnoIcon("")
    console.log(width)
  }
  function expandIn() {
    setWidth(106);
    setnoIcon("icon__less")
    console.log(width)
  }

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (

    <Box
      onMouseOver={expandOut}
      onMouseOut={expandIn}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/app/account"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              className={noIcon}
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
      <Box
        p={2}
        m={2}
        bgcolor="background.dark"
      >
        {/* <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          Need more?
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          Upgrade to PRO version and access 20 more screens
        </Typography> */}
        {/* <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          <Button
            color="primary"
            component="a"
            href="https://react-material-kit.devias.io"
            variant="contained"
          >
            See PRO version
          </Button>
        </Box> */}
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default NavBar;
