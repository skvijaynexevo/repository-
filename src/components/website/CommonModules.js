import React from 'react'; 
import All from './All.module.css';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'; 
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
import 'react-phone-number-input/style.css'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Header from '../header/Header'


 
export default function CommonModules() {
    const [value, setValue] = useState()
    const [state, setState] = React.useState({
        checkedA: true, 
        checkedB: true, 
        checkedC: true, 
      });
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    return (
        <>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <span>Span Tag</span>
          <p>Paragraph</p>
          <Link href="#" variant="body2"> {'atag'} </Link>
          <p className={All.FSize_12}>Paragraph</p>
          <p className={All.FSize_13}>Paragraph</p> 
          <p className={All.FSize_14}>Paragraph</p>
          <p className={All.FSize_15}>Paragraph</p>
          
          <h1 className={All.TextNeonColor}>Color</h1>
          <h1 className={All.TextCeruleanColor}>Color</h1> 
          <h1 className={All.TextGrayColor}>Color</h1>
          <h1 className={All.TextDrakGrayColor}>Color</h1>
          <h1 className={All.TextBlueColor}>Color</h1> 

          <h1 className={All.BgBlueColor}>BackgroundColor</h1>
          <h1 className={All.BgCeruleanColor}>BackgroundColor</h1> 
          <h1 className={All.BgNeonColor}>BackgroundColor</h1>
          <h1 className={All.BgGrayColor}>BackgroundColor</h1>
          <h1 className={All.BgBlackColor}>BackgroundColor</h1> 
          <h1 className={All.BgGradientColor}>BackgroundColor</h1> 


          <Button variant="contained" className={All.BtnStyle_1}>Load More</Button>
          <Button variant="contained" className={All.BtnStyle_2}>Load More</Button>
          <Button variant="contained" className={All.BtnStyle_3}>Load More</Button>
          <Button variant="contained" className={All.BtnStyle_4}>Load More</Button>
          <Button variant="contained" className={All.BtnStyle_5}>Load More</Button> 


          <form className={All.form} noValidate autoComplete="off"> 
                <div className={All.FormGroup}>
                    <label for="usr">Name:</label>
                    <input type="text" className={All.FormControl} id="usr" />
                </div>
                <div className={All.FormGroup}>
                    <label for="usr">User Name:</label>
                    <input type="text" className={All.FormControl} id="usr" />
                </div>
                <div className={All.FormGroup}>
                    <label for="usr">Email ID:</label>
                    <input type="email" className={All.FormControl} id="usr" />
                </div>
                <div className={All.FormGroup}>
                    <label for="usr">Phone Number (with country code)</label>
                    <PhoneInput className={All.FormControl} placeholder="Enter phone number"  value={value} onChange={setValue}/>
                  </div>
                <div className={All.FormGroup}>
                    <label for="usr">Password:</label>
                    <input type="password" className={All.FormControl} id="usr" />
                </div>  

                <div className={All.FormGroup}>
                    <label for="usr">Job Description:</label>
                    <input type="textarea" className={All.FormControl} id="usr" />
                </div>  

                <div className={All.FormGroup}>
                <FormControlLabel className={All.Checkbox} control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />} label="Full-time"  />
                <FormControlLabel className={All.Checkbox} control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />} label="Part-time"  />
                <FormControlLabel className={All.Checkbox} control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" />} label="Freelanchers"  /> 
                </div>   
           </form>
        </>
    )
}
