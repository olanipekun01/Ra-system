import React, { Component } from 'react'

export default class ActivityItem extends Component {
  render() {
    const { activity } = this.props;
    return (
        <div>
            <div>
                <img src={activity.user.avatar} alt="" />
                {activity.user.name}
            </div>
            <span>{activity.timestamp}</span>
            <p>{activity.text}</p>
            <div>{activity.comments.length}</div>
        </div>
    )
  }
}
