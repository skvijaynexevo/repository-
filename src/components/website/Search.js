import React, { useState }  from 'react'
import '../filter/Filter.css'
import Profile from '../images/profile.svg'
import Filter from '../images/Filter.svg' 
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom'; 
import { Container, Row, Col } from 'react-grid-system'; 
import Button from '@material-ui/core/Button';  
import Box from '@material-ui/core/Box';
import $ from 'jquery' 
import SearchBar from "material-ui-search-bar";
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import All from '../website/All.module.css'  
import DropdownFilter from '../filter/DropdownFilter'
import Dialog from '@material-ui/core/Dialog'; 
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'; 
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'; 
import Close from '../images/close.svg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MuiDialogTitle from '@material-ui/core/DialogTitle'; 
import 'react-responsive-modal/styles.css';
import utv from '../images/utv.png'    
import RecentPost from '../images/recent-post.png'
import Divider from '@material-ui/core/Divider'; 
import {Pannellum} from "pannellum-react";
import Header from '../header/Header'
import PopupDestkop from '../filter/Popup_destkop'
import Popup_moblie from '../filter/Popup_moblie'
 
 
const imgs = [{ author: "John Doe", title: "Wonder of the World India's Tajmahal", like: "1K", tag: "Images", src: "https://www.tripsavvy.com/thmb/7jsG411Td4WfrqhbsDG0Ql4kMW8=/3600x2400/filters:no_upscale():max_bytes(150000):strip_icc()/DELHI2019-1-79-43a3cb2bb99e48bba647aae1a6c9da15.JPG" },
{ author: "John Doe", title: "Wonder of the World India's Tajmahal", like: "1K", tag: "3D Models", src: "https://santramholidays.in/wp-content/uploads/2017/11/A.-Raj-Ghat.jpg" },
{ author: "John Doe", title: "Wonder of the World India's Tajmahal", like: "1K", tag: "360° Images", src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" },
{ author: "John Doe", title: "Wonder of the World India's Tajmahal", like: "1K", tag: "Videos", src: "https://media.gettyimages.com/videos/beautiful-golden-gate-bridge-in-san-francisco-california-on-a-sunny-video-id1012892468" },
{ author: "John Doe", title: "Wonder of the World India's Tajmahal", like: "1K", tag: "Videos", src: "https://media.gettyimages.com/videos/statue-of-liberty-and-lower-manhattan-in-sunshine-video-id878629952" },
{ author: "John Doe", title: "Wonder of the World India's Tajmahal", like: "1K", tag: "Images", src: "https://myanmarhandicrafts.files.wordpress.com/2015/07/vv.jpg" },
{ author: "John Doe", title: "Wonder of the World India's Tajmahal", like: "1K", tag: "3D Models", src: "https://www.mistay.in/travel-blog/content/images/2020/06/coverr-mumbai-couples-hotel-mistay.jpg" },
{ author: "John Doe", title: "Wonder of the World India's Tajmahal", like: "1K", tag: "Images", src: "https://media.gettyimages.com/photos/jama-masjid-mosque-in-delhi-picture-id505757382?k=6&m=505757382&s=612x612&w=0&h=1RAC2iXyvs68uDhO_1RAborHybmLkadpBsLHVuTB8U4=" },
{ author: "John Doe", title: "Wonder of the World India's Tajmahal", like: "1K", tag: "3D Models", src: "https://i1.wp.com/travelblog.expedia.co.in/wp-content/uploads/2015/07/agra-fort.jpg?ssl=1" },
{ author: "John Doe", title: "Wonder of the World India's Tajmahal", like: "1K", tag: "360° Images", src: "https://images.pexels.com/photos/5548401/pexels-photo-5548401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }
];



const filters = [
  { name: "Images", status: false },
  { name: "360° Images", status: false },
  { name: "Videos", status: false },
  { name: "3D Models", status: false }
]; 

 

function handleClick() {
  var v = document.getElementById("FilterDropdowns");
  if (v.style.display === "none") {
      v.style.display = "block";
  } else {
      v.style.display = "none";
  }
} 


const Filters = ({ onClickAll, all, onClick, filters }) =>
  <>
    <Row>
      <Col lg={2} xs={6} className="DropdownFilter views">
        {/* < DropdownFilter /> */}
        <select className="dropdown dropdown__text">
          <option>All</option>
          <option>Following</option>
        </select>
      </Col>
      <Col lg={8} xs={12} className="categories">  

      <Box>
      <form class="GalleryForm">
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
        </form>
      </Box> 
      </Col>
      <Col lg={2} xs={6} className="DropdownFilter settings "> 
          <Button  onClick={handleClick} variant="contained" color="default" className="Btn_Filter"><img style={{ paddingRight: 10 }} src={Filter} />Filter</Button> 
      </Col>
    </Row>
    <div id="FilterDropdowns" style={{display:'none'}}>
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

  </>

const Cards = ({ imgs }) => {

  // const [open, setOpen] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [x, setX] = useState(0)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));

  const handleClickOpen = (img, i) => {
    setOpen(true);
    var popupimg = img.src 
    setX(i);
  };

  const styles = (theme) => ({
    root: {
      fontFamily: 'Muli',
      margin: 0,
      padding: theme.spacing(0),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      zIndex: 1,
      color: theme.palette.grey[500],
    },
  });


  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            {/* <CloseIcon className="test"/> */}
            <img src={Close} /> 
  
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const handleClose = () => {
    setOpen(false);
  };

  return (

    <>
      <div className="GalleryTitle">
        <h2 className={All.paddingbottom}>Search Item Name</h2> 
      </div> 
      <ul>
        {imgs.map(
          (img, i) =>
            <li key={i}>

              {img.tag === 'Images' ? (
                <div>
                  <figure>
                    <div class="content-overlay" onClick={handleClickOpen.bind(this, img, i)} ></div>
                    <a href={img.src} data-gallery="gallery">
                      <img className="GalleryImg" src={img.src} alt={img.author} />
                    </a>
                    {/* <Link to="/" data-toggle="lightbox"> 
                                <img className="GalleryImg" src={img.src} alt={img.author} />
                              </Link> */}
                    <figcaption>
                      <span className="FSize_14 Profile_icon">{img.author} </span>
                      <span className="LikeIcon MuliLight"> <FormControlLabel className="MuliLight" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} label={img.like} /></span>
                    </figcaption>
                  </figure>
                </div>
              ) : img.tag === 'Videos' ? (
                <div>
                  <figure>
                    <div class="content-overlay-video" ></div>
                    <video className="GalleryImg"  onClick={handleClickOpen.bind(this, img, i)} >
                      <source src={img.src} type="video/mp4" />
                      <source src={img.src} type="video/ogg" />
                    </video>

                    <figcaption>
                      <span className="FSize_14 Profile_icon">{img.author} </span>
                      <span className="LikeIcon MuliLight"> <FormControlLabel className="MuliLight" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} label={img.like} /></span>
                    </figcaption>
                  </figure>
                </div>
              ) : img.tag === '360° Images' ? (
                <div>
                  <figure>
                    <div class="content-overlay" onClick={handleClickOpen.bind(this, img, i)} ></div>
                    <a href={img.src} data-gallery="gallery">
                      <img className="GalleryImg" src={img.src} alt={img.author} />
                    </a>
                    {/* <Link to="/" data-toggle="lightbox"> 
                              <img className="GalleryImg" src={img.src} alt={img.author} />
                            </Link> */}
                    <figcaption>
                      <span className="FSize_14 Profile_icon">{img.author} </span>
                      <span className="LikeIcon MuliLight"> <FormControlLabel className="MuliLight" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} label={img.like} /></span>
                    </figcaption>
                  </figure>
                </div>
              ) : img.tag === '3D Models' ? (
                <div>
                  <figure>
                    <div class="content-overlay" onClick={handleClickOpen.bind(this, img, i)} ></div>
                    <a href={img.src} data-gallery="gallery">
                      <img className="GalleryImg" src={img.src} alt={img.author} />
                    </a>
                    {/* <Link to="/" data-toggle="lightbox"> 
                              <img className="GalleryImg" src={img.src} alt={img.author} />
                            </Link> */}
                    <figcaption>
                      <span className="FSize_14 Profile_icon">{img.author} </span>
                      <span className="LikeIcon MuliLight"> <FormControlLabel className="MuliLight" control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} label={img.like} /></span>
                    </figcaption>
                  </figure>
                </div>
              ) : (
                        <div>
                        </div>
                      )}
            </li>)}
      </ul>
  

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}  maxWidth={'md'} fullWidth={fullScreen}>
      {/* <DialogTitle onClose={handleClose}  > */}
        <Carousel showThumbs={false} showIndicators={false} showStatus={false} 	showIndicatorNumber	={false} useKeyboardArrows={true} infiniteLoop={false} selectedItem={x}>
          {imgs.map(
            (img, i) =>
            <>
              <div className={All.Desktop_popup}>   
              <PopupDestkop Item key={i} item={img} />
               </div>  
              <div className={All.Mobile_popup}>
                <Popup_moblie Item key={i} item={img}/> 
                </div>  
            </>
          )}
        </Carousel>
        {/* </ DialogTitle> */}
      </Dialog> 
    </>
  );
}  

class Search extends React.Component {
  state = {
    imgs,
    filters,
    all: true
  };

  setFilter = (e) => {
    e.preventDefault();
    const { filters, all } = this.state;
    const { index } = e.currentTarget.dataset;

    filters[index].status = !filters[index].status;
    this.setState({
      filters
    });

    this.updateFilters();
    this.updateImgs();
  }

  setAll = () => {
    const { filters } = this.state;

    filters.forEach(
      filter => {
        filter.status = false;
      }
    );

    this.setState({
      all: true,
      filters
    });
  }

  updateFilters() {
    const allFiltersTrue = filters.every(filter => filter.status === true);
    const allFiltersFalse = filters.every(filter => filter.status === false);

    if (allFiltersTrue || allFiltersFalse) {
      this.setAll();
    } else {
      this.setState({
        all: false
      });
    }
  }

  updateImgs() {
    const { filters, all } = this.state;
    let newImgs = [];
    let a = 0;

    imgs.forEach((img, imgKey) => {
      filters.forEach((filter, filterKey) => {
        if ((img.tag == filter.name) && (filter.status == true)) {
          newImgs[a] = img;
          a++;
        }
      })
    });

    this.setState({
      imgs: newImgs
    });
  }

  render() {

    const { filters, all } = this.state;
    return (
      <> 

<Header />
<section>
      <Container className={All.Container}>
          <Row>
              <Col>   
                  <Box className={All.FormGroup} py={4}>
                    {/* <input type="text" className={All.FormControl} name="search" placeholder="Search item name"/> */}
                    <form className={All.DisplayFlex}  action="http://localhost:3000/member" method="GET"> 
                    <SearchBar className={All.SearchBar} />
                    <DropdownFilter />
                    </form>
                  </Box>
              </Col> 
          </Row>
      </Container>
  </section>


      <section>
        <Container className={All.Container}>
          <Row>
            <Col>
            <div class="Filters">
        <Filters
          onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters} />
        {(all) ? (
          <Cards imgs={imgs} />
        ) : (
            <Cards imgs={this.state.imgs} />
          )}
      </div>
            </Col>
          </Row>
        </Container>
      </section>
    

      </>
    );
  }
}


export default Search