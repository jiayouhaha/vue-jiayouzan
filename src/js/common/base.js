/**
 * Created by jimmy on 18/2/8.
 */

import {SuperBase} from 'js/common/super-base.js';  // {SuperBase}  {} 不可少   路径是相对 App.vue

class Base extends SuperBase{
    constructor(){
        "use strict";
        super();

        this.defaultAjaxOptions={
            type:'get',
            resetUrl:true,
            url: '',
            async: true,
            dataType: 'json',
            questring: ''
        };
    }

    sendAjax(options) {

        let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

        let opt = this.copyDeepth(this.defaultAjaxOptions,options);

        return new Promise((resolve, reject) => {
            if(opt.resetUrl) {
                opt.url = window.urlObj.api + opt.url;
            }

            xhr.open(opt.type,opt.url,opt.async);

            xhr.onreadystatechange = ()=>{
                if(xhr.readyState===4){
                    if(xhr.status===200){
                        if(opt.dataType==='json'){
                            const data=JSON.parse(xhr.responseText);
                            resolve(data);
                        }
                    }else{
                        reject(new Error(xhr.status || 'Service is fail.'));
                    }
                }
            };

            xhr.onerror=()=>{
                reject(new Error(xhr.status || 'Service is fail.'));
            };

            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send(opt.questring);
        });
    }
};

export  {Base};