
class ApiServis {
    _swapi = 'https://api.github.com/';

     async response(url) {
        const response = await fetch(url);
         if (!response.ok) {
             throw new Error('Ответ сети был не ok.');
         }
        const body = await response.json();
         return body;
     };


    /* USER METHODS */

     getUsersList = (server , q = '', page = 1,  ) =>{
         return this.response(`${this._swapi}search/${server}?q=${q}&page=${page}&per_page=20`);
    }
    getDetail = ( server , name , login = '', ) => {
         return this.response(`${this._swapi}${server}/${name}${login && `/${login}`}`) ;
    }
};

export default new ApiServis();






