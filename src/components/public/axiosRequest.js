import axios from 'axios'
import qs from 'qs';
let request = {
    public_requests(type,url,data,dataType,header,successFunction,failFunciton,errFunction){
        return new Promise(()=>{
            this._request(type,url,data,dataType,header,successFunction,failFunciton,errFunction)
        })
    },
    _request(type,url,data,dataType,header,successFunction,failFunciton,errFunction){
        let _data = ''
        if(header == 'application/x-www-form-urlencoded'){
            _data = qs.stringify(data)
        }else if(header == 'application/json'){
            _data = JSON.stringify(data)
        }
        axios({
            method : type,
            url : url,
            data : _data,
            headers:{
                "content-type" : header
            }
        }).then(res => {
            if(!dataType){
                successFunction(res.data)
                return ;
            }
            if(res.data.code == 0){
                successFunction(res.data)
            }else{
                failFunciton(res.data)
            }
        }).catch(err => {
            errFunction(err)
            console.log(err)
        })
    }
}

export default {
	request
};