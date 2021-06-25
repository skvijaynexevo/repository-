import React, { useState, Component, useEffect , useCallback } from 'react';
import {Helmet} from "react-helmet";   
import Filter from '../filter/Filter'
import Header from '../header/Header'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link , useHistory} from 'react-router-dom';
import All from '../../components/website/All.module.css'
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import WorkIcon from '@material-ui/icons/Work';
import SearchIcon from '@material-ui/icons/Search';
import BackupIcon from '@material-ui/icons/Backup';
import axios from 'axios'
import '../Navbar.css'
import { userService } from '../_services/user.service';


const actions = [
    { icon: <BackupIcon />, name: 'upload',  url:'./uploadfile'}, 
  ];

  const useStyless = makeStyles((theme) => ({
    root: {
      transform: 'translateZ(0px)',
      flexGrow: 1,
    },
    speedDials:{
        '&.MuiFab-primary': {
            background: 'transparent linear-gradient(10deg , #00E7FC 0%, #4FFEA3 100%) 0% 0% no-repeat padding-box !important',
        } ,
    },
    exampleWrapper: {
      position: 'relative',
      marginTop: theme.spacing(3), 
    },
    radioGroup: {
      margin: theme.spacing(1, 0),
    },  
    MuiFabPrimary:{
        background: 'transparent linear-gradient(10deg , #00E7FC 0%, #4FFEA3 100%) 0% 0% no-repeat padding-box !important',
    },

    speedDial: {
      position: 'absolute',
      '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom:'10%',
        right:'5%',
        position:'fixed',
        zIndex: '1200',  
        '&.MuiFab-primary': {
            background: 'transparent linear-gradient(10deg , #00E7FC 0%, #4FFEA3 100%) 0% 0% no-repeat padding-box !important',
        } ,
      }, 
 
      '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
      },
    },
  }));



 const Home = (props) => {       
    const classess = useStyless(); 
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const [open, setOpen] = React.useState(false);  
    const handleClose = () => {
      setOpen(false);
    }; 
    const handleOpen = () => {
      setOpen(true);
    };

    const history = useHistory();
 
    const [user, Setuser] = useState([]);
    useEffect(() => { 
        const config = {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
          }
        }
        userService.User().then(res => {
            Setuser(res.data);  
          },
            err => {
              console.log(err); 
            }
          )   

    }, []);
 

      function routeChange(name) { 
        history.push(`${name}`);
      }

    return (
        <>
               <Helmet> 
                <title>Home</title> 
                <meta charSet="utf-8" />
                <meta name="description" content="Nested component" />
            </Helmet>    
            <Header />
            <Filter  id={user.id} />
            {user.role_id == '1' && 
            <div className={All.mobileBottomMenu}>
            <SpeedDial
              ariaLabel="SpeedDial example"
              className={`${classess.speedDial} ${classess.speedDials} test`}
              icon={<SpeedDialIcon />}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open} 
            >
          {actions.map((action) => (  
                <SpeedDialAction 
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name} 
                    onClick={() => routeChange(action.url)}
            />  
          ))}
        </SpeedDial>
        </div>
         }
        </>
    )
}
export default Home

