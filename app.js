var coderFlag;
var javaFlag;
var javaFlagAttemp2;
var flag = prompt('Do you want to guess about me?');



console.log('Do you want to guess about me? ',flag);
if(flag.toLowerCase() === 'yes' || flag.toLowerCase() === 'y'){
    coderFlag=prompt('Nice. Do you think i write code?');
    console.log('Do you think i write code?: ',coderFlag);
    if(coderFlag.toLowerCase()==='yes' || coderFlag.toLowerCase()==='y'){
        javaFlag=prompt('Yes i am coder. Do you think i am java programmer?');
        console.log('Do you think i am java programmer?: ',javaFlag);
        if(javaFlag.toLowerCase()==='yes' || javaFlag.toLowerCase()==='y'){
            alert('Yes, I am Java Programmer.');
        }else if (javaFlag.toLowerCase()==='no' || javaFlag.toLowerCase()==='n'){
            alert('your guess is incorret. I am a Java Programmer');
            console.log('The guess is correct. I am a Java Programmer');
            javaFlag = prompt('so now you know i am java programmer so enter yes');
            if (javaFlag.toLowerCase()==='yes' || javaFlag.toLowerCase()==='y') {
                alert('Yes, I am Java Programmer. Great thank you');
                console.log('Second attempt guess. user entered yes');
            }
        }

    }else if(coderFlag.toLowerCase()==='no' || coderFlag.toLowerCase()==='n'){
        alert('you guess is incorrect. I am a Java programmer. Guess it again');

    }
}
else if(flag.toLowerCase() === 'no' || flag.toLowerCase() === 'n'){
console.log('Do you want to guess about me? ',flag);
alert('i do not like you');
flag = prompt('Do you want to guess about me?');
}
