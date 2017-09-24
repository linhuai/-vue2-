var Mock = require('mockjs');
var data = Mock.mock('/mock',function(){
    return{
        data: ['a','b']
    }
})