import React, { Component } from "react";

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad:0
    }

    render() {
        return (
            <div>Please leave feedback</div>
        )
    }
}

export default Feedback