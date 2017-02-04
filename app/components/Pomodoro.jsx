var React = require('react');
import Clock from 'Clock';
var Pomodoro = (props) => {
    return (
        <div>
            <Clock totalSeconds={100} />
        </div>
    );
}
module.exports = Pomodoro;