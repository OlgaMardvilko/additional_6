module.exports = function zeros(expression) {
  	
  var arr3 = expression.split(/[^0-9]/i); //преобразуем строку в массив
			
  var d = arr3.map(Number); //преобразуем строку в числовой массив, где !=0

  var f = 0; //число в массиве
  var fType = 0;  // шаг для расчета числел в фактериале, если !=1, если !!=2 
  var count2 = 0; //счетчик для двоек в числе
  var count5 = 0; //счетчик для пятерок в числе
  var result = [0,0];
  //console.log(result);
  
  for (var i = 0; i<d.length; i++){
	
	if(d[i]>0){                    //при условии, что встретим нужное число 
		f = d[i];
		var fn = d[i+1];    // следующее за положительным числом
		
		if(fn==0){   //проверяем сколько нулей за нашим число 
			
			var next = i+1; // проверяем какой это элемент в массиве
			
			if(next==d.length-1){   //если ноль последний элемент 
				fType = 1;
			}
			else{           //определяем число по которому будет рассчет для двойных
				var nextf = d[i+2];
				if(nextf==0){       //число для двойных !!
					fType = 2;	
				}
				else{               //число если один !
					fType = 1; 
				}
			}
						
			for (var j = f; j > 0; j = j - fType) { //высчитываем кол-во двое и пятерок и передаем в массив 
				var x = j;
				while ((x % 2) == 0) {
					x = x / 2;
					count2++;
					result[0] = count2;
				}
				while ((x % 5) == 0) {
					x = x / 5;
					count5++;
					result[1] = count5;
				}
			}		
		}	
	}
  }
	if (result[0] >= result[1]) { //результат зависит от того чего больше в числе двоек или пятерок
		return result[1];
		} 
	else {
		return result[0];
		}
}
