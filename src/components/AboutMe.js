import React, { Component } from 'react';
import { ReactComponent as BlueCircle } from '../blue-circle.svg';
import { ReactComponent as BlueTriangle } from '../blue-triangle.svg';

class AboutMe extends Component {
    render() { 
        return (
            <div id="about-me">
                <p>
                    Hi there! My name is Luis Henrique, and, i live in São Paulo, Brazil. I‘m a front-end (and a little back-end too) web developer!<br/>
                    I develop multi-language responsive web apps (like this one, that i’ve also designed). I started developing just for fun, and then i discovered that it is my passion, so i'm always expanding my skill set!
                </p>

                <BlueCircle className="circle" />

                <div id="knowledge-board">
                    <h1>Knowledges</h1>

                    <p>
                        EcmaScript 5/6 (JavaScript) - HTML5 - CSS3 - Sass (Scss) -<br/>
                        React.js - jQuery - Node.js - Webpack - SQL - SQLite3 - Yarn -<br/>
                        NPM - Bash - UI Design - Adobe Illustrator - And more soon!
                    </p>
                </div>

                <BlueCircle className="circle" />

                <BlueTriangle id="triangle" />
            </div>
        );
    }
}
 
export default AboutMe;