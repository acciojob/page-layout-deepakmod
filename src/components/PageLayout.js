import React from 'react';

function PageLayout({header,footer,children}){

    return(
        <div>
            <header><h1> {header} </h1></header>
            <p> {children} </p>
            <footer><p> &#169; {footer} </p></footer>
        </div>
    )
}

export default PageLayout;