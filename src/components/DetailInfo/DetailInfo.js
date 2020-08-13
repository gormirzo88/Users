import React from 'react';
const DetailInfo = ({ data}) => {

    let name, login, bio, id, location, avatar_url, network_count, type;
    if (!data.owner) {
        name = data.name;
        login = data.login;
        bio = data.bio;
        id = data.id;
        location = data.location;
        avatar_url = data.avatar_url;
    } else {
        name = data.name;
        login = data.owner.login;
        id = data.owner.id;
        avatar_url = data.owner.avatar_url;

        network_count = data.name;
        type = data.owner.type;
    }
    return (
        <div className='info'>
            <img src={avatar_url} alt={`foto ${name}`}/>
            <ul>
                <h2>Name - {name}</h2>
                <li>Login - {login}</li>
                <li>ID - {id}</li>
                <li>{ bio ? `Bio - ${bio}`:`Network Count - ${network_count}`}</li>
                <li>{ location ? `Location - ${location}` : `Type - ${type}`}</li>
            </ul>
        </div>
    )
};


export default DetailInfo;
