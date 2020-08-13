import React, { Component } from 'react';
import { connect } from 'react-redux';

import queryString from 'query-string';

import { getData } from '../../store/users/actions';
import FilterBox from '../../components/FilterBox';
import ListInfo from "../../components/ListInfo";

class ServerList extends Component {

    state = {
        filterData:{
            page: 1,
            searchName: '',
            server:this.getServerName()
        }
    };

    componentDidMount() {
        if(this.useQuery().page !== undefined) {
            const {searchName, page} = this.useQuery();
            this.setState(({state}) => ({
                filterData: {
                    searchName,
                    page: page,
                    server:this.state.filterData.server
                }
            }))
            this.handleSubmit(this.useQuery())
        }

    }

    useQuery() {
        let searchName;
        const query = queryString.parse(this.props.location.search);
        this.state.filterData.server === 'users' ? searchName = query.userName  : searchName = query.reposName;
        const  {page} = query;

        return ({
            page,
            searchName:searchName,
            server:this.state.filterData.server
        })

    }

    setServerName =  data =>{
        this.setState(state => ({
            filterData: {
                ...state.filterData,
                server:data
            },
        }));
    };
    getServerName() {
        const serverName = this.props.match.path.split('/');
        let server;
        serverName[1] === 'users' ? server = 'users': server = 'repositories';
        return server;
    }

    render() {
        const { loaded, data, error } = this.props.data;
        const {filterData} = this.state;
        const query = this.useQuery() ;

        if (!loaded) {
            return 'loading';
        }

        return (
            <div className='container'>
                <div>
                    <FilterBox  data={filterData}
                                onUpdateData={this.handleUpdateData}
                                onSubmit={this.handleSubmit}
                                query = {query}
                                setServerName={this.setServerName}/>
                    {error? `Serveri het xntir ka -(${error}) Miqich heto porci BraAAaaaat`: null}
                </div>
                <div>
                    { query.page === undefined ? '': <ListInfo data={data} server={filterData.server} />}
                </div>
            </div>
        );
    }

    handleSubmit = (data) => {
        this.props.getData(data);
    };

    handleUpdateData = data => {
        this.setState(state => ({
            filterData: {
                ...state.filterData,
                ...data,
            },
        }));
    };
}

function mapStateToProps(state) {
    return {
        data: state.data.list,
    };
}

const  mapDispatchToProps = (dispatch)=> {
    return{
        getData: (data)=>getData(dispatch)(data)
    }
};

export default  connect(mapStateToProps, mapDispatchToProps) (ServerList);
