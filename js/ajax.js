document.addEventListener('DOMContentLoaded', function () {

    // Пример отправки POST запроса:
    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
        });
        return await response.json();
    }
    
    //кнопки отправки
    const conjunctureBtn = document.getElementById('conjuncture-btn')
    const cwamBtn = document.getElementById('cwam-btn')

    //отправка даннных первого теста
    if(conjunctureBtn){
        conjunctureBtn.addEventListener('click', function () {
            const textareas = document.getElementsByTagName('textarea')
            //проверяем на пустоту все textarea
            for (let item in textareas){
                if(textareas[item].value == ''){
                    alert('Все решения должны быть заполнены')
                    return
                }
            }
    
            postData('php/test_1.php', { 
                        answer_1:  textareas[0].value,
                        answer_2:  textareas[1].value,
                        answer_3:  textareas[2].value,
                        answer_4:  textareas[3].value,
                    })
                    .then((data) => {
                        alert(data); // JSON data parsed by `response.json()` call
                    });
        })
    }
    

    if(cwamBtn){
        cwamBtn.addEventListener('click', function () {
            
            const inputs = document.getElementsByTagName('input')
            const textarea = document.getElementById('answer-3')
            //проверяем на пустоту все textarea
            for (let item in inputs){
                if(inputs[item].value == ''){
                    alert('Все решения должны быть заполнены')
                    return
                }
            }
    
            postData('php/test_4.php', { 
                        answer_1:  inputs[0].value,
                        answer_2:  inputs[1].value,
                        answer_3:  inputs[2].value,
                        answer_4:  textarea.value,
                    })
                    .then((data) => {
                        alert(data); // JSON data parsed by `response.json()` call
                    });
        })
    }
    
})