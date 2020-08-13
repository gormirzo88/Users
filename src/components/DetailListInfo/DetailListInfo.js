import React from "react";
import {Link} from "react-router-dom";

const DetailListInfo = ({ info }) => {
    let avatar_url, login, server, name = '' ;
    if (!info.owner){
        avatar_url = info.avatar_url;
        login = info.login;
        server = 'users';
    } else {
        avatar_url = info.owner.avatar_url;
        login = info.owner.login;
        name = info.name;
        server = 'repos';
    }
    return (
        <div>
            <img src={avatar_url} alt={`foto ${login}`} />
            <Link to={`${server}/${login}/${name}`} className='info-link'>{login}</Link>
        </div>
    );
};

export default DetailListInfo;