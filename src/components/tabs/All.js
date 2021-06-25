import React from 'react'
import { Helmet } from "react-helmet";
import { Container, Row, Col } from 'react-grid-system';
import utv from '../images/utv.png'
import All from '../website/All.module.css'
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Header from '../header/Header'
import Skeleton from 'react-loading-skeleton';
import swal from 'sweetalert';
import viewJobMobileImg from '../images/viewjob_mobile.svg'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';    
import Like from '../Like'
import EditIcon from '@material-ui/icons/Edit';
import DroneImg from '../images/drone-img.svg' 
import nofoundresult from '../images/noresultfound.svg'


const API_URL = 'http://demo-nexevo.in/dn-auth-app/auth-app/public/api/auth';


var videos = document.querySelectorAll(".thumbnail");
for (var i = 0; i < videos.length; i++) {
    videos[i].addEventListener('click', clickHandler, false);
}
function clickHandler(el) {
    var mainVideo = document.getElementById("mainVideo");
    mainVideo.src = el.srcElement.currentSrc;
}

export default class Alls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: [],
            users: '',
            visible: 10,
            id: [],
            userId: props.user,
            error: false
        };
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return { visible: prev.visible + 8 };
        });
    }

    componentDidMount() {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('access_token')
            }
        } 
        axios.get(`http://demo-nexevo.in/dn-auth-app/auth-app/public/api/auth/listing/${this.state.userId}`, config).then(response => response.data)
            .then(data => {
                this.setState({ listing: data })
            },
                err => { 
                })

                axios.get('http://demo-nexevo.in/dn-auth-app/auth-app/public/api/auth/user', config)
                .then(res => {
                    this.setState({ users: res.data })
                },
                  err => { 
                  }
                ) 
            
    }

   
    
    clickMe(user){ 
        this.setState({
          redirect: true
        }) 
      }

    render() {
        const { listing, value } = this.state;
        const {users,  values} = this.state; 
        return ( 
            <> 
                <div>
                    <div class="Filters">
                        <ul> 
                                { this.state.listing.length>0 ? this.state.listing.slice(0, this.state.visible).map(user => (
                                <li>
                                    {user.tag === '1' ? (
                                            <div>
                                            <figure>
                                            {users.id == this.state.userId ? 
                                            <figcaption class="edit" style={{top: '0 !important'}}>   
                                              <Link to={{ pathname: `PostEdit/${user.id}/${user.user_id}`,  data: user , state: { foo: 'bar'} }} onClick={this.clickMe.bind(this, user)}> 
                                              <span className="LikeIcon MuliLight">
                                                  <EditIcon></EditIcon>
                                              </span>
                                              </Link>  
                                              </figcaption>
                                              : <> </> } 
                                            <Link  to={{ pathname: `/Imageview/${user.id}/${user.user_id}`,  data: user , state: { foo: 'bar'} }} onClick={this.clickMe.bind(this, user)}>  
                                             <div class="content-overlay"></div>  
                                                  {user.src ? <img class="GalleryImg" src={user.src} /> 
                                                 :  <Skeleton circle={true} height={280} width={280}  className={All.SkeletonImg}/> }  
                                                 </Link>  
                                                 <figcaption>
                                                            {users.id == this.state.userId ?  <span className="FSize_14 Profile_icon">{user.author} </span> 
                                                            :  <Link className={All.White} to={{ pathname:`ProfileSingle/${user.user_id}`}}><span className="FSize_14 Profile_icon">{user.author} </span></Link> }      
                                                               <span className="LikeIcon  MuliLight"><Like id={user.id}/> </span>
                                                            </figcaption> 
                                          </figure>
                                      </div>
                                      
                                    ) : user.tag === '2' ? (
                                        <div>
                                        <figure>
                                        {users.id == this.state.userId ? 
                                        <figcaption class="edit" style={{top: '0 !important'}}>   
                                              <Link to={{ pathname: `PostEdit/${user.id}/${user.user_id}`,  data: user , state: { foo: 'bar'} }} onClick={this.clickMe.bind(this, user)}> 
                                              <span className="LikeIcon MuliLight">
                                                  <EditIcon></EditIcon>
                                              </span>
                                              </Link>  
                                              </figcaption>
                                                      : <> </> } 
                                      <Link  to={{ pathname: `/Imageview/${user.id}/${user.user_id}`,  data: user , state: { foo: 'bar'} }} onClick={this.clickMe.bind(this, user)}>  
                                          <div class="content-overlay"></div>  
                                              {user.src ? <img class="GalleryImg" src={user.src} /> 
                                             :  <Skeleton circle={true} height={280} width={280}  className={All.SkeletonImg}/> }  
                                             </Link> 
                                             <figcaption>
                                                            {users.id == this.state.userId ?  <span className="FSize_14 Profile_icon">{user.author} </span> 
                                                            :  <Link className={All.White} to={{ pathname:`ProfileSingle/${user.user_id}`}}><span className="FSize_14 Profile_icon">{user.author} </span></Link> }      
                                                                <span className="LikeIcon  MuliLight"><Like id={user.id}/> </span>
                                                            </figcaption>
                                      </figure>
                                  </div>

                                    ) : user.tag === '3' ? (
                                        <div> 
                                        <figure> 
                                        {users.id == this.state.userId ? 
                                        <figcaption class="edit" style={{top: '0 !important'}}>   
                                              <Link to={{ pathname: `PostEdit/${user.id}/${user.user_id}`,  data: user , state: { foo: 'bar'} }} onClick={this.clickMe.bind(this, user)}> 
                                              <span className="LikeIcon MuliLight">
                                                  <EditIcon></EditIcon>
                                              </span>
                                              </Link>  
                                              </figcaption>
                                                      : <> </> } 
                                        <Link  to={{ pathname: `/Imageview/${user.id}/${user.user_id}`,  data: user , state: { foo: 'bar'} }} onClick={this.clickMe.bind(this, user)}> 
                                          <div class="content-overlay-video" ></div> 
                                          <video class="thumbnail GalleryImg">
                                            <source src={user.src} type="video/mp4" />
                                        </video>
                                          </Link> 
                                          <figcaption>
                                                            {users.id == this.state.userId ?  <span className="FSize_14 Profile_icon">{user.author} </span> 
                                                            :  <Link className={All.White} to={{ pathname:`ProfileSingle/${user.user_id}`}}><span className="FSize_14 Profile_icon">{user.author} </span></Link> }      
                                                                <span className="LikeIcon  MuliLight"><Like id={user.id}/> </span>
                                                            </figcaption>
                                        </figure> 
                                      </div>

                                    ) : user.tag === '4' ? (
                                        <div>
                                        <figure>
                                        {users.id == this.state.userId ? 
                                        <figcaption class="edit" style={{top: '0 !important'}}>   
                                              <Link to={{ pathname: `PostEdit/${user.id}/${user.user_id}`,  data: user , state: { foo: 'bar'} }} onClick={this.clickMe.bind(this, user)}> 
                                              <span className="LikeIcon MuliLight">
                                                  <EditIcon></EditIcon>
                                              </span>
                                              </Link>  
                                              </figcaption>
                                                      : <> </> } 
                                      <Link  to={{ pathname: `/Imageview/${user.id}/${user.user_id}`,  data: user , state: { foo: 'bar'} }} onClick={this.clickMe.bind(this, user)}>  
                                          <div class="content-overlay"></div>  
                                              {user.src ? <img class="GalleryImg" src={user.src} /> 
                                             :  <Skeleton circle={true} height={280} width={280}  className={All.SkeletonImg}/> }  
                                             </Link> 
                                             <figcaption>
                                                            {users.id == this.state.userId ?  <span className="FSize_14 Profile_icon">{user.author} </span> 
                                                            :  <Link className={All.White} to={{ pathname:`ProfileSingle/${user.user_id}`}}><span className="FSize_14 Profile_icon">{user.author} </span></Link> }      
                                                                <span className="LikeIcon  MuliLight"><Like id={user.id}/> </span>
                                                            </figcaption>
                                      </figure>
                                  </div>

                                    ) : (
                                        <div>
                                        </div>
                                    )}

                                </li>
                            )):
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
                        </ul>
                    </div>
                </div>
                {this.state.visible < this.state.listing.length && 
               <Box py={6} textAlign={'center'}>
               <Button variant="contained" color="default" type="submit" onClick={this.loadMore} className={`${All.BtnStyle_5} ${All.LoadMore} ${All.W_sm_70} ${All.Bold}`}>
                   <img style={{paddingRight:10}} src={DroneImg}/>
                   Load More</Button>    
               </Box> 

            }  
            </>
        )
    }

}