import React from "react";

 
const Skeleton = (props) => {
  return(
     // Using Props handleClick as callback function
           <div onClick={()=> props.handleClick(props.rowData)}>
                 <p> test </p>
                 <p> testt </p>
                 <p> testett </p>
            </div>
  );
 } 
export default Skeleton;
