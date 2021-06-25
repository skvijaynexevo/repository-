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
import { Pannellum } from "pannellum-react";

export default function Popup_destkop(props) {
    return (
        props.item.tag === 'Images' ? (
            <div>
                <div className={`${All.DisplayFlex} ${All.Text_left}`} >
                </div>
                <Row style={{ paddingBottom: '25px' }} className={`${All.Text_left}`}>
                    <Col md={6} xs={12}> <div className={All.lineheight_40}> <h4 style={{ backgroundColor: "white" }}> {props.item.title}</h4> </div></Col>
                    <Col md={6} xs={12}> <div className={`${All.Text_left_xs} ${All.Text_left_sm} ${All.Text_left} ${All.Text_right_md} ${All.pt_sm} ${All.pt_xs} ${All.Text_right_md} ${All.Flex_auto}`}><Button className={All.BtnStyle_5}>Buy Now</Button></div></Col>
                </Row>
                <div className="slider_image">
                    <img className="GalleryImg" src={props.item.src} alt={props.item.author} />
                </div>
                <Row className={`${All.Text_left} slideProfileDetail `}>
                    <Col >
                        <Box className={`  ${All.Text_left}`}>
                            <Row>
                                <Col col={6}>
                                    <Box textAlign={'Left'} >
                                        <img class="alignleft" src={utv}
                                            alt="Image Sample 1" style={{
                                                display: "inline",
                                                float: "left",
                                                width: "75px",
                                                marginRight: '15px'
                                            }} />
                                    </Box>

                                    <Box pt={1}>
                                        <h5>Stephen Raj</h5>
                                        <label className={`${All.paddingbottom} ${All.TextBlueColor}`}>Follow</label>
                                    </Box>

                                </Col>
                                <Col col={6}>

                                    <Box pt={2} className={`  ${All.Text_right}`}>
                                        <Button className={All.BtnStyle_5}>Hire This Droner</Button>
                                    </Box>
                                </Col>
                            </Row>
                            <Box className={All.JobDescription} pb={2}>
                                <label className={All.paddingtop}>Hello Everyone,</label>
                                <label className={All.paddingtop}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</label>
                                <label className={All.paddingtop}>Wanna create something great?</label>
                                <label>Feel free contact us <span className={All.TextBlueColor}>Info@nexevo.in</span></label>
                            </Box>

                            <Box pb={2}>
                                <label className={All.Bold}>More Shots from Stephen Raj</label>
                            </Box>
                            <Box>
                                <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                                <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                                <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                                <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                                <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                                <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                            </Box>

                            <Box>
                                <label className={`${All.Bold} ${All.paddingtop} `}>Comments</label>
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
                                        marginRight: '15px'
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
                </Row>
            </div>
        ) : props.item.tag === 'Videos' ? ( 
            <div>
            <div className={`${All.DisplayFlex} ${All.Text_left}`} >
            </div>
            <Row style={{ paddingBottom: '25px' }} className={`${All.Text_left}`}>
                <Col md={6} xs={12}> <div className={All.lineheight_40}> <h4 style={{ backgroundColor: "white" }}> {props.item.title}</h4> </div></Col>
                <Col md={6} xs={12}> <div className={`${All.Text_left_xs} ${All.Text_left_sm} ${All.Text_left} ${All.Text_right_md} ${All.pt_sm} ${All.pt_xs} ${All.Text_right_md} ${All.Flex_auto}`}><Button className={All.BtnStyle_5}>Buy Now</Button></div></Col>
            </Row>
            <div className="slider_image">
                    <video className="GalleryImg" controls controlsList="nodownload">
                        <source src={props.item.src} type="video/mp4" />
                        <source src={props.item.src} type="video/ogg" />
                    </video>
                </div>
            <Row className={`${All.Text_left} slideProfileDetail `}>
                <Col >
                    <Box className={`  ${All.Text_left}`}>
                        <Row>
                            <Col col={6}>
                                <Box textAlign={'Left'} >
                                    <img class="alignleft" src={utv}
                                        alt="Image Sample 1" style={{
                                            display: "inline",
                                            float: "left",
                                            width: "75px",
                                            marginRight: '15px'
                                        }} />
                                </Box>

                                <Box pt={1}>
                                    <h5>Stephen Raj</h5>
                                    <label className={`${All.paddingbottom} ${All.TextBlueColor}`}>Follow</label>
                                </Box>

                            </Col>
                            <Col col={6}>

                                <Box pt={2} className={`  ${All.Text_right}`}>
                                    <Button className={All.BtnStyle_5}>Hire This Droner</Button>
                                </Box>
                            </Col>
                        </Row>
                        <Box className={All.JobDescription} pb={2}>
                            <label className={All.paddingtop}>Hello Everyone,</label>
                            <label className={All.paddingtop}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</label>
                            <label className={All.paddingtop}>Wanna create something great?</label>
                            <label>Feel free contact us <span className={All.TextBlueColor}>Info@nexevo.in</span></label>
                        </Box>

                        <Box pb={2}>
                            <label className={All.Bold}>More Shots from Stephen Raj</label>
                        </Box>
                        <Box>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                        </Box>

                        <Box>
                            <label className={`${All.Bold} ${All.paddingtop} `}>Comments</label>
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
                                    marginRight: '15px'
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
            </Row>
        </div>
        ) : props.item.tag === '360° Images' ? (
            <div>
            <div className={`${All.DisplayFlex} ${All.Text_left}`} >
            </div>
            <Row style={{ paddingBottom: '25px' }} className={`${All.Text_left}`}>
                <Col md={6} xs={12}> <div className={All.lineheight_40}> <h4 style={{ backgroundColor: "white" }}> {props.item.title}</h4> </div></Col>
                <Col md={6} xs={12}> <div className={`${All.Text_left_xs} ${All.Text_left_sm} ${All.Text_left} ${All.Text_right_md} ${All.pt_sm} ${All.pt_xs} ${All.Text_right_md} ${All.Flex_auto}`}><Button className={All.BtnStyle_5}>Buy Now</Button></div></Col>
            </Row>
            <div className="slider_image">
            <Pannellum
                        className="GalleryImg"
                        image={props.item.src}
                        pitch={0}
                        hfov={0}
                        autoLoad
                        showZoomCtrl={true}
                    ></Pannellum>
            </div>
            <Row className={`${All.Text_left} slideProfileDetail `}>
                <Col >
                    <Box className={`  ${All.Text_left}`}>
                        <Row>
                            <Col col={6}>
                                <Box textAlign={'Left'} >
                                    <img class="alignleft" src={utv}
                                        alt="Image Sample 1" style={{
                                            display: "inline",
                                            float: "left",
                                            width: "75px",
                                            marginRight: '15px'
                                        }} />
                                </Box>

                                <Box pt={1}>
                                    <h5>Stephen Raj</h5>
                                    <label className={`${All.paddingbottom} ${All.TextBlueColor}`}>Follow</label>
                                </Box>

                            </Col>
                            <Col col={6}>

                                <Box pt={2} className={`  ${All.Text_right}`}>
                                    <Button className={All.BtnStyle_5}>Hire This Droner</Button>
                                </Box>
                            </Col>
                        </Row>
                        <Box className={All.JobDescription} pb={2}>
                            <label className={All.paddingtop}>Hello Everyone,</label>
                            <label className={All.paddingtop}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</label>
                            <label className={All.paddingtop}>Wanna create something great?</label>
                            <label>Feel free contact us <span className={All.TextBlueColor}>Info@nexevo.in</span></label>
                        </Box>

                        <Box pb={2}>
                            <label className={All.Bold}>More Shots from Stephen Raj</label>
                        </Box>
                        <Box>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                        </Box>

                        <Box>
                            <label className={`${All.Bold} ${All.paddingtop} `}>Comments</label>
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
                                    marginRight: '15px'
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
            </Row>
        </div>
        ) : props.item.tag === '3D Models' ? (
            <div>
            <div className={`${All.DisplayFlex} ${All.Text_left}`} >
            </div>
            <Row style={{ paddingBottom: '25px' }} className={`${All.Text_left}`}>
                <Col md={6} xs={12}> <div className={All.lineheight_40}> <h4 style={{ backgroundColor: "white" }}> {props.item.title}</h4> </div></Col>
                <Col md={6} xs={12}> <div className={`${All.Text_left_xs} ${All.Text_left_sm} ${All.Text_left} ${All.Text_right_md} ${All.pt_sm} ${All.pt_xs} ${All.Text_right_md} ${All.Flex_auto}`}><Button className={All.BtnStyle_5}>Buy Now</Button></div></Col>
            </Row>
            <div className="slider_image">
                <img className="GalleryImg" src={props.item.src} alt={props.item.author} />
            </div>
            <Row className={`${All.Text_left} slideProfileDetail `}>
                <Col >
                    <Box className={`  ${All.Text_left}`}>
                        <Row>
                            <Col col={6}>
                                <Box textAlign={'Left'} >
                                    <img class="alignleft" src={utv}
                                        alt="Image Sample 1" style={{
                                            display: "inline",
                                            float: "left",
                                            width: "75px",
                                            marginRight: '15px'
                                        }} />
                                </Box>

                                <Box pt={1}>
                                    <h5>Stephen Raj</h5>
                                    <label className={`${All.paddingbottom} ${All.TextBlueColor}`}>Follow</label>
                                </Box>

                            </Col>
                            <Col col={6}>

                                <Box pt={2} className={`  ${All.Text_right}`}>
                                    <Button className={All.BtnStyle_5}>Hire This Droner</Button>
                                </Box>
                            </Col>
                        </Row>
                        <Box className={All.JobDescription} pb={2}>
                            <label className={All.paddingtop}>Hello Everyone,</label>
                            <label className={All.paddingtop}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</label>
                            <label className={All.paddingtop}>Wanna create something great?</label>
                            <label>Feel free contact us <span className={All.TextBlueColor}>Info@nexevo.in</span></label>
                        </Box>

                        <Box pb={2}>
                            <label className={All.Bold}>More Shots from Stephen Raj</label>
                        </Box>
                        <Box>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                            <Link> <img src={RecentPost} style={{ width: ' 120px', height: '109px', paddingBottom: '10px' }} /></Link>
                        </Box>

                        <Box>
                            <label className={`${All.Bold} ${All.paddingtop} `}>Comments</label>
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
                                    marginRight: '15px'
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
            </Row>
        </div>
        ) : (
                            <div>
                                test
                            </div>
                        )
    )
}
