<?php
//подключаем базу данных
require_once('db.php');
//получаем данные из формы
$stream = json_decode(file_get_contents('php://input'));
//записываем кмждый ответ в переменную
$answer_1 = $stream->answer_1;
$answer_2 = $stream->answer_2;
$answer_3 = $stream->answer_3;
$answer_4 = $stream->answer_4;
//формируем sql-запрос
$sql = "INSERT INTO test_4 (answer_1, answer_2, answer_3, answer_4) VALUES (?,?,?,?)";
//выполняем вставку в базу данных
$result = $pdo->prepare($sql)->execute([$answer_1, $answer_2, $answer_3, $answer_4]);

//выводим результат сохранения данных
if($result){
    $result = 'Результат сохранен в базу данных';
    print_r(json_encode($result));
}else{
    $result = 'Не удалось сохранить результат';
    print_r(json_encode($result));
}
?>