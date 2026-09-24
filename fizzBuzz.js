function fizzBuzz(){
    for(let n = 1; n <=100;n++){
        if(n % 3 === 0 && n % 5 === 0){
            console.log('fizzBuzz');
        }
        else if(n % 3 === 0){
            console.log('fizz');
        }
        else if(n % 5 === 0){
            console.log('Buzz');
        }

        else{
            console.log(n);
        }
    }
}

fizzBuzz();