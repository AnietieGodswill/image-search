import React, {Component} from "react"
import './imagesearch.css'
const imgq = (props) => {
    return (
        <div className = "imageSearch">
            <form onSubmit = {props.handleGet}>
                <div className ="searchbox">
                    <input type="text" autoComplete="off" name="searchvalue" placeholder ="Search for images"></input>
                <button>Search</button>
                </div>
        </form>
      </div>
    )
}
export default imgq