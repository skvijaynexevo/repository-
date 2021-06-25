import React from 'react'
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-grid-system';
import All from '../website/All.module.css'  

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import TabModels from '../css/TabModel.css'
import EditProfileTab from '../tabs/EditProfileTab' 
import Header from '../header/Header'
import Facebook from '../images/socialicons/facebook.svg'
import Instagram from '../images/socialicons/instagram.svg'
import linkedin from '../images/socialicons/linkedin.svg'
import Pinterest from '../images/socialicons/pinterest.svg'
import Twitter from '../images/socialicons/twitter.svg'
import Youtube from '../images/socialicons/youtube.svg'
import $ from 'jquery'
import ProfileImg from '../ProfileImg/Profile'
import ProfileCoverImg from '../ProfileCoverImg/ProfileCoverImg';
import { useState , useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { userService } from '../_services/user.service';

// $(function() {
//     $('.tabs-nav a').click(function() { 
//       // Check for active
//       $('.tabs-nav li').removeClass('active');
//       $(this).parent().addClass('active');
  
//       // Display active tab
//       let currentTab = $(this).attr('href');
//       $('.tabs-content div.TabsContent').hide();
//       $(currentTab).show(); 
//       return false;
//     });
//   });


export default function ProfileEdit() { 
 
    const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [social, setSocial] = useState([]);
  

  useEffect(() => { 
      userService.User().then(res => {
          setUser(res.data);
          // console.log(res);
        },
          err => {
            console.log(err);
          }
        )
        userService.Profile().then(res => {
          setProfile(res.data);
          // console.log(res);
        },
          err => {
            console.log(err);
          }
        )
        userService.Social().then(res => {
          setSocial(res.data);
          // console.log(res);
        },
          err => {
            console.log(err);
          }
        )
  
    }, []);
    
    return (
        <>
             <Helmet> 
                <title>Profile Edit</title> 
                <meta charSet="utf-8" />
                <meta name="description" content="Nested component" />
            </Helmet>

<Header />
            <section className={All.Profile}>
                <Container className={All.Container}>
                    <Row>
                    <Col md={6} className={`${All.Order_xs_2} ${All.Order_sm_2} ${All.pr_xs_30} ${All.pl_xs_30}  `}>

                        <Box py={1} display="flex">
                            <Box pr={5}><ProfileImg /> </Box> 
                        </Box>

                        <Box py={1}>
                <h2>{user.name}</h2>
              </Box>
              <Box py={1}>
                <h1>{user.profession}</h1>
              </Box>
              <Box py={1}>
                <h4>From {user.location} {user.country}</h4>
              </Box>
              <Box pb={2} pt={2}>
                <label className={All.MuliLight}>{profile.bio}</label>
              </Box>
                             <Box>
                                <span className={All.SocialIcon}>
                                <Link to={social.facebook}><img src={Facebook}  /> </Link>
                                    <img src={Instagram} />
                                    <img src={linkedin} />
                                    <img src={Pinterest} />
                                    <img src={Twitter} />
                                    <img src={Youtube} />
                                </span>
                             </Box>
                        </Col>
                             <Col md={6} className={`${All.Order_xs_1} ${All.Order_sm_1}  ${All.coverImg} ${All.pr_xs_30} ${All.pl_xs_30}`}>
                            <ProfileCoverImg />
                         </Col>
                    </Row>
                </Container>
            </section>


            <section>
                <Container>
                    <Row>
                        <Col> 
                            <EditProfileTab />
                        </Col>
                    </Row>
                </Container>
            </section>
 

        </>
    )
}
