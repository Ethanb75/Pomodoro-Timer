import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Controls from 'Controls'

describe("Controls tests", () => {
    it("should exist", () => {
        expect(Controls).toExist();
    });
    it("should render pause", () => {
        var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
        var $el = $(ReactDOM.findDOMNode(controls));
        //finds a button that contains the text 'Pause'
        var $pauseButton = $el.find("button:contains(Pause)");

        expect($pauseButton.length).toBe(1);
    });
    it('should render start button', () => {
        var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
        var $el = $(ReactDOM.findDOMNode(controls));
        var $startButton = $el.find("button:contains(Start)");

        expect($startButton.length).toBe(1);
    });
});