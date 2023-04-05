var Filter = {
    Elements: {
        number1: document.getElementById("number1"),
        number2: document.getElementById("number2"),
        options: document.getElementById("calculater"),
        result: document.getElementById("result")
    },

    Status: {
        number1:"",
        number2:"",
        result:"",
    },

    Acitons: {
        calculate: () => {
            var number1 = Number(Filter.Elements.number1.value);
            var number2 = Number(Filter.Elements.number2.value);
            var options = Filter.Elements.options.value;
            var result = Filter.Status.result;
            if (options === "add") {
                result = number1 + number2;
            }
            else if (options ==="sub"){
                result = number1 - number2;
            }
            else if (options === "divide"){
                result = number1 / number2;
            }
            else if (options === "multiply") {
                result = number1 * number2
            }
            Filter.Elements.result.innerHTML= result;
        },
    }
}