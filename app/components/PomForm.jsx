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
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <button className="button expanded">Start Pom</button>
                </form>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <button className="button expanded">Start Pom</button>
                </form>
            </div>
            
        );
    }
});
module.exports = PomForm;