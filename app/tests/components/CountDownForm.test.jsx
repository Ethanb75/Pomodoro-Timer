import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import CountDownForm from 'CountDownForm';

describe('CountDownForm', () => {
    it('Should exist', () => {
        expect(CountDownForm).toExist();
    });
    it('should call onSetCountDown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countDownForm = TestUtils.renderIntoDocument(<CountDownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countDownForm));

        countDownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });
    it('should not call onSetCountDown if invalid seconds entered', () => {
        var spy = expect.createSpy();
        var countDownForm = TestUtils.renderIntoDocument(<CountDownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countDownForm));
        
        countDownForm.refs.seconds.value = 'Poop';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});