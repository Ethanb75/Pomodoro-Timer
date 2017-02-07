import React from 'react';
import Clock from 'Clock';
import StopWatchForm from 'StopWatchForm';
import Controls from 'Controls';

var StopWatch = React.createClass({
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
                case "stopped":
                    this.setState({count: 0});
                case "paused":
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function() {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function(){
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
               count: newCount >= 0 ? newCount: 0
            });

        },1000)
    },
    handleSetCountdown: function( seconds ){
        this.setState({
            count: seconds,
            countdownStatus: 'started'
      })
    },
    handleStatusChange: function(newStatus){
        this.setState({
            countdownStatus: newStatus
        });
    },
    render: function(){
        var {count, countdownStatus} = this.state;
        var renderControlArea = () => {
            if(countdownStatus !== 'stopped'){
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
            } else {
                return <StopWatchForm onSetCountdown={this.handleSetCountdown} />
            } 
        }
        return (
            <div>
                <h2 className="text-center page-title">StopWatch</h2>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
   
});
module.exports = StopWatch;