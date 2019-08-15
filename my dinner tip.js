fucntion tipNa (cost, ppl, tip, costA, pplA) {
    let tipPer = tip/100;
    //if only costA defined, return 'How many people drank?'
    //if only pplA defined, return 'How much was was the alcohol?'
    if (costA !== undefined && pplA === undefined){
        return 'Please specifiy the number of people drinking'
    }
    if (costA === undefined && pplA !== undefined){
        return 'Please specifiy the price of the alcohol'
    }
    //cost per person without alcohol included costNa = ((cost-costA)/ppl)
    //return this cost without tip, the tip, and with tip

    let costNa = ((cost - costA)/ppl);
    let tipNa = costNa*tipPer;
    let totNa = costNa + tipNa;
    let billNa = ('For those who did not drink:' + costNa + '+' + tipNa + '=' + totNa +);

    if(costA === undefined && pplA === undefined) {
        console.log(billNa);
        return (billNa);
    }
    
    //cost per person drinking costPa = costA/pplA
    if (costA !== undefined && pplA !== undefined){
    let costPa = costNa + (costA/pplA);
    let tipA = costPa*tipPer;
    let totA = costPa + tipA;
    let billA = ('For those who did drink:' + costPa + '+' + tipA + '=' + totA);
    }

    console.log(billNa + '/n' + billA);
    return (billNa + '/n' + billA);



    
   
}