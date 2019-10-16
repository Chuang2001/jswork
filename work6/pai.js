function calculate(){
    let num = document.getElementById('num').value
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        document.getElementById('pai').value =pi(num)
    }
}
function factorial(n){
    let sum = 1
    //for循环累乘
    for(let i=1;i<=n;++i){
        sum *=i
    }
    return sum
}
     //for循环累乘
function oddFactorial(n){
    let sum = 1
    for(let i=1;i<=n;++i){
        sum *=(2*i+1)
    }
    return sum  
}
     //累加运算
function pi(num){
    let sum = 0
    for(let i=0;i<=num;++i){
        let dividend = factorial(i )
        let divisor = oddFactorial(i)
        sum +=(dividend/divisor)
    }
    //返回π/2后*2输出
    return sum*2
}

calculate()
