import React, { Component } from 'react';

class Presentation extends Component {
    render() {
        return(
            <div id="presentation">
                <div id="presentation-text">
                    <h1 id="greeting">Hello</h1>
                    <p>
                        <span id="name-code">
                            I'm <em>Luis</em>,<br/>
                            a <span id="code">web developer</span><br/>
                        </span>
                        <span id="available">Available for you</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Presentation;