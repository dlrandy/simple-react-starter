import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Counter';
        this.state = {
        	count: 0,
        };
    }
    render() {
        return (
        	<button
        		onClick={() => {
        			this.setState({count: this.state.count + 1});
        		}}
        		>
        	Count: {this.state.count}
        	</button>
        );
    }
}

export default Counter;
