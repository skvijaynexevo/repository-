import React from 'react'
import { Helmet } from "react-helmet";
import All from '../website/All.module.css'
import { Container, Row, Col } from 'react-grid-system';
import Box from '@material-ui/core/Box'; 
import Button from '@material-ui/core/Button';
import Placeholder from '../images/placeholder.png'
import Calendar from '../images/calendar.svg'
import Pin from '../images/pin.svg'
import { useForm } from "react-hook-form"; 
import { Subscriptions } from '@material-ui/icons';
import { Link } from 'react-router-dom'; 
import Icon from '@material-ui/core/Icon';
import axios from 'axios'
import Header from '../header/Header'

const API_URL = 'https://demo-nexevo.in/vijay';
  
export default class HiringDorners extends React.Component { 
    
    constructor(props) {
        super(props);
    
        this.state = { 
          blog: [],
          blogcategories: [],
          visible: 6,
          error: false
        };
    
        this.loadMore = this.loadMore.bind(this);
      }
    
      loadMore() {
        this.setState((prev) => {
          return {visible: prev.visible + 8};
        });
      }
 

      componentDidMount() {
        const url = `${API_URL}/blog`;
        const urls = `${API_URL}/blogcategories`;
        axios.get(url).then(res => res.data)
        .then((data) => {
          this.setState({ blog: data }) 
         })

         axios.get(urls).then(res => res.data)
         .then((datas) => {
           this.setState({ blogcategories: datas }) 
          })
      } 
 
      
    render() { 

    // const onSubmit = (data) => {
    //     console.log(data);
    // } 
    // const { register, handleSubmit, errors } = useForm();

    return (
        <>
            <Helmet>
                <title>Blog Category</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Nested component" />
            </Helmet>

            <Header />
            <section className={All.BlogDeatail}>
                <Box p={4} textAlign={'center'}>
                    <h2 className = {All.BlogDeatailTitle}>Blog Catagories</h2> 
                </Box> 

                <Container className={All.Container}>               
                    <Row>
                        <Col md={8}>
                            <Row>

                            {this.state.blog.slice(0, this.state.visible).map((item, index) => {
                return (
                    <> 
                                 <Col md={6} className={All.Blog}>
                                    <Link to="/BlogDetail">
                                        <div className={All.ListBlogs}>
                                            <img class={All.BlogImage} src={Placeholder} width="100%"></img>
                                            <div className={`${All.Bgcolordynamic} ${All.Content}`}>
                                                <h6>Blog Title 1</h6>
                                                <p className={All.BlogDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                                <span className={All.PublishedDate}> <img src={Calendar}></img> 24 Jul 2020</span>
                                                <span className={All.Location}> <img src={Pin}></img> Bangalore </span>                                            
                                            </div>
                                        </div>    
                                    </Link>
                                </Col>

                                </> 
                );
              })} 

                            </Row>

                            {this.state.visible < this.state.blog.length && 
               <Box py={6} textAlign={'center'}>
               <Button variant="contained" color="default" type="submit" onClick={this.loadMore} className={All.BtnStyle_5}>
                   <img style={{paddingRight:10}}   />
                   Load More</Button>    
               </Box> 
            } 

                        </Col>



                        <Col md={4}>
                            <div className={All.BlogDeatailSidebar}>
                                <Box className={All.Subscription}>
                                    <h4>Subscribe Info for Latest Update</h4>
                                    <p className= {` ${All.FSize_14} ${All.SubscribeDesc} `} >Lorem Ipsum is simply dummy text of the printing</p>
                                    <form>
                                    {/* <form className={All.form} onSubmit={handleSubmit(onSubmit)}> */}
                                        {/* <div className={All.FormGroup}>
                                        <input type="email" name="email" className={All.FormControl} id="subscription" placeholder="E-mail Address" ref={register ({ required : true ,pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,  message: "invalid email address"  }}) } />
                                            {errors.email && errors.email.type === "required" && <p class="error">This is required field</p>}
                                            {errors.email && errors.email.type === "minLength" && <p class="error">This is field minLength 2</p>}
                                            {errors.email && errors.email.message  && <p class="error">Invalid email address</p>}
                                        </div>  */}
 
                                        <div className={All.FormGroup}> 
                                            <Button variant="contained" color="default" type="submit"  className={All.BtnStyle_3}>Subscribe</Button>   
                                        </div>   

                                    </form>
                                </Box> 
                                
                                <Box pb={2} className={`${All.Catagories} ${All.SpaceBox}`} > 
                                    <h4 className={All.BorderBottom}>Categories</h4>
                                    {this.state.blogcategories.slice(0, this.state.visible).map((item, index) => { 

                                        return (
                                            <> 
                                                <Link to="/"> <span className= {`${All.BtnStyle_4} ${All.BlogBtn}`} >{item.blogcategories} </span></Link>       
                                                </> 
                                                );
                                        })}              

                                </Box> 
                                <Box pb={2} className={All.Trending} > 
                                    <h4 className={All.BorderBottom}>Trending</h4>

                                    {this.state.blog.slice(0, this.state.visible).map((item, index) => {
                return (
                    <> 
                                    <Link to="/"> 
                                        <div className={All.posts}>
                                            <div className={All.ImageDiv}><img src={Placeholder}></img></div>
                                            <div className={All.ContentDiv}>
                                                <h6>{item.blogtitle}</h6>
                                                <p>{item.blogsubtitle}</p>
                                            </div>
                                        </div>
                                    </Link>
                                    
                             </> 
                );
              })}
                
                                </Box>
                                
                            </div>
                        </Col>
                        
                    </Row>
                    
                </Container>
              
            </section>
        </>
    )
}
}