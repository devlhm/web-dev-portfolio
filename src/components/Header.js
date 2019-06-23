import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <div id="header">
                <div id="header-content">
                    <div id="logo"><p>Luis Henrique</p></div>
                    <ul>
                        <li id="active"><span>about me</span></li>
                        <li><span>my works</span></li>
                        <li><span>contact</span></li>
                    </ul>
                </div>
                <div id="progress-bar">
                    <div id="progress-fill"></div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let prevScrolled = document.documentElement.scrollTop;

        window.addEventListener("scroll", () => {
            //change progress bar
            const scrolled = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

            const scrolledPercent = ((scrolled / height) * 100) + '%';

            const progressFill = document.getElementById("progress-fill")
            progressFill.style.width = scrolledPercent;

            //hide|show header
            const header = document.getElementById("header");

            if(scrolled > prevScrolled) {
                header.style.top = "-70px";
            } else {
                header.style.top = "0px";
            }

            prevScrolled = scrolled;
        })
    }
}

export default Header;