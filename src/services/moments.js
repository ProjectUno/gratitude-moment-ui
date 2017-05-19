import axios from 'axios';

var helpers = {
  getMoments: () => {
    return axios({
        method: 'get',
        url: 'http://gratitude-moment.herokuapp.com/moments',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Token token=wlyEUvgTW4lZMH5u5b1OHAtt',
            'Accept' : "*/*"
        }
    })
    .then(response => {
        return response.data
    })
    .catch(error =>{
      return { status: error }
    }) 
  }
}

export default helpers;