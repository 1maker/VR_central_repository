//Ответ: 3.

alert( null || 2 && 3 || 4 );
//Приоритет оператора && выше, чем ||, поэтому он выполнится первым.

Результат 2 && 3 = 3, поэтому выражение приобретает вид:

null || 3 || 4
//Теперь результатом является первое истинное значение: 3.