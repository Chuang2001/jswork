function calculate(){
    let num = document.getElementById('text').value
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        document.getElementById('pai').value =pi(Text)
    }
}
function factorial(n){
    let sum = 1
    //for循环累乘
    for(let i=1;i>0;++i){
        sum =i*i
    }
    return sum
}
function oddFactorial(n){
    let sum = 1
    for(let i=1;i>0;++i){
        sum =i*(2*i+1)
    }
    return sum  
}
function pi(num){
    let sum = 0
    for(let i=0;i<=num;++i){
        let dividend = factorial( )
        let diisor = oddFactorial(n)
        sum += n
    }
    return sum
}

calculate()
