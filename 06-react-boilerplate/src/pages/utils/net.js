/* @example
    net.ajax({
        url: baseUrl + "get_material_info.fcg",
        param: data,
        type: 'GET',
        success: function(data){
            // alert(data);
        },
        error: function(xhr){
        }
    });

**/

function ajax(options) {
    //console.log(options);
    let xhr = new XMLHttpRequest(),
        url = options.url,
        paramObj = options.param,
        success_cb = options.success,
        error_cb = options.error,
        uploadProgress = options.uploadProgress,
        method = options.type || 'GET';
    method = method.toUpperCase();

    if ("production" != process.env.NODE_ENV && method != 'GET') { //因为json-server是rest的接口；本地测试做个判断
        setTimeout(() => {
            let params = {};
            params.data = {
                status: 1
            };
            console.info(`dev:${options.type}`);
            console.log(JSON.stringify(options.param));
            success_cb && success_cb(params.data);
        }, 500);
        return false;
    } 

    let cgiSt = Date.now();

    let onDataReturn = data => {
        if (data.status > 0) { // 保留
            success_cb && success_cb(data);
        } else {

            error_cb && error_cb(data);
        }
    };

    // 如果本地已经从别的地方获取到数据，就不用请求了
    if (options.localData) {
        onDataReturn(options.localData);
        return;
    }

    try {
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    let data = JSON.parse(xhr.responseText);
                    onDataReturn(data);
                    //success_cb && success_cb(data);
                } else {
                    error_cb && error_cb({
                        retcode: xhr.status,
                        msg: '数据异常'
                    });
                }
            }
        };

        let paramArray = [],
            paramString = '';
        for (let key in paramObj) {
            paramArray.push(key + '=' + encodeURIComponent(paramObj[key]));
        }

        if (method === 'FORM') {
            let formData = new FormData();　　　　
            formData.append('file', paramObj['file']);　　　　
            formData.append('bkn', bkn);
            xhr.upload.onprogress = function(e) {
                if (e.lengthComputable) {
                    uploadProgress(e.loaded, e.total);
                }
            };
            xhr.open('POST', url);
            xhr.withCredentials = true;　　　　
            xhr.send(formData);
        } else if (method === 'JSONP') {
            method = 'GET';

            if (!paramObj['callback']) {
                error_cb && error_cb({
                    ret: -1
                });
            }

            window[paramObj['callback']] = function(data) {
                onDataReturn(data);
            };
            url += (url.indexOf('?') > -1 ? '&' : '?') + paramArray.join('&');
            let script = document.createElement("script");
            let head = document.getElementsByTagName("head")[0];
            script.src = url;
            head.appendChild(script);
        } else {
            if (method === 'GET') {
                url += (url.indexOf('?') > -1 ? '&' : '?') + paramArray.join('&');
            }
            xhr.open(method, url, true);
            xhr.withCredentials = true;
            xhr.setRequestHeader(
                'Content-type', 'application/x-www-form-urlencoded'
            );
            xhr.send(method === 'POST' ? paramArray.join('&') : '');
        }

    } catch (e) {
        console.error(e);
    }
}

let net = {
    ajax
};

export default net;