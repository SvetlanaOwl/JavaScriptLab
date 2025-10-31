const Counter = {   
    Numbers: function() {
    let x = number1.value;
    let y = number2.value;
    //от меньшего к большему
        let text = "";
        let i = x;
            do {
                text += i + " ";
                i++;
            } 
            while (i <= y)
        demo.innerHTML = text;
    //От большего к меньшему
        let textA = "";
        let a = y;
            do {
                textA += a + " ";
                a--;
            } 
            while (a >= x)
        demo1.innerHTML = textA;
    }
}