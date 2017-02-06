import React from 'react';
import Clock from 'Clock';
import PomForm from 'PomForm';
var Pomodoro = React.createClass({
    getInitialState: function(){
        return {
            count: 0,
            countdownStatus: 'stopped'
        }
    },
    componentDidUpdate: function(prevProps, prevState){
        if (this.state.countdownStatus !== prevState.countdownStatus){
            switch (this.state.countdownStatus) {
                case "started":
                    this.startTimer();
                    break;
                // case "stopped":
                //     this.stopTimer();
                //     break;
            }
        }
    },
    startTimer: function(){
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
               count: newCount >= 0 ? newCount: 0
            });
        },1000)
    },
    // stopTimer: function(){

    // },
    handleSetCountDown: function( seconds ){
        this.setState({
            count: seconds,
            countdownStatus: 'started'
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