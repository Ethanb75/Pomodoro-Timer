var React = require('react');
var About = (props) => {
    return (
            <div>
                <h1 className="text-center page-title">About</h1>
                <p>
                   About the Application:
                </p>
                <p>This simple application includes a countdown timmer, a Pomodoro timer, as well as a StopWatch. It's a single page application made using React and Express.</p>
                <p>Some tools i used:</p>
                <ul>
                    <li><strong>React-router:</strong> to route the individual application pages.</li>
                    <li><strong>Foundation</strong>: as a front end framework, styled with scss.</li>
                    <li><strong>Karma, Mocha, Expect:</strong> to test individual react components.</li>
                    <li><strong>Webpack:</strong> to bundle my modules.</li>
                    <li><strong>Babel:</strong> to compile my jsx files.</li>
                    <li><strong>Git:</strong> to track version control.</li>
                    <li><strong>Heroku:</strong> to host my application.</li>
                </ul>

            </div>
           
       );     
};
module.exports = About;