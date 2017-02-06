import React from 'react';
var PomForm = React.createClass({
    onSubmit: function(e){
        e.preventDefault();
        var strSeconds = 1500;
        // this.refs.seconds.value = '';
        this.props.onSetCountdown(strSeconds);

    },
    render: function(){
        return (
            <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                <button className="button expanded">Start Pom</button>
            </form>
        );
    }
});
module.exports = PomForm;