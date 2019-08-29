var superToken = getUrlParam('super_token');

function getData () {
    $.get("www.newbrandser.com/api/ti_xian_backend",function(data,status){
        // JSON.parse(data)
        console.log(data)
    });
}




