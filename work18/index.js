function send(){
    let sno = document.getElementById('sno').value
    let name = document.getElementById('name').value
    let content = document.getElementById('content').value
    let xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    //xmlhttp.open('post', 'http://localhost:8080/ajax', true)//测试通过后本行注释
    xmlhttp.open('post', 'http://139.9.81.203:8090/ajax', true)//测试通过后本行取消注释
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send('sno=' + sno + '&name=' + name+"&content="+content)
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status ==200){
            let ajaxData=JSON.parse(xmlhttp.responseText)
            result = ajaxData.reverse().map((val)=>{return JSON.stringify(val)})
            document.getElementById("result").innerHTML = result.join('<br>');
        }
    }
}