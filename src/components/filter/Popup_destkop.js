import React, { useState } from 'react'
import './Filter.css'  
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Container, Row, Col } from 'react-grid-system'; 
import { Link } from 'react-router-dom'; 
import './Filter.css'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'; 
import $ from 'jquery'
import All from '../website/All.module.css'  
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import 'react-responsive-modal/styles.css';
import utv from '../images/utv.png'    
import RecentPost from '../images/recent-post.png'
import Divider from '@material-ui/core/Divider'; 
import {Pannellum} from "pannellum-react"; 
import Close from '../images/close.svg'


export default function Popup_destkop(props) { 
        return ( 
          props.item.tag === 'Images' ? (
            <div>
                <img src={Close} style={{width:'20px', right: '20px',position: 'absolute',zIndex: 1,top: '20px'}}/>
              <div className={`${All.DisplayFlex} ${All.Text_left}`} >
              </div>
              <Row style={{paddingBottom:'25px'}} className={`${All.Text_left}`}>
                <Col sm={12} md={8}> <div className={All.lineheight_40}> <h4 style={{ backgroundColor: "white" }}> {props.item.title}</h4> </div></Col>
                <Col md={4} sm={6}> <div className={`${All.Text_right} ${All.Flex_auto}`}><Link to='/Cart'><Button className={All.BtnStyle_5}>Buy Now</Button></Link></div></Col>
              </Row> 
              <div className="slider_image">
                 <img className="GalleryImg" src={props.item.src} alt={props.item.author} />
              </div>
              <Row className={`${All.Text_left} slideProfileDetail `}>
                <Col lg={8}>
                <Box className={`  ${All.Text_left}`}>  
                          <Box textAlign={'Left'} >   
                                      <img class="alignleft" src={utv}
                                  alt="Image Sample 1" style={{
                                      display: "inline",
                                      float: "left",
                                      width: "75px",
                                      marginRight: '15px', 
                                      height:'75px',
                                      borderRadius:'100px'
                                  }} /> 
                          </Box>  
      
                                  <Box pt={1}> 
                                      <Link to='/profile'><h5 className={All.Bold}>Stephen Raj</h5></Link>
                                      <label className={`${All.paddingbottom} ${All.TextBlueColor}`}>Follow</label>
                                  </Box>
      
                                  <Box className={All.JobDescription} >
                                  <label className={`${All.paddingtop} ${All.paddingbottom}`}>Hello Everyone,</label> 
                                  <label className={All.paddingtop}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</label> 
                                  <label className={All.paddingtop}>Wanna create something great?</label>
                                  <label className={All.paddingtop}>Feel free contact us <span className={All.TextBlueColor}>Info@nexevo.in</span></label>
                                  </Box>  
                                  <Box>
                                    <label className={`${All.Bold} ${All.paddingtop} ${All.paddingbottom}`}>Comments</label>
                                  </Box>
      
                                  
                                <Box>
                                      <input type="text" className={All.FormControl} placeholder="Comments" name="caption" id="usr" /> 
                                  </Box> 
      
      
                                  <Box textAlign={'Left'} >   
                                      <img class="alignleft" src={utv}
                                      alt="Image Sample 1" style={{
                                      display: "inline",
                                      float: "left",
                                      width: "45px",
                                      marginRight: '15px', 
                                      height:'45px',
                                      borderRadius:'100px'
                                  }} /> 
                                  </Box>  
      
                                  <Box pt={1}> 
                                      <label className={All.Bold}>Stephen Raj</label> 
                                  </Box>
                                  <Box className={`${All.DisplayFlex}  ${All.paddingtop} `}>
                                    <label> Amazing Shot!!! Love it!!</label>
                                    <figcaption> 
                                       <span className="LikeIcon LikeIcon_slider MuliLight"> <FormControlLabel className="MuliLight LikeIcon_slider" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} label={props.item.like} /></span>
                                    </figcaption>
                                  </Box>  
      
                                  {/* <Box py={3}>
                                   <Divider></Divider>
                               </Box> */}
      
                 </Box> 
                 
                 <Box pt={4} textAlign={'Center'} >     
                                    <Button className={All.BtnStyle_5}>Load More</Button>
                                  </Box>
                </Col> 
      
                <Col lg={4}>
                  <Box>
                  <label className={`${All.Bold} ${All.paddingbottom_5}`}>Like What You See?</label>
                    <label>This Droners is available for work</label>
                  </Box>
                  <Box pt={2} pb={5}> 
                    <Button className={All.BtnStyle_5}>Hire This Droner</Button>
                  </Box> 
                  <Box pb={2}>
                    <label className={All.Bold}>More Shots from Stephen Raj</label>
                  </Box> 
                  <Box> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link>  
                  </Box> 
                  </Col> 
              </Row>
            </div>
          ) : props.item.tag === 'Videos' ? ( 
            <div>
                <img src={Close} style={{width:'20px', right: '20px',position: 'absolute',zIndex: 1,top: '20px'}}/>
            <div className={`${All.DisplayFlex} ${All.Text_left}`} >
            </div>
            <Row style={{paddingBottom:'25px'}} className={`${All.Text_left}`}>
              <Col md={8} sm={6}> <div className={All.lineheight_40}> <h4 style={{ backgroundColor: "white" }}> {props.item.title}</h4> </div></Col>
              <Col md={4} sm={6}> <div className={`${All.Text_right} ${All.Flex_auto}`}><Link to='/Cart'><Button className={All.BtnStyle_5}>Buy Now</Button></Link></div></Col>
            </Row>
            <div className="slider_image">
            <video className="GalleryImg" controls controlsList="nodownload">
                <source src={props.item.src} type="video/mp4" />
                <source src={props.item.src} type="video/ogg" />
              </video>
            </div>
            <Row className={`${All.Text_left} slideProfileDetail `}>
              <Col lg={8}>
              <Box className={`${All.Text_left}`}>  
                        <Box textAlign={'Left'} >   
                                    <img class="alignleft" src={utv}
                                alt="Image Sample 1" style={{
                                    display: "inline",
                                    float: "left",
                                    width: "75px",
                                    marginRight: '15px', 
                                    height:'75px',
                                    borderRadius:'100px'
                                }} /> 
                                </Box>  
      
                                <Box pt={1}> 
                                <Link to='/profile'><h5 className={All.Bold}>Stephen Raj</h5></Link>
                                    <label className={`${All.TextBlueColor} ${All.paddingbottom}`}>Follow</label>
                                </Box>
      
                                <Box className={All.JobDescription} >
                                <label className={`${All.paddingtop} ${All.paddingbottom}`}>Hello Everyone,</label> 
                                <label className={All.paddingtop}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</label> 
                                <label className={All.paddingtop}>Wanna create something great?</label>
                                <label className={All.paddingtop}>Feel free contact us <span className={All.TextBlueColor}>Info@nexevo.in</span></label>
                                </Box>  
                                <Box>
                                  <label className={`${All.Bold} ${All.paddingtop} ${All.paddingbottom}`}>Comments</label>
                                </Box>
      
                                
                                <Box>
                                      <input type="text" className={All.FormControl} placeholder="Comments" name="caption" id="usr" /> 
                                  </Box> 
      
      
                                <Box textAlign={'Left'} >   
                                    <img class="alignleft" src={utv}
                                alt="Image Sample 1" style={{
                                    display: "inline",
                                    float: "left",
                                    width: "45px",
                                    marginRight: '15px', 
                                    height:'45px',
                                    borderRadius:'100px'
                                }} /> 
                                </Box>  
      
                                <Box pt={1}>    
                                 <label className={All.Bold}>Stephen Raj</label> 
                                </Box>
                                <Box className={`${All.DisplayFlex}  ${All.paddingtop} `}>
                                  <label> Amazing Shot!!! Love it!!</label>
                                  <figcaption> 
                                     <span className="LikeIcon LikeIcon_slider MuliLight"> <FormControlLabel className="MuliLight" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} label={props.item.like} /></span>
                                  </figcaption>
                                </Box>
      
                                {/* <Box py={3}>
                                   <Divider></Divider>
                               </Box> */}
                                
                                <Box pt={4} textAlign={'Center'} >   
                                    <Button className={All.BtnStyle_5}>Load More</Button>
                                  </Box>
               </Box> 
              </Col> 
      
              <Col lg={4}>
                <Box>
                <label className={`${All.Bold} ${All.paddingbottom_5}`}>Like What You See?</label>
                  <label>This Droners is available for work</label>
                </Box>
                <Box pt={2} pb={5}> 
                  <Button className={All.BtnStyle_5}>Hire This Droner</Button>
                </Box> 
                <Box pb={2}>
                  <label className={All.Bold}>More Shots from Stephen Raj</label>
                </Box> 
                <Box> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link>  
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                  </Box> 
                </Col> 
            </Row>
          </div>  
          ) : props.item.tag === '360° Images' ? (
            <div>
                              <img src={Close} style={{width:'20px', right: '20px',position: 'absolute',zIndex: 1,top: '20px'}}/>
            <div className={`${All.DisplayFlex} ${All.Text_left}`} >
            </div>
            <Row style={{paddingBottom:'25px'}} className={`${All.Text_left}`}>
              <Col md={8} sm={6}> <div className={All.lineheight_40}> <h4 style={{ backgroundColor: "white" }}> {props.item.title}</h4> </div></Col>
              <Col md={4} sm={6}> <div className={`${All.Text_right} ${All.Flex_auto}`}><Link to='/Cart'><Button className={All.BtnStyle_5}>Buy Now</Button></Link></div></Col>
            </Row>
            <div className="slider_image"> 
          
             <Pannellum
              className="GalleryImg" 
              image={props.item.src}
              pitch={0}
              yaw={0}
              hfov={0}
              autoLoad
              showZoomCtrl={true} 
            ></Pannellum>  
            </div>
            <Row className={`${All.Text_left} slideProfileDetail `}>
              <Col lg={8}>
              <Box className={` ${All.Text_left}`}>  
                        <Box textAlign={'Left'}>   
                                    <img class="alignleft" src={utv}
                                alt="Image Sample 1" style={{
                                    display: "inline",
                                    float: "left",
                                    width: "75px",
                                    marginRight: '15px', 
                                    height:'75px',
                                    borderRadius:'100px'
                                }} /> 
                                </Box>  
      
                                <Box pt={1}> 
                                    <Link to='/profile'><h5 className={All.Bold}>Stephen Raj</h5></Link>
                                    <label className={`${All.TextBlueColor} ${All.paddingbottom}`}>Follow</label>
                                </Box>
      
                                <Box className={All.JobDescription} >
                                <label className={`${All.paddingtop} ${All.paddingbottom}`}>Hello Everyone,</label> 
                                <label className={All.paddingtop}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</label> 
                                <label className={All.paddingtop}>Wanna create something great?</label>
                                <label className={All.paddingtop}>Feel free contact us <span className={All.TextBlueColor}>Info@nexevo.in</span></label>
                                </Box>  
                                <Box>
                                  <label className={`${All.Bold} ${All.paddingtop} ${All.paddingbottom}`}>Comments</label>
                                </Box>
      
                                
                                <Box>
                                      <input type="text" className={All.FormControl} placeholder="Comments" name="caption" id="usr" /> 
                                  </Box> 
      
      
                                <Box textAlign={'Left'} >   
                                    <img class="alignleft" src={utv}
                                alt="Image Sample 1" style={{
                                    display: "inline",
                                    float: "left",
                                    width: "45px",
                                    marginRight: '15px', 
                                    height:'45px',
                                    borderRadius:'100px'
                                }} /> 
                                </Box>  
      
                                <Box pt={1}> 
                                <label className={All.Bold}>Stephen Raj</label> 
                                </Box>
                                <Box className={`${All.DisplayFlex}  ${All.paddingtop} `}>
                                  <label> Amazing Shot!!! Love it!!</label>
                                  <figcaption> 
                                     <span className="LikeIcon LikeIcon_slider MuliLight"> <FormControlLabel className="MuliLight" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} label={props.item.like} /></span>
                                  </figcaption>
                                </Box> 
                                
               </Box> 
      
               
               <Box pt={4} textAlign={'Center'} >   
                                    <Button className={All.BtnStyle_5}>Load More</Button>
                                  </Box>
              </Col> 
      
              <Col lg={4}>
                <Box>
                <label className={`${All.Bold} ${All.paddingbottom_5}`}>Like What You See?</label>
                  <label>This Droners is available for work</label>
                </Box>
                <Box pt={2} pb={5}> 
                  <Button className={All.BtnStyle_5}>Hire This Droner</Button>
                </Box> 
                <Box pb={2}>
                  <label className={All.Bold}>More Shots from Stephen Raj</label>
                </Box> 
                <Box> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link>  
                  </Box> 
                </Col> 
      
            </Row>
          </div> 
          ) : props.item.tag === '3D Models' ? (
            <div>
                              <img src={Close} style={{width:'20px', right: '20px',position: 'absolute',zIndex: 1,top: '20px'}} />
            <div className={`${All.DisplayFlex} ${All.Text_left}`} >
            </div>
            <Row style={{paddingBottom:'25px'}} className={`${All.Text_left}`}>
              <Col md={8} sm={6}> <div className={All.lineheight_40}> <h4 style={{ backgroundColor: "white" }}> {props.item.title}</h4> </div></Col>
              <Col md={4} sm={6}> <div className={`${All.Text_right} ${All.Flex_auto}`}><Link to='/Cart'><Button className={All.BtnStyle_5}>Buy Now</Button></Link></div></Col>
            </Row>
            <div className="slider_image">
            <img className="GalleryImg" src={props.item.src} alt={props.item.author} />
            </div>
            <Row className={`${All.Text_left} slideProfileDetail `}>
              <Col lg={8}>
              <Box className={` ${All.Text_left}`}>  
                        <Box textAlign={'Left'} >   
                                    <img class="alignleft" src={utv}
                                alt="Image Sample 1" style={{
                                    display: "inline",
                                    float: "left",
                                    width: "75px",
                                    marginRight: '15px', 
                                    height:'75px',
                                    borderRadius:'100px'
                                }} /> 
                                </Box>  
      
                                <Box pt={1}> 
                                    <h5 className={All.Bold}>Stephen Raj</h5>
                                    <label className={`${All.TextBlueColor} ${All.paddingbottom}`}>Follow</label>
                                </Box>
      
                                <Box className={All.JobDescription} >
                                <label className={`${All.paddingtop} ${All.paddingbottom}`}>Hello Everyone,</label> 
                                <label className={All.paddingtop}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</label> 
                                <label className={All.paddingtop}>Wanna create something great?</label>
                                <label className={All.paddingtop}>Feel free contact us <span className={All.TextBlueColor}>Info@nexevo.in</span></label>
                                </Box>  
                                <Box>
                                  <label className={`${All.Bold} ${All.paddingtop} ${All.paddingbottom}`}>Comments</label>
                                </Box>
        
                                <Box>
                                      <input type="text" className={All.FormControl} placeholder="Comments" name="caption" id="usr" /> 
                                  </Box> 
      
                                <Box textAlign={'Left'} >   
                                    <img class="alignleft" src={utv}
                                alt="Image Sample 1" style={{
                                    display: "inline",
                                    float: "left",
                                    width: "45px",
                                    marginRight: '15px', 
                                    height:'45px',
                                    borderRadius:'100px'
                                }} /> 
                                </Box>    
                                <Box pt={1}> 
                                <label className={All.Bold}>Stephen Raj</label> 
                                </Box>
                                <Box className={`${All.DisplayFlex}  ${All.paddingtop} `}>
                                  <label> Amazing Shot!!! Love it!!</label>
                                  <figcaption> 
                                     <span className="LikeIcon LikeIcon_slider MuliLight"> <FormControlLabel className="MuliLight" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} label={props.item.like} /></span>
                                  </figcaption>
                                </Box>
                                
                               {/* <Box py={3}>
                                   <Divider></Divider>
                               </Box> */}
               </Box>  
      
               
               <Box pt={4} textAlign={'Center'} >   
                                    <Button className={All.BtnStyle_5}>Load More</Button>
                                  </Box>
                                  
              </Col> 
      
              <Col lg={4}>
                <Box>
                <label className={`${All.Bold} ${All.paddingbottom_5}`}>Like What You See?</label>
                  <label>This Droners is available for work</label>
                </Box>
                <Box pt={2} pb={5}> 
                  <Button className={All.BtnStyle_5}>Hire This Droner</Button>
                </Box> 
                <Box pb={2}>
                  <label className={All.Bold}>More Shots from Stephen Raj</label>
                </Box> 
                <Box> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link>  
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                      <Link> <img src={RecentPost} style={{width:' 120px', height: '109px' ,paddingBottom: '10px'}}/></Link> 
                  </Box> 
                </Col> 
            </Row>
          </div> 
       
          ) : (
                    <div>
                      
                    </div>
                  ) 
        )  
}
