import React from "react";

const date=new Date().getFullYear();

function Footer(){
    return (
        <footer style={{marginTop: "20px"}}>
            <p>Copyright ⓒ {date} <a style={{textDecoration: "none"}} href="https://nipun4338.github.io/">Nipun Paul</a></p>
        </footer>
    );
}

export default Footer;