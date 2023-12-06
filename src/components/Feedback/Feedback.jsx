import React, { Component } from "react";
import css from './Feedback.module.css'

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad:0
    }

    handleIncrement(e) {
        console.log(e)
    }


    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <ul className={css.buttonList}>
                    <li>
                        <button onClick={this.handleIncrement}>Good</button>
                    </li>
                    <li>
                        <button>Neutral</button>
                    </li>
                    <li>
                        <button onClick={this.handleDecrement}>Bad</button>
                    </li>
                </ul>
                <h2>Statistics</h2>
                <ul>
                    <li>Good: {this.state.good }</li>
                    <li>Neutral: {this.state.neutral }</li>
                    <li>Bad: {this.state.bad }</li>
                </ul>

            </div>

        )
    }
}

export default Feedback