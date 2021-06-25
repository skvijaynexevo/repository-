import React, {Component} from 'react'
import { Helmet } from "react-helmet";
import Filter from '../images/Filter.svg' 
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
import $ from "jquery";

const API_URL = 'http://localhost:1080/auth-app/public/api/auth';

function handleClick() {
  var v = document.getElementById("FilterDropdowns");
  if (v.style.display === "none") {
    v.style.display = "block";
  } else {
    v.style.display = "none";
  }
}
 

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: [],
            visible: 10,
            id: [],
            value:  '1',
            userId: props.user, 
            categories: '1',
            error: false
        };
        this.loadMore = this.loadMore.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
    }
 

    loadMore() {
        this.setState((prev) => {
            return { visible: prev.visible + 8 };
        });
 
    }

    handleChanges(event) {
      this.setState({value: event.target.value});  
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('access_token')
            }
        }
        
        axios.get(`http://localhost:1080/auth-app/public/api/auth/homepagelistingfillter?type=${this.state.value}`, config).then(response => response.data)
            .then(data => {
                this.setState({ listing: data })
            },
                err => {
                    console.log(err);
                })
    }

    componentDidMount() {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('access_token')
            }
        }
        
        axios.get(`http://localhost:1080/auth-app/public/api/homepagelisting`, config).then(response => response.data)
            .then(data => {
                this.setState({ listing: data })
            },
                err => {
                    console.log(err);
                })
    }

    render() {
        const { listing, value } = this.state; 
        return (
            <>  
             <Row>
        <Col lg={2} xs={6} className="DropdownFilter views">
          {/* < DropdownFilter /> */}
          <select class="dropdown dropdown__text" onChange={this.handleChanges} value={this.state.value}> 
                      <option value="1">All</option>
                      <option value="2">Following</option> 
            </select>
 
        </Col>
        <Col lg={8} xs={12} className="categories">
          {/* <form class="GalleryForm">
            <ul>
              <li onClick={onClickAll}>
                <input class="GalleryFilter"
                  type="checkbox"
                  checked={all}
                />
                <label class="GalleryFilterLabel" htmlFor="all">All</label>
              </li>
              {filters.map(
                (filter, i) =>
                  <li key={i} data-index={i} onClick={onClick} >
                    <input class="GalleryFilter"
                      id={filter.name}
                      type="checkbox"
                      checked={filter.status}
                    />
                    <label class="GalleryFilterLabel" htmlFor={filter.name}>{filter.name}</label>
                  </li>)}
            </ul>
          </form> */}
        </Col>
        <Col lg={2} xs={6} className="DropdownFilter settings ">
          <Button onClick={handleClick} variant="contained" color="default" className="Btn_Filter"><img style={{ paddingRight: 10 }} src={Filter} />Filter</Button>
        </Col>
      </Row>
      <div id="FilterDropdowns" style={{ display: 'none' }}>
        <Row class="FilterDropdown">
          <Col lg={4} >
            {/* < FilterDropdown /> */}
            <select class="dropdown dropdown__text">
              <option>Select Country</option>
              <option>Following</option>
            </select>

          </Col>
          <Col lg={4} >
            {/* < FilterDropdown /> */}
            <select class="dropdown dropdown__text">
              <option>Type of post</option>
              <option>Following</option>
            </select>
          </Col>
          <Col lg={4} >
            {/* < FilterDropdown /> */}
            <select class="dropdown dropdown__text">
              <option>Type of shots</option>
              <option>Following</option>
            </select>
          </Col>
          {/* <Col lg={3} >
        <button  className="Btn_Search_Filter">Submit</button>
      </Col> */}
        </Row>
      </div>

                  <div className="GalleryTitle">
                    <h2 className={All.paddingbottom}>Let's bring out your drone skills</h2>
                    <label>Show your talent to the whole world</label>
                  </div>
                  <Box>
                    <h5 className={All.Bold} >Check the talent of other droners</h5>
                  </Box>

                <div>
                    <div class="Filters">
                    <ul>
                            {this.state.listing.slice(0, this.state.visible).map(user => (
                                <li>
                                    {user.tag === '1' ? (
                                        <div>
                                            <figure>
                                                <div class="content-overlay"></div>
                                                <a href="" data-gallery="gallery" data-plugininputid="43">
                                                    <img class="GalleryImg" alt="John Doe" src={user.src} /></a>
                                                <figcaption>
                                                    <span className="FSize_14 Profile_icon">{user.author} </span>
                                                    <span className="LikeIcon MuliLight"> <FormControlLabel className="MuliLight" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} label={user.like} /></span>
                                                </figcaption>
                                            </figure>
                                        </div>

                                    ) : user.tag === '2' ? (
                                        <div>
                                            <figure>
                                                <div class="content-overlay"></div>
                                                <a href="" data-gallery="gallery" data-plugininputid="43">
                                                    <img class="GalleryImg" alt="John Doe" src={user.src} /></a>
                                                <figcaption>
                                                    <span className="FSize_14 Profile_icon">{user.author} </span>
                                                    <span className="LikeIcon MuliLight"> <FormControlLabel className="MuliLight" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} label={user.like} /></span>
                                                </figcaption>
                                            </figure>
                                        </div>

                                      ) : user.tag === '3' ? (
                                        <div> 
                                      <figure> 
                                        <div class="content-overlay-video" ></div>
                                        <video className="GalleryImg" >
                                          <source src={user.src} type="video/mp4" />
                                          <source src={user.src} type="video/ogg" />
                                        </video> 
                                        
                                        <figcaption>
                                          <span className="FSize_14 Profile_icon">{user.author} </span>
                                          <span className="LikeIcon MuliLight"> <FormControlLabel className="MuliLight" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} label={user.like} /></span>
                                        </figcaption> 
                                      </figure> 
                                    </div>
                                      ) : user.tag === '4' ? (
                                        <div>
                                            <figure>
                                                <div class="content-overlay"></div>
                                                <a href="" data-gallery="gallery">
                                                    <img class="GalleryImg" alt="John Doe" src={user.src} /></a>
                                                <figcaption>
                                                    <span className="FSize_14 Profile_icon">{user.author} </span>
                                                    <span className="LikeIcon MuliLight"> <FormControlLabel className="MuliLight" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} label={user.like} /></span>
                                                </figcaption>
                                            </figure>
                                        </div>

                                    ) : (
                                        <div>
                                        </div>
                                    )}

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        )
    }

}