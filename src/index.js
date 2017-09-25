module.exports = function zeros(expression) {
  	
  var arr3 = expression.split(/[^0-9]/i); //преобразуем строку в массив
			
  var d = arr3.map(Number); //преобразуем строку в числовой массив, где !=0
	
  var count = 0; // инициируем счетчик нулей;
//  var sum = 0;
  var n = 0;  //число по которому будем проводить рассчет
  var f = 0; //число в массиве
  var fType = 0;  // шаг для расчета числел в фактериале, если !=1, если !!=2 
 // var count = {count2:0, count5:0}; //объект для хранения количества чисел 2 и 5
  var count2 = 0;
  var count5 = 0;
  var result = [0,0];
  console.log(result);
  
  for (var i = 0; i<d.length; i++){
  
	//f = d[i];
	
	if(d[i]>0){                    //при условии, что встретим нужное число 
		f = d[i];
		var fn = d[i+1];    // следующее за положительным числом
		
		if(fn==0){   //проверяем сколько нулей за нашим число 
			
			var next = i+1; // проверяем какой это элемент в массиве
			
			if(next==d.length-1){   //если ноль последний элемент 
				fType = 1;
			}
			else{           //определяем число по которому будет рассчет для двойных
				nextf = d[i+2];
				if(nextf==0){       //число для двойных !!
					fType = 2;	
					//n = f; 
				}
				else{               //число если один !
					fType = 1; 
				}
			}
						
			for (var j = f; j > 0; j = j - fType) {
				var x = j;
				while ((x % 2) == 0) {
				  x = x / 2;
				  count2++;
				  console.log(count2);
				 result[0] = count2;
				}
				while ((x % 5) == 0) {
				//console.log(x);
				  x = x / 5;
				 count5++;
				 console.log(count5);
				result[1] = count5;
				}
				
			}
			
		}
		
		
	}
	//else{                    //нули нам не нужны, переходим на следующий элемент
	//	f = d[i+1];
	//}
  }
	console.log(result);
	if (result[0] >= result[1]) {
		return result[1];
		} 
	else {
		return result[0];
		}

}
