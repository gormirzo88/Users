import React from 'react';
import {Link} from "react-router-dom";

const FilterBox = ({ data, onUpdateData, onSubmit, query, setServerName }) => {
    let serverName;
    const server = data.server;
    ( server === 'users' ) ? serverName= 'users?userName=': serverName= 'repos?reposName=';
    return (
        <div>
            <div>
                <Link
                    to={`users`}
                    className='btn'
                    onClick={() => setServerName('users') }>
                    Users
                </Link>
                <Link
                    to={`repos`}
                    className='btn'
                    onClick={() => setServerName('repositories') }>

                    Repos
                </Link>
            </div>
            <div>
                <input
                    type="text"
                    value={data.searchName}
                    onChange={e =>
                        onUpdateData({
                            searchName: e.target.value,
                        })
                    }
                />

                <Link
                    to={`${serverName}${data.searchName}&page=1`}
                    onClick = {() => {
                        const page = 1
                        onUpdateData({
                            page,
                        });

                        onSubmit({
                            ...data,
                            page,
                        });
                    }}
                    className={`btn  ${ data.searchName  === ''  ? 'disable': null}`}>
                    Search
                </Link>
            </div>
            <div className='panel'>
                <Link
                    to={`${serverName}${data.searchName}&page=${(data.page) - 1 }`}
                    type="button"
                    onClick = {() => {
                        const page = Math.max(data.page -1, 1);
                        onUpdateData({
                            page,
                        });

                        onSubmit({
                            ...data,
                            page,
                        });
                    }}
                    className= {`btn  ${ (+data.page)  === 1 || data.searchName === ''  ? 'disable': null}`}  >
                    Prev
                </Link>

                <Link
                    to={`${serverName}${data.searchName}&page=${(+data.page) + 1 }`}
                    type="button"
                    onClick = {() => {
                        const page = Math.min((+data.page) + 1, 5);
                        onUpdateData({
                            page
                        });

                        onSubmit({
                            ...data,
                            page
                        })
                    }}
                    className={`btn ${ ((+data.page)===  5 || query.page ===undefined || data.searchName === '' )  ? 'disable': null}`}>
                    Next
                </Link>
            </div>
        </div>
    );
};

export default FilterBox;
