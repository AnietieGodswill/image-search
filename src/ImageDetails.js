import React from "react"
import './ImageDetails.css'
const imagelist = (props) => {
    
        
    return (
        <div className ="container">    
            {props.images.length > 0 && props.images.map((image) => {
                return (
                <div key = {image.id} className="imageset">
                    <img className= "imagesection" src = {image.largeImageURL} alt={image.tags}></img>
                    <p> Tags: {image.tags} </p>
                    <a href={image.pageURL} target="_blank"><button>DOWNLOAD</button></a>
                    
                </div>
                     )
                    }
                    )}
                <div class="footer">
                    <p>MADE WITH ❤️ Nishant Tiwari</p>
                </div>
            
        </div>
        
    )


}
export default imagelist