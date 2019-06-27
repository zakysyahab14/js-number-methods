let menu = 0;
while(menu == 0) {
    let choose = prompt("do you want to use rounding decimal java scrip? Y. Yes N. NO")
    switch (choose) {
        case 'Y':
            let newNumber = parseFloat(prompt("insert number with a decimal to know the rounding"))
            const num = newNumber
            let numberDecimal = parseInt(prompt("how much decimal u want to display"))
            console.log(num.toFixed(numberDecimal))
            alert(num.toFixed(numberDecimal))
            break;

        case 'N':
            menu = 1;
            break;

    }
}