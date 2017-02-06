import React from 'react';
import Clock from 'Clock';
import CountDownForm from 'CountDownForm'
var Timer = React.createClass({
    getInitialState: function(){
        return {count: 0}
    },
    handleSetCountdown: function( seconds ){
        this.setState({
            count: seconds
      })
    },
    render: function(){
        var {count} = this.state;
        return (
            <div>
                <h2 className="text-center page-title">Timer</h2>
                <Clock totalSeconds={count}/>
                <CountDownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        );
    }
   
});
module.exports = Timer;