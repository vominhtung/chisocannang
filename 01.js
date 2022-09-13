function kiem_tra() {
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    let result = document.getElementById('result');
    let bmi;
    bmi = weight / (height ^ 2);
    if (bmi < 18.5) result.innerHTML = "underweight";
    else if (bmi < 25.0) result.innerHTML = "normal";
    else if (bmi < 30.0) result.innerHTML = "overweight";
    else result.innerHTML = "obese";
}


