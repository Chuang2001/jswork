//创建副本
var  arr =[1,2,3,4,2,5,6,2,7,2];
//显示数组
document.getElementById('array').innerHTML =arr.toString()
//index表示新数组newarr的下标，默认为0
var index = 0, newArr = [];
//遍历数组
for(var i in arr ){
  //数组元素不等于2，将其保存到newarr中
    if (arr[i] !=2){
        newArr[index] = arr[i];
        ++index;

    }
}
//显示提取后的数组
 document.getElementById('transArray').innerHTML = newArr.toString()