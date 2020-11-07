import {requestData} from './components/_api'

requestData().then(data => console.log(data)).catch(err => console.error(err));
