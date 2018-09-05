import React, {Component} from 'react';

export default class Hello extends Component {
    justtest() {
		let a = 0;
		if(a == 0) {
			console.warn("hello");
		}
	}
	
	render() {
        return (
            <div>
                Hello Component,React!
            </div>
        )
    }
}
