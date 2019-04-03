import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions';



class EmployeeList extends Component {

    componentWillMount()
    {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps)
    {
        //nextProps next set of props taht this component will be rendered
        //this.props still old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees })
    {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.employees);
    }

    render()
    {
        console.log(this.props);
        return(
            <View>
                <Text>Employee List!</Text>
                <Text>Employee List!</Text>
                <Text>Employee List!</Text>
                <Text>Employee List!</Text>
                <Text>Employee List!</Text>
                <Text>Employee List!</Text>
                <Text>Employee List!</Text>
            </View>
        );
    }

}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid};
    });

    return {employees};
};


export default connect(mapStateToProps, { employeesFetch })(EmployeeList);