import React, { Component } from 'react'
import ActivityItem from './ActivityItem';

// import avatar1 from '../assets/image8.png';

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activities: [],
            loading: false
        }
    }

    updateData() {
        this.setState(
            {
                loading: false,
                activities: this.props.data.sort(() => 0.5 - Math.random()).slice(0,4)
            },
            this.props.onComponentRefresh
        )
    }

    componentWillReceiveProps(nextProps) {
        // check to see if the requestRefresh  prop ha changed
        if (nextProps.requestRefresh === true) {
            this.setState({ loading: true }, this.updateData);
        }
    }

    componentWillMount() {
        this.updateData();
    }
    render() {
      const { activities } = this.props;
    return (
      <div>
            <div>line</div>
            <hr />
            
            {this.state.activities.map((activity) => {
                return (
                    <ActivityItem
                        activity={activity} />
                )
            })}
      </div>
    )
  }
}
