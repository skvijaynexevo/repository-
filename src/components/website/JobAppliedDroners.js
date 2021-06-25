import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Box from '@material-ui/core/Box';
import All from '../website/All.module.css'
import utv from '../images/utv.png'
import Button from '@material-ui/core/Button';
import { Container, Row, Col } from 'react-grid-system';
import Divider from '@material-ui/core/Divider';
import axios from 'axios' 
import swal from 'sweetalert';  
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link , useParams } from 'react-router-dom';
import Header from '../header/Header'
import {Helmet} from "react-helmet";
import Facebook from '../images/socialicons/facebook.svg'
import Instagram from '../images/socialicons/instagram.svg'
import linkedin from '../images/socialicons/linkedin.svg'
import Pinterest from '../images/socialicons/pinterest.svg'
import Twitter from '../images/socialicons/twitter.svg'
import Youtube from '../images/socialicons/youtube.svg'  
import CoverImg from '../ProfileCoverImg/ProfileCoverImg'
import ProfileImg from '../ProfileImg/Profile'
import nofoundresult from '../images/noresultfound.svg'
import DroneImg from '../images/drone-img.svg' 

const API_URL = 'http://localhost:1080/auth-app/public/api/auth';

export default class JobAppliedDroners extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
        applieddroners: [], 
        visible: 10,
      };

      this.loadMore = this.loadMore.bind(this);
    }
 
    loadMore() {
      this.setState((prev) => {
        return {visible: prev.visible + 8};
      });
    }

    componentDidMount() {
        const id = this.props.match.params.id; 
        
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('access_token')
            }
        }
        const url = `${API_URL}/jobapplieddroners/${id}`;
        axios.get(url, config).then(res => res.data)
            .then((data) => {
                this.setState({ applieddroners: data }) 
            }) 
    }


    render() {  

    return (
        <>
        <Helmet> 
        <title>Profile</title> 
        <meta charSet="utf-8" />
        <meta name="description" content="Nested component" />
    </Helmet>

        <Header /> 
 
        <section>
              <Container className={All.Container}>
                <Row>
                    <Col className={`${All.p_xs_0} ${All.p_md_0} ${All.p_sm_0}`}>
                    <Box className={`${All.padding_30} ${All.padding_30} ${All.padding_30} ${All.Text_center}`}>
                     <h2>Job Applied List</h2>
                   </Box>
                    <Box pb={4} className={`${All.p_xs_0} ${All.p_md_0} ${All.p_sm_0}`}>
                      <Divider />
                   </Box>
                    <Box className={All.Myjobslistdesktop} textAlign={'Left'}> 
                    {this.state.applieddroners.length>0 ? 
                    <table>
                                <thead>
                                    <tr>
                                        <th><h5 className={`${All.Bold} ${All.Applieddronerslist}`}>Droner Profile</h5></th>
                                        <th><h5 className={`${All.Bold} ${All.Applieddronerslist}`}>Job Title</h5></th>
                                        <th><h5 className={`${All.Bold} ${All.Applieddronerslist}`}>Applied on</h5></th>
                                        <th><h5 className={`${All.Bold} ${All.Applieddronerslist}`}>Action</h5></th>
                                    </tr>
                                </thead> 
                            { this.state.applieddroners.slice(0, this.state.visible).map(user => ( 
                                <> 
                                <tbody>
                                    <tr>
                                        <td data-column="Company Profile">
                                            <li className={All.MyJobList}>
                                                <figure className={`${All.Avatar} ${All.AvatarStateSuccess}`}>
                                                    <img className={`${All.height_auto_xs} ${All.height_auto_sm} alignleft`} src={user.profile} 
                                                        alt="Image Sample 1" style={{
                                                            display: "inline",
                                                            float: "left",
                                                            width: "100px",
                                                            marginRight: '15px',
                                                            height: '100px',
                                                            borderRadius: '100px'
                                                        }} />
                                                </figure>
                                                <div className={All.UsersListBody}>
                                                    <div>
                                                        <h5 className={All.Bold}>{user.name}</h5>
                                                        <label>{user.username}</label>
                                                    </div>
                                                </div>
                                            </li>
                                        </td>
                                        <td data-column="Job Title"> <li className={All.MyJobList}><label>{user.jobtitle}</label></li></td>
                                        <td data-column="Post on"><li className={All.MyJobList}><label>{user.applied}</label></li></td>
                                        <td data-column="Action">
                                        <li  className={`${All.MyJobList} ${All.JobsList}`}>
                                          <Link  to={`/ProfileSingle/${user.user_id}`}> 
                                            <Button mr={2} variant="contained" color="default" type="submit" className={All.BtnStyle_5}>
                                               View Profile</Button>
                                               </Link>
                                                </li>
                                        </td>
                                    </tr> 
                                </tbody>  
                                            </>
                                        ))}  
                                 </table> 
                                  :  
                                  <div style={{margin: '0px auto',display: 'block'}}>
                                  <Box className={All.Text_center} pt={5}>
                                  <img src={nofoundresult}  className={`${All.W_xs_100} ${All.W_sm_100}`}/>
                                  <Box className={`${All.Text_center}`} px={5} pb={2}>
                                    <h2>No Results Found</h2> 
                                  </Box>
                                    <Box className={`${All.Text_center}`} pb={5}> 
                                    <label>It seems we can’t find any results based on your search. </label>
                                  </Box>
                                  </Box>
                                  </div> 
                                  }  
                        </Box> 

                        <Box className={All.Myjobslistmobile}> 
                                {this.state.applieddroners.length>0 ? this.state.applieddroners.slice(0, this.state.visible).map((item, index) => {

                                            return (
                                                <>
                                            <Box >  
                                            <li className={All.MyJobList}> 
                                                                        <figure className={`${All.Avatar} ${All.AvatarStateSuccess}`}>
                                                                        <img className={`${All.height_auto_xs} ${All.height_auto_sm} alignleft`} src={item.profile} 
                                                                                alt="Image Sample 1" style={{
                                                                                    display: "inline",
                                                                                    float: "left",
                                                                                    width: "100px",
                                                                                    borderRadius: "100px",
                                                                                    height: "100px",
                                                                                    marginRight: '15px'
                                                                                }} />
                                                                        </figure>
                                                                        <div className={All.UsersListBody}>
                                                                            <div>  
                                                                                <label className={`${All.Bold} ${All.padding_5}`}>{item.name}</label>
                                                                                <span className={` ${All.padding_5}`}>{item.username}</span>
                                                                                <label className={`${All.Bold} ${All.padding_5}`}>Job Title : <sapn className={All.MuliLight}>{item.jobtitle}</sapn></label>
                                                                                <label className={`${All.Bold} ${All.padding_5}`}>Applied on : <sapn className={All.MuliLight}> {item.applied}</sapn></label>
                                                                                <Box py={2}  display="flex">
                                                                                <Link  to={`/ProfileSingle/${item.user_id}`}> 
                                                                                <Button mr={2} variant="contained" color="default" type="submit" className={All.BtnStyle_5}>
                                                                                    View Profile</Button>
                                                                                    </Link> 
                                                                                </Box>
                                                                            </div>
                                                                        </div> 
                                                                    </li>
                                            </Box>                                    
                                    </>
                                             )}):
                                             <div style={{margin: '0px auto',display: 'block'}}>
                                             <Box className={All.Text_center} pt={5}>
                                             <img src={nofoundresult}  className={`${All.W_xs_100} ${All.W_sm_100}`}/>
                                             <Box className={`${All.Text_center}`} px={5} pb={2}>
                                               <h2>No Results Found</h2> 
                                             </Box>
                                               <Box className={`${All.Text_center}`} pb={5}> 
                                               <label>It seems we can’t find any results based on your search. </label>
                                             </Box>
                                             </Box>
                                             </div>
                                             } 
                                </Box>  
                    </Col>
                </Row>
            </Container>
        </section> 
        </>
    );
} 
}