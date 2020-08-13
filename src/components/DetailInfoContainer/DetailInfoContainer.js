import React, { useEffect } from 'react';
import { useDispatch, useSelector} from "react-redux";

import { LoadData } from '../../store/users/actions';
import DetailInfo from "../../components/DetailInfo";


const DetailInfoContainer = (props) => {

    const { data} = useSelector(state => state.data.detail);
    const dispatch = useDispatch()

    const getServerName = () => {
        const serverName = props.match.path.split('/');
        let server;
        serverName[1] === 'users' ? server = 'users': server = 'repos';
        return server;
    }

    const handleSubmit = (data) => {
        dispatch(LoadData(data))
    };


    useEffect(() => {
        let params = props.match.params;
        params = {
            ...params,
            server:getServerName(),
        }
        handleSubmit(params)
    },[]);

   
    return (
        <div>
            <DetailInfo data={data} />
        </div>
    );

};


export default DetailInfoContainer;


