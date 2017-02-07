import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Timer from 'Timer'

describe('Timer tests', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });
    describe('handleSetCountdown', () => {
        it('should set state to started and countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Timer />);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe("started");

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();                
            },1001);
        });
        it('should not have a negative number', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Timer />);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();                
            },3001);

        });
        it('should pause countdown on paused status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Timer />);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');

            setTimeout(()=>{
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
                done();
            },1001);
        });
        it('should stop countdown on stopped status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Timer />);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');

            setTimeout(()=>{
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            },1001);
        });
    });
});
