import React from 'react';

function PageLayout({header,footer,children}){

    return(
        <div>
            <header><h1> {header} </h1></header>
            <h3> {children} </h3>
            <footer><h3> &#169; {footer} </h3></footer>
        </div>
    )
}

export default PageLayout;