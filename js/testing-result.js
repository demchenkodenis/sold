//Тест конформизма

document.addEventListener('DOMContentLoaded', function () {

    const conformizmBtn = document.getElementById('conformism-btn')

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

        alert(`Результат: ${result.positive + result.negative}. За положительные ответы: ${result.positive} балл(ов). За отрицательные ответы ${result.negative} балл(ов)`)
    })

})