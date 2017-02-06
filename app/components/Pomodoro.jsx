import React from 'react';
import Clock from 'Clock';
import PomForm from 'PomForm';
var Pomodoro = React.createClass({
    getInitialState: function(){
        return {count: 0}
    },
    handleSetCountDown: function( seconds ){
        this.setState({
            count: seconds
        });
    },
    render: function(props){
         var {count} = this.state;
         return (
            <div>
                <h2 className="text-center">Pomodoro Timer</h2>
                <Clock totalSeconds={count} />
                <PomForm onSetCountdown={this.handleSetCountDown}/>
            </div>
        );
    } 
   
});
module.exports = Pomodoro;