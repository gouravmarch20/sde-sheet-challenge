const isPowerTwoBitwise = (num) =>  {
    if(num < 1){
        return false
    }
    return (num & (num - 1)) === 0
}
console.log(isPowerTwoBitwise(44));
console.log(isPowerTwoBitwise(32));
//TODO: https://www.youtube.com/watch?v=SZRG1bmDlx8&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=10&ab_channel=Codevolution