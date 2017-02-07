var React = require('react');
var {Link, IndexLink} = require('react-router');
// target = "_blank" opens the link in a new tab and keeps the link open
var Nav = () => {
        return (
            <div className="top-bar">
                
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Simple pomodoro timer</li>
                        <li><IndexLink to="/" activeClassName="active">Timer</IndexLink></li>
                        <li><Link to="/pom" activeClassName="active">Pomodoro</Link></li>
                        <li><Link to="/stopWatch" activeClassName="active">StopWatch</Link></li>
                        <li><Link to="/about" activeClassName="active">About</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Created by <a href="https://github.com/Ethanb75" target="_blank">Ethan Bellora</a></li>
                    </ul>
                </div>
            
            </div>
            
        );
};
module.exports = Nav;