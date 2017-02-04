import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'

import Clock from 'Clock'

//toExist is from the expect module 
describe('Clock', () => {
    it('Should Exist', () => {
        expect(Clock).toExist();
    });
});
describe('render', () => {
    it('Should render clock to output', () => {
        //set the props here 
        let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
        // find the clock component node, convert to html, and set it equal to $el after running through jQuery
        let $el = $(ReactDOM.findDOMNode(clock));
        let actualText = $el.find('.clock-text').text();
        expect(actualText).toBe('01:02');
    });
});
describe('format seconds', () => {
    it('format seconds', () => {
        //need to render the component so we can call our function format seconds to test
        //render into document takes one argument the jsx caller
        var clock = TestUtils.renderIntoDocument(<Clock />);
        var seconds = 615;
        var expected = '10:15';
        var actual = clock.formatSeconds(seconds);
        expect(actual).toBe(expected);
    });
        it('format seconds when min and secs are less than 10', () => {
        //need to render the component so we can call our function format seconds to test
        //render into document takes one argument the jsx caller
        var clock = TestUtils.renderIntoDocument(<Clock />);
        var seconds = 61;
        var expected = '01:01';
        var actual = clock.formatSeconds(seconds);
        expect(actual).toBe(expected);
    });
});
