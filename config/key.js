//환경변수 
//production이 deploy 한 상황
if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
    //아직 배포를 하지 않은 상황
} else {
    module.exports = require('./dev');
}