import React from 'react';
import Item from './Item';
import ItemForm from './ItemForm';
import { fetchingItems } from '../actions';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    componentDidMount() {
        let id = localStorage.getItem('user_id')
        console.log('is the id here!', id);
        this.props.fetchingItems();
    }

    render(){
        console.log('userID', this.props.user_id)
        if (!this.props.tech) {
            return <p> Loading.. </p>
        }
    return (
            <div>
                {this.props.isLoggedIn ? <ItemForm /> : null}
                <div>
                    
                    { this.props.tech.map(item => (
                        <Item 
                            item = {item}
                            // key = {item.id}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user_id: state.user_id,
        tech: state.tech,
        loggingIn: state.loggingIn,
        isLoggedIn: state.isLoggedIn,
        error: state.error,
    }
}
export default connect(mapStateToProps, { fetchingItems })(Dashboard);