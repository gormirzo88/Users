import React, {Component} from 'react';
import DetailListInfo from "../DetailListInfo/DetailListInfo";

class ListInfo extends Component{

    render() {
        const {data} = this.props;
        return (
            <div className='box'>{
                data.map(info => {
                    return (  <DetailListInfo key={info.id} info={info} />);
                })
            }
            </div>
        )
    };
};

export default ListInfo;