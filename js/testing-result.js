//Тест конформизма

document.addEventListener('DOMContentLoaded', function () {

    const conformizmBtn = document.getElementById('conformism-btn')
    const creatmBtn = document.getElementById('creat-btn')

    if(conformizmBtn){
        conformizmBtn.addEventListener('click', function () {
            //берем все радио кнопки
            const radio = document.getElementsByTagName('input')
            //делаем два массива с теми вопросами за которые мы присваиваем баллы
            let positive = [2, 4, 6, 7, 8, 9, 12, 13, 15, 17, 18, 19]
            let negative = [1, 3, 5, 10, 11, 14, 16, 20]
            //сюда сохраняем баллы за определенные вопросы
            const result = {
                positive: 0,
                negative: 0
            }

            for(let item in radio){
                let num;
                //отрезаем name у input чтобы знать его номер
                if(radio[item].name && parseInt(radio[item].name.replaceAll('testing', '')) >= 0){
                    num = parseInt(radio[item].name.replaceAll('testing', ''))
                }
            
                //если это вопрос из массива positive с состоянием checked и значением Да, то увеличиваем счетчик за положительные ответы
                if(positive.includes(num) && radio[item].checked && radio[item].value == 'yes'){
                    result.positive++
                }
                //если это вопрос из массива negative с состоянием checked и значением Нет, то увеличиваем счетчик за отрицательные ответы
                if(negative.includes(num) && radio[item].checked && radio[item].value == 'no'){
                    result.negative++
                }
            }

            alert(`Результат: ${result.positive + result.negative}.`)
        })
    }

    //третий тест
    if(creatmBtn){
        creatmBtn.addEventListener('click', function () {
            const checkbox = document.getElementsByTagName('input')
            const initialValue = 0
            let totalMsg = ''
            let arr = []

            for(let item in checkbox){
                if(checkbox[item].checked){
                    arr.push(checkbox[item].value)
                }
            }

            const sum = arr.reduce(
                (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue),
                initialValue
              );

            //   Если человек набрал от 0 до 20 - у человека мало творческого потенциала
            //   Если человек набрал от 21 до 70 - у человека средний уровень развития творческих способностей
            //   Если человек набрал от 71 до 90 - высокий уровень творческих способностей
            
            if(sum > 0 && sum <= 20){
                totalMsg = 'мало творческого потенциала'
            }else if(sum > 20 && sum <= 70){
                totalMsg = 'средний уровень развития творческих способностей'
            }else if(sum > 70 && sum <= 90){
                totalMsg = 'высокий уровень творческих способностей'
            }

            alert(`Ваш результат ${sum}, у вас ${totalMsg}`)

        })
    
    }
    
})