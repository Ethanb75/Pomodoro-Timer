import React from 'react';
var StopWatchForm = React.createClass({
    onSubmit: function(e){
        e.preventDefault();
        var strSeconds = 0;
        // this.refs.seconds.value = '';
        this.props.onSetCountdown(strSeconds);

    },
    render: function(){
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <button className="button expanded">Start StopWatch</button>
                </form>
            </div>
            
        );
    }
});
module.exports = StopWatchForm;