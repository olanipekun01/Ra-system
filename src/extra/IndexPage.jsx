import React, { Component } from 'react'
import Content from './Content'
import Header from './Header'

import avatar1 from '../assets/image8.png';
import avatar2 from '../assets/image9.png';
import avatar3 from '../assets/image12.png';
import avatar4 from '../assets/Mouth.png';
import avatar5 from '../assets/image8.png';
import Footer from './Footer';

const activities = [
    {
        timestamp: new Date().getTime(),
        text: "Ate lunch",
        user: {
            id: 1, name: 'Nate',
            avatar: avatar1
        },
        comments: [{ from: 'Ari', text: 'Me too!' }]
    },
    {
        timestamp: new Date().getTime(),
        text: "Woke up early for a beautiful run",
        user: {
            id: 2, name: 'Ari',
            avatar: avatar2
        },
        comments: [{ from: 'Nate', text: 'I am so jealous' }]
    },
    {
        timestamp: new Date().getTime(),
        text: "fullstackreact/react-yelp-clone",
        user: {
            id: 3, name: 'vigosan',
            avatar: avatar3
        },
        comments: [{ from: 'Nate', text: 'I am so jealous' }]
    },
    {
        timestamp: new Date().getTime(),
        text: "fullstackreact/react-native-",
        user: {
            id: 4, name: 'Cavemen',
            avatar: avatar4
        },
        comments: [{ from: 'Nate', text: 'I am so jealous' }]
    },
    {
        timestamp: new Date().getTime(),
        text: "fullstackreact/react-native-",
        user: {
            id: 5, name: 'James',
            avatar: avatar5
        },
        comments: [{ from: 'Nate', text: 'I am so jealous' }]
    },
];

export default class IndexPage extends Component {
    constructor(props) {
        super(props);

        this.state = { refreshing: false };
    }

    // Bound to the refresh button
    refresh() {
        this.setState({ refreshing: true });
    }

    // callback from the 'Content component
    onComponentRefresh() {
        this.setState({ refreshing: false });
    }
    render() {
        const { refreshing } = this.state;
    return (
        <div>
            <div>
                <Header title="Profile"/>
                <Content
                    onComponentRefresh={this.onComponentRefresh.bind(this)}
                    requestRefresh={refreshing}
                    data={activities} />
                <Footer>
                    <button onClick={this.refresh.bind(this)}>
                        Refresh
                    </button>
                </Footer>
            
            </div>
      </div>
    )
  }
}
