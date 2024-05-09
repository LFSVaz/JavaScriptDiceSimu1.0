//Função que ao carregar pagina define variáveis e caixas de seleção// 
function dices() {

	//Preset de informações de certas variáveis e arrays//
    d4_n = 0;
    d6_n = 0;
    d8_n = 0;
    d10_n = 0;
    d12_n = 0;
    d20_n = 0;
    dice_number = 0;
    result_d4 = [];
    result_d4 = [];
    result_d6 = [];
    result_d8 = [];
    result_d10 = [];
    result_d12 = [];
    result_d20 = [];

    //Preset para display nulo de informações e definições ainda não atribuidas pelo usuário//
    document.getElementById("d4_n").style.display = "none";
	document.getElementById("d4_minus").style.display = "none";
	document.getElementById("d4_plus").style.display = "none";

	document.getElementById("d6_n").style.display = "none";
    document.getElementById("d6_minus").style.display = "none";
	document.getElementById("d6_plus").style.display = "none";

	document.getElementById("d8_n").style.display = "none";
	document.getElementById("d8_minus").style.display = "none";
	document.getElementById("d8_plus").style.display = "none";

	document.getElementById("d10_n").style.display = "none";
	document.getElementById("d10_minus").style.display = "none";
	document.getElementById("d10_plus").style.display = "none";

	document.getElementById("d12_n").style.display = "none";
	document.getElementById("d12_minus").style.display = "none";
	document.getElementById("d12_plus").style.display = "none";

	document.getElementById("d20_n").style.display = "none";
	document.getElementById("d20_minus").style.display = "none";
	document.getElementById("d20_plus").style.display = "none";

	//Condicional que define se a caixa de quantidade de dados foi selecionada// 
	if(d4_n == 0){
    	document.getElementById("result_d4").style.display = "none";
    }else {
    	document.getElementById("result_d4").style.display = "inline-block";
    }

    if(d6_n == 0){
    	document.getElementById("result_d6").style.display = "none";
    }else {
    	document.getElementById("result_d6").style.display = "inline-block";
    }

    if(d8_n == 0){
    	document.getElementById("result_d8").style.display = "none";
    }else {
    	document.getElementById("result_d8").style.display = "inline-block";
    }

    if(d10_n == 0){
    	document.getElementById("result_d10").style.display = "none";
    }else {
    	document.getElementById("result_d10").style.display = "inline-block";
    }

    if(d12_n == 0){
    	document.getElementById("result_d12").style.display = "none";
    }else {
    	document.getElementById("result_d12").style.display = "inline-block";
    }

    if(d20_n == 0){
    	document.getElementById("result_d20").style.display = "none";
    }else {
    	document.getElementById("result_d20").style.display = "inline-block";
    }
}

//Função de Interação com seleção de uso de dado d4 e quantidade a ser jogada//
function d4() {

	//Preset da variável do circulo de seleção de dado d4//
	var circle_d4 = document.getElementById("circle_d4");

	//Cria definição de imagem da variável img_d4 e atribui o endereço da imagem//		
	img_d4 = new Image();
	img_d4.src = "img/D4.png";

	//Condicional que identifica se dado d4 foi selecionado para ser jogado com a configuração inicial de 0 na quantidade alem de mudar cor de círculo de seleção e soma de quantidade de todos os tipos de dados selecionados//
	if(dice_number < 10) {
		if(circle_d4.src.endsWith("img/white_circle.png")) {
		    d4_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d4.src = "img/black_circle.png";

        }else {
		    d4_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d4.src = "img/white_circle.png";
		    result_d4 = [];
		}
    }

    //Quando a soma de quantidade de adados chega a 10 se d4 for selecionado mas sua quantidade de dados aida é zero círculo de maração volta a ser branco e caixa de quantidade de dados d4 a serem jogados é escondida// 
   	if(dice_number == 10) {
   	    if(circle_d4.src.endsWith("img/black_circle.png")) {	
   		    d4_n = 0;
	        dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
	        circle_d4.src = "img/white_circle.png";
	        result_d4 = [];
	    }
	}  

	//Condicional que define se o dado d4 foi selecionado exibe as caixa de seleção de quantidade de dados junto aos botões de adição e subtração de quantia//	
	if(circle_d4.src.endsWith("img/black_circle.png")) {
		document.getElementById("d4_n").style.display = "inline-block";
		document.getElementById("d4_n").innerText = d4_n;
		document.getElementById("d4_minus").style.display = "inline-block";
		document.getElementById("d4_plus").style.display = "inline-block";
	}else {
		document.getElementById("d4_n").style.display = "none";
		document.getElementById("d4_minus").style.display = "none";
		document.getElementById("d4_plus").style.display = "none";
	}

	//Transforma botão d4_minus em uma função que quando clicado subtrai em 1 a quantia da caixa de seleção de quantidade de d4 até no minimo 0 e remove em 1 começãndo pela posição inicial do array de result_d4//
	d4_minus.onclick = function(){
		if(d4_n <= 0) {
			d4_n = 0;
		}else {
			d4_n--;
			result_d4.splice(0, 1);
			dice_number--;
		}

		//Limita numero de dados para no maximo 10//
		if(d4_n > 10){
			d4_n = 10;
		}

		//Atualiza id d4_n conforme a variavel d4_n//
		document.getElementById("d4_n").innerText = d4_n;
	}

	//Transforma botão d4_plus em uma função que quando clicado aumenta em 1 a quantia da caixa de seleção de quantidade de d4 até no maximo 10 e adiciona em 1 começãndo pela posição inicial do array de result_d4//
	d4_plus.onclick = function(){
		if(d4_n >= 10) {
			d4_n = 10;
		}

		if(dice_number < 10) {
			d4_n++;
			result_d4.splice(1, 0, img_d4);
			let html_d4 = "";
            result_d4.forEach(function(img) {
                html_d4 += `<img src="${img.src}">`;
            });
            dice_number++;
		}

		//Limita numero de dados para no minimo 1//
		if(d4_n < 1){
			d4_n = 1;
		}

		//Atualiza id d4_n conforme a variavel d4_n//
		document.getElementById("d4_n").innerText = d4_n;

		//Condicional que esconde caixas de seleção de quantidade e muda cores de circulos se dice_number for igual a 10 e as caizas dos dados correspondentes for igual a 0//		
		if(dice_number == 10 && d6_n == 0) {
		    document.getElementById("d6_n").style.display = "none";
		    document.getElementById("d6_minus").style.display = "none";
		    document.getElementById("d6_plus").style.display = "none";
            circle_d6.src = "img/white_circle.png";
	    }

	    if(dice_number == 10 && d8_n == 0) {    
		    document.getElementById("d8_n").style.display = "none";
		    document.getElementById("d8_minus").style.display = "none";
		    document.getElementById("d8_plus").style.display = "none";
            circle_d8.src = "img/white_circle.png";
	    }

	    if(dice_number == 10 && d10_n == 0) {	
		    document.getElementById("d10_n").style.display = "none";
		    document.getElementById("d10_minus").style.display = "none";
		    document.getElementById("d10_plus").style.display = "none";
		    circle_d10.src = "img/white_circle.png";
        }

	    if(dice_number == 10 && d12_n == 0) {	
		    document.getElementById("d12_n").style.display = "none";
		    document.getElementById("d12_minus").style.display = "none";
		    document.getElementById("d12_plus").style.display = "none";
		    circle_d12.src = "img/white_circle.png";
        }

	    if(dice_number == 10 && d20_n == 0) {
		    document.getElementById("d20_n").style.display = "none";
		    document.getElementById("d20_minus").style.display = "none";
		    document.getElementById("d20_plus").style.display = "none";
		    circle_d20.src = "img/white_circle.png";
	    }
    }
}

//Função de Interação com seleção de uso de dado d6 e quantidade a ser jogada//
function d6() {

	//Preset da variável do circulo de seleção de dado d6//
	var circle_d6 = document.getElementById("circle_d6");

	//Cria definição de imagem da variável img_d6 e atribui o endereço da imagem//
	img_d6 = new Image();
	img_d6.src = "img/D6.png";

	//Condicional que identifica se dado d6 foi selecionado para ser jogado com a configuração inicial de 0 na quantidade alem de mudar cor de círculo de seleção e soma de quantidade de todos os tipos de dados selecionados//
	if(dice_number < 10) {
        if(circle_d6.src.endsWith("img/white_circle.png")) {
	    	d6_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d6.src = "img/black_circle.png";

		}else {
		    d6_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d6.src = "img/white_circle.png";
		    result_d6 = [];
		}
	}

	//Quando a soma de quantidade de adados chega a 10 se d6 for selecionado mas sua quantidade de dados aida é zero círculo de maração volta a ser branco e caixa de quantidade de dados d6 a serem jogados é escondida// 
	if(dice_number == 10) {
    	if(circle_d6.src.endsWith("img/black_circle.png")) {
    		d6_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d6.src = "img/white_circle.png";
		    result_d6 = [];
		}
	}

	//Condicional que define se o dado d6 foi selecionado exibe as caixa de seleção de quantidade de dados junto aos botões de adição e subtração de quantia//
	if(circle_d6.src.endsWith("img/black_circle.png")) {
		document.getElementById("d6_n").style.display = "inline-block";
		document.getElementById("d6_n").innerText = d6_n;
		document.getElementById("d6_minus").style.display = "inline-block";
		document.getElementById("d6_plus").style.display = "inline-block";
	}else {
		document.getElementById("d6_n").style.display = "none";
		document.getElementById("d6_minus").style.display = "none";
		document.getElementById("d6_plus").style.display = "none";
	}

	//Transforma botão d6_minus em uma função que quando clicado subtrai em 1 a quantia da caixa de seleção de quantidade de d6 até no minimo 0 e remove em 1 começãndo pela posição inicial do array de result_d6//
	d6_minus.onclick = function(){
		if(d6_n <= 0) {
			d6_n = 0;
		}else {
			d6_n--;
			result_d6.splice(0, 1);
		    dice_number--;
		}

		//Limita numero de dados para no maximo 10//
		if(d6_n > 10){
			d6_n = 10;
		}

		//Atualiza id d6_n conforme a variavel d6_n//
		document.getElementById("d6_n").innerText = d6_n;
	}

	//Transforma botão d6_plus em uma função que quando clicado aumenta em 1 a quantia da caixa de seleção de quantidade de d6 até no maximo 10 e adiciona em 1 começãndo pela posição inicial do array de result_d6//
	d6_plus.onclick = function(){
		if(d6_n >= 10) {
			d6_n = 10;
		}

		if(dice_number < 10) {
			d6_n++;
			result_d6.splice(1, 0, img_d6);
		    let html_d6 = "";
            result_d6.forEach(function(img) {
                html_d6 += `<img src="${img.src}">`;
            });
			dice_number++;
		}

		//Limita numero de dados para no minimo 1//
		if(d6_n < 1){
			d6_n = 1;
		}

		document.getElementById("d6_n").innerText = d6_n;

		//Condicional que esconde caixas de seleção de quantidade e muda cores de circulos se dice_number for igual a 10 e as caizas dos dados correspondentes for igual a 0//		
		if(dice_number == 10 && d4_n == 0) {
		    document.getElementById("d4_n").style.display = "none";
		    document.getElementById("d4_minus").style.display = "none";
		    document.getElementById("d4_plus").style.display = "none";
            circle_d4.src = "img/white_circle.png";
	    }

	    if(dice_number == 10 && d8_n == 0) {    
		    document.getElementById("d8_n").style.display = "none";
		    document.getElementById("d8_minus").style.display = "none";
		    document.getElementById("d8_plus").style.display = "none";
            circle_d8.src = "img/white_circle.png";
	    }

	    if(dice_number == 10 && d10_n == 0) {	
		    document.getElementById("d10_n").style.display = "none";
		    document.getElementById("d10_minus").style.display = "none";
		    document.getElementById("d10_plus").style.display = "none";
		    circle_d10.src = "img/white_circle.png";
        }

	    if(dice_number == 10 && d12_n == 0) {	
		    document.getElementById("d12_n").style.display = "none";
		    document.getElementById("d12_minus").style.display = "none";
		    document.getElementById("d12_plus").style.display = "none";
		    circle_d12.src = "img/white_circle.png";
        }

	    if(dice_number == 10 && d20_n == 0) {
		    document.getElementById("d20_n").style.display = "none";
		    document.getElementById("d20_minus").style.display = "none";
		    document.getElementById("d20_plus").style.display = "none";
		    circle_d20.src = "img/white_circle.png";
	    }
	}
}

//Função de Interação com seleção de uso de dado d8 e quantidade a ser jogada//
function d8() {

	//Preset da variável do circulo de seleção de dado d8//
	var circle_d8 = document.getElementById("circle_d8");

	//Cria definição de imagem da variável img_d8 e atribui o endereço da imagem//
	img_d8 = new Image();
	img_d8.src = "img/D8.png";

	//Condicional que identifica se dado d8 foi selecionado para ser jogado com a configuração inicial de 0 na quantidade alem de mudar cor de círculo de seleção e soma de quantidade de todos os tipos de dados selecionados//
	if(dice_number < 10) {
        if(circle_d8.src.endsWith("img/white_circle.png")) {
	    	d8_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d8.src = "img/black_circle.png";

		}else {
		    d8_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d8.src = "img/white_circle.png";
		    result_d8 = [];
		}
	}

	//Quando a soma de quantidade de adados chega a 10 se d8 for selecionado mas sua quantidade de dados aida é zero círculo de maração volta a ser branco e caixa de quantidade de dados d8 a serem jogados é escondida// 
	if(dice_number == 10) {
    	if(circle_d8.src.endsWith("img/black_circle.png")) {
    		d8_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d8.src = "img/white_circle.png";
		    result_d8 = [];
		}
	}

	//Condicional que define se o dado d8 foi selecionado exibe as caixa de seleção de quantidade de dados junto aos botões de adição e subtração de quantia//
	if(circle_d8.src.endsWith("img/black_circle.png")) {
		document.getElementById("d8_n").style.display = "inline-block";
		document.getElementById("d8_n").innerText = d8_n;
		document.getElementById("d8_minus").style.display = "inline-block";
		document.getElementById("d8_plus").style.display = "inline-block";
	}else {
		document.getElementById("d8_n").style.display = "none";
		document.getElementById("d8_minus").style.display = "none";
		document.getElementById("d8_plus").style.display = "none";
	}

	//Transforma botão d8_minus em uma função que quando clicado subtrai em 1 a quantia da caixa de seleção de quantidade de d8 até no minimo 0 e remove em 1 começãndo pela posição inicial do array de result_d8//
	d8_minus.onclick = function(){
		if(d8_n <= 0) {
			d8_n = 0;
		}else {
			d8_n--;
			result_d8.splice(0, 1);
		    dice_number--;
		}

		//Limita numero de dados para no maximo 10//
		if(d8_n > 10){
			d8_n = 10;
		}

		//Atualiza id d8_n conforme a variavel d8_n//
		document.getElementById("d8_n").innerText = d8_n;
	}

	//Transforma botão d8_plus em uma função que quando clicado aumenta em 1 a quantia da caixa de seleção de quantidade de d8 até no maximo 10 e adiciona em 1 começãndo pela posição inicial do array de result_d8//
	d8_plus.onclick = function(){
		if(d8_n >= 10) {
			d8_n = 10;
		}

		if(dice_number < 10) {
			d8_n++;
			result_d8.splice(1, 0, img_d8);
		    let html_d8 = "";
            result_d8.forEach(function(img) {
                html_d8 += `<img src="${img.src}">`;
            });
			dice_number++;
		}

		//Limita numero de dados para no minimo 1//
		if(d8_n < 1){
			d8_n = 1;
		}

		//Atualiza id d8_n conforme a variavel d8_n//
		document.getElementById("d8_n").innerText = d8_n;

		//Condicional que esconde caixas de seleção de quantidade e muda cores de circulos se dice_number for igual a 10 e as caizas dos dados correspondentes for igual a 0//		
		if(dice_number == 10 && d4_n == 0) {    
		    document.getElementById("d4_n").style.display = "none";
		    document.getElementById("d4_minus").style.display = "none";
		    document.getElementById("d4_plus").style.display = "none";
            circle_d4.src = "img/white_circle.png";
	    }

		if(dice_number == 10 && d6_n == 0) {
		    document.getElementById("d6_n").style.display = "none";
		    document.getElementById("d6_minus").style.display = "none";
		    document.getElementById("d6_plus").style.display = "none";
            circle_d6.src = "img/white_circle.png";
	    }

	    if(dice_number == 10 && d10_n == 0) {	
		    document.getElementById("d10_n").style.display = "none";
		    document.getElementById("d10_minus").style.display = "none";
		    document.getElementById("d10_plus").style.display = "none";
		    circle_d10.src = "img/white_circle.png";
        }

	    if(dice_number == 10 && d12_n == 0) {	
		    document.getElementById("d12_n").style.display = "none";
		    document.getElementById("d12_minus").style.display = "none";
		    document.getElementById("d12_plus").style.display = "none";
		    circle_d12.src = "img/white_circle.png";
        }

	    if(dice_number == 10 && d20_n == 0) {
		    document.getElementById("d20_n").style.display = "none";
		    document.getElementById("d20_minus").style.display = "none";
		    document.getElementById("d20_plus").style.display = "none";
		    circle_d20.src = "img/white_circle.png";
	    }
	}
}

//Função de Interação com seleção de uso de dado d10 e quantidade a ser jogada//
function d10() {

	//Preset da variável do circulo de seleção de dado d10//
	var circle_d10 = document.getElementById("circle_d10");

	//Cria definição de imagem da variável img_d10 e atribui o endereço da imagem//
	img_d10 = new Image();
	img_d10.src = "img/D10.png";

	//Condicional que identifica se dado d10 foi selecionado para ser jogado com a configuração inicial de 0 na quantidade alem de mudar cor de círculo de seleção e soma de quantidade de todos os tipos de dados selecionados//
	if(dice_number < 10) {
        if(circle_d10.src.endsWith("img/white_circle.png")) {
	    	d10_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d10.src = "img/black_circle.png";

		}else {
		    d10_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d10.src = "img/white_circle.png";
		    result_d10 = [];
		}
	}

	//Quando a soma de quantidade de adados chega a 10 se d10 for selecionado mas sua quantidade de dados aida é zero círculo de maração volta a ser branco e caixa de quantidade de dados d10 a serem jogados é escondida// 
	if(dice_number == 10) {
    	if(circle_d10.src.endsWith("img/black_circle.png")) {
    		d10_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d10.src = "img/white_circle.png";
		    result_d10 = [];
		}
	}

	//Condicional que define se o dado d10 foi selecionado exibe as caixa de seleção de quantidade de dados junto aos botões de adição e subtração de quantia//
	if(circle_d10.src.endsWith("img/black_circle.png")) {
		document.getElementById("d10_n").style.display = "inline-block";
		document.getElementById("d10_n").innerText = d10_n;
		document.getElementById("d10_minus").style.display = "inline-block";
		document.getElementById("d10_plus").style.display = "inline-block";
	}else {
		document.getElementById("d10_n").style.display = "none";
		document.getElementById("d10_minus").style.display = "none";
		document.getElementById("d10_plus").style.display = "none";
	}

	//Transforma botão d10_minus em uma função que quando clicado subtrai em 1 a quantia da caixa de seleção de quantidade de d10 até no minimo 0 e remove em 1 começãndo pela posição inicial do array de result_d10//
	d10_minus.onclick = function(){
		if(d10_n <= 0) {
			d10_n = 0;
		}else {
			d10_n--;
			result_d10.splice(0, 1);
		    dice_number--;
		}

		//Limita numero de dados para no maximo 10//
		if(d10_n > 10){
			d10_n = 10;
		}

		//Atualiza id d10_n conforme a variavel d10_n//
		document.getElementById("d10_n").innerText = d10_n;
	}

	//Transforma botão d10_plus em uma função que quando clicado aumenta em 1 a quantia da caixa de seleção de quantidade de d10 até no maximo 10 e adiciona em 1 começãndo pela posição inicial do array de result_d10//
	d10_plus.onclick = function(){
		if(d10_n >= 10) {
			d10_n = 10;
		}

		if(dice_number < 10) {
			d10_n++;
			result_d10.splice(1, 0, img_d10);
		    let html_d10 = "";
            result_d10.forEach(function(img) {
                html_d10 += `<img src="${img.src}">`;
            });
			dice_number++;
		}

		//Limita numero de dados para no minimo 1//
		if(d10_n < 1){
			d10_n = 1;
		}

		//Atualiza id d10_n conforme a variavel d10_n//
		document.getElementById("d10_n").innerText = d10_n;

		//Condicional que esconde caixas de seleção de quantidade e muda cores de circulos se dice_number for igual a 10 e as caizas dos dados correspondentes for igual a 0//		
		if(dice_number == 10 && d4_n == 0) {	
		    document.getElementById("d4_n").style.display = "none";
		    document.getElementById("d4_minus").style.display = "none";
		    document.getElementById("d4_plus").style.display = "none";
		    circle_d4.src = "img/white_circle.png";
        }

		if(dice_number == 10 && d6_n == 0) {
		    document.getElementById("d6_n").style.display = "none";
		    document.getElementById("d6_minus").style.display = "none";
		    document.getElementById("d6_plus").style.display = "none";
            circle_d6.src = "img/white_circle.png";
	    }

	    if(dice_number == 10 && d8_n == 0) {    
		    document.getElementById("d8_n").style.display = "none";
		    document.getElementById("d8_minus").style.display = "none";
		    document.getElementById("d8_plus").style.display = "none";
            circle_d8.src = "img/white_circle.png";
	    }

	    if(dice_number == 10 && d12_n == 0) {	
		    document.getElementById("d12_n").style.display = "none";
		    document.getElementById("d12_minus").style.display = "none";
		    document.getElementById("d12_plus").style.display = "none";
		    circle_d12.src = "img/white_circle.png";
        }

	    if(dice_number == 10 && d20_n == 0) {
		    document.getElementById("d20_n").style.display = "none";
		    document.getElementById("d20_minus").style.display = "none";
		    document.getElementById("d20_plus").style.display = "none";
		    circle_d20.src = "img/white_circle.png";
	    }
	}
}

//Função de Interação com seleção de uso de dado d12 e quantidade a ser jogada//
function d12() {

	//Preset da variável do circulo de seleção de dado d12//
	var circle_d12 = document.getElementById("circle_d12");

	//Cria definição de imagem da variável img_d12 e atribui o endereço da imagem//
	img_d12 = new Image();
	img_d12.src = "img/D12.png";

	//Condicional que identifica se dado d12 foi selecionado para ser jogado com a configuração inicial de 0 na quantidade alem de mudar cor de círculo de seleção e soma de quantidade de todos os tipos de dados selecionados//
	if(dice_number < 10) {
        if(circle_d12.src.endsWith("img/white_circle.png")) {
	    	d12_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d12.src = "img/black_circle.png";
		    
		}else {
		    d12_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d12.src = "img/white_circle.png";
		    result_d12 = [];
		}
	}

	//Quando a soma de quantidade de adados chega a 10 se d12 for selecionado mas sua quantidade de dados aida é zero círculo de maração volta a ser branco e caixa de quantidade de dados d12 a serem jogados é escondida// 
	if(dice_number == 10) {
    	if(circle_d12.src.endsWith("img/black_circle.png")) {
    		d12_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d12.src = "img/white_circle.png";
		    result_d12 = [];
		}
	}

	//Condicional que define se o dado d12 foi selecionado exibe as caixa de seleção de quantidade de dados junto aos botões de adição e subtração de quantia//
	if(circle_d12.src.endsWith("img/black_circle.png")) {
		document.getElementById("d12_n").style.display = "inline-block";
		document.getElementById("d12_n").innerText = d12_n;
		document.getElementById("d12_minus").style.display = "inline-block";
		document.getElementById("d12_plus").style.display = "inline-block";
	}else {
		document.getElementById("d12_n").style.display = "none";
		document.getElementById("d12_minus").style.display = "none";
		document.getElementById("d12_plus").style.display = "none";
	}

	//Transforma botão d12_minus em uma função que quando clicado subtrai em 1 a quantia da caixa de seleção de quantidade de d12 até no minimo 0 e remove em 1 começãndo pela posição inicial do array de result_d12//
	d12_minus.onclick = function(){
		if(d12_n <= 0) {
			d12_n = 0;
		}else {
			d12_n--;
			result_d12.splice(0, 1);
		    dice_number--;
		}

		//Limita numero de dados para no maximo 10//
		if(d12_n > 10){
			d12_n = 10;
		}

		//Atualiza id d12_n conforme a variavel d12_n//
		document.getElementById("d12_n").innerText = d12_n;
	}

	//Transforma botão d12_plus em uma função que quando clicado aumenta em 1 a quantia da caixa de seleção de quantidade de d12 até no maximo 10 e adiciona em 1 começãndo pela posição inicial do array de result_d12//
	d12_plus.onclick = function(){
		if(d12_n >= 10) {
			d12_n = 10;
		}

		if(dice_number < 10) {
			d12_n++;
			result_d12.splice(1, 0, img_d12);
		    let html_d12 = "";
            result_d12.forEach(function(img) {
                html_d12 += `<img src="${img.src}">`;
            });
			dice_number++;
		}

		//Limita numero de dados para no minimo 1//
		if(d12_n < 1){
			d12_n = 1;
		}

		//Atualiza id d12_n conforme a variavel d12_n//
		document.getElementById("d12_n").innerText = d12_n;

		//Condicional que esconde caixas de seleção de quantidade e muda cores de circulos se dice_number for igual a 10 e as caizas dos dados correspondentes for igual a 0//		
		if(dice_number == 10 && d4_n == 0) {
		    document.getElementById("d4_n").style.display = "none";
		    document.getElementById("d4_minus").style.display = "none";
		    document.getElementById("d4_plus").style.display = "none";
            circle_d4.src = "img/white_circle.png";
	    }
        
        if(dice_number == 10 && d6_n == 0) {
		    document.getElementById("d6_n").style.display = "none";
		    document.getElementById("d6_minus").style.display = "none";
		    document.getElementById("d6_plus").style.display = "none";
            circle_d6.src = "img/white_circle.png";
	    }

	    if(dice_number == 10 && d8_n == 0) {    
		    document.getElementById("d8_n").style.display = "none";
		    document.getElementById("d8_minus").style.display = "none";
		    document.getElementById("d8_plus").style.display = "none";
            circle_d8.src = "img/white_circle.png";
	    }

	    if(dice_number == 10 && d10_n == 0) {	
		    document.getElementById("d10_n").style.display = "none";
		    document.getElementById("d10_minus").style.display = "none";
		    document.getElementById("d10_plus").style.display = "none";
		    circle_d10.src = "img/white_circle.png";
        }

	    if(dice_number == 10 && d20_n == 0) {
		    document.getElementById("d20_n").style.display = "none";
		    document.getElementById("d20_minus").style.display = "none";
		    document.getElementById("d20_plus").style.display = "none";
		    circle_d20.src = "img/white_circle.png";
	    }
	}
}

//Função de Interação com seleção de uso de dado d20 e quantidade a ser jogada//
function d20() {

	//Preset da variável do circulo de seleção de dado d20//
	var circle_d20 = document.getElementById("circle_d20");

	//Cria definição de imagem da variável img_d20 e atribui o endereço da imagem//
	img_d20 = new Image();
	img_d20.src = "img/D20.png";

	//Condicional que identifica se dado d20 foi selecionado para ser jogado com a configuração inicial de 0 na quantidade alem de mudar cor de círculo de seleção e soma de quantidade de todos os tipos de dados selecionados//
	if(dice_number < 10) {
        if(circle_d20.src.endsWith("img/white_circle.png")) {
	    	d20_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d20.src = "img/black_circle.png";

		}else {
		    d20_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d20.src = "img/white_circle.png";
		    result_d20 = [];
		}
	}

	//Quando a soma de quantidade de adados chega a 10 se d20 for selecionado mas sua quantidade de dados aida é zero círculo de maração volta a ser branco e caixa de quantidade de dados d20 a serem jogados é escondida// 
	if(dice_number == 10) {
    	if(circle_d20.src.endsWith("img/black_circle.png")) {
    		d20_n = 0;
		    dice_number = d4_n + d6_n + d8_n + d10_n + d12_n + d20_n;
		    circle_d20.src = "img/white_circle.png";
		    result_d20 = [];
		}
	}

	//Condicional que define se o dado d20 foi selecionado exibe as caixa de seleção de quantidade de dados junto aos botões de adição e subtração de quantia//
	if(circle_d20.src.endsWith("img/black_circle.png")) {
		document.getElementById("d20_n").style.display = "inline-block";
		document.getElementById("d20_n").innerText = d20_n;
		document.getElementById("d20_minus").style.display = "inline-block";
		document.getElementById("d20_plus").style.display = "inline-block";
	}else {
		document.getElementById("d20_n").style.display = "none";
		document.getElementById("d20_minus").style.display = "none";
		document.getElementById("d20_plus").style.display = "none";
	}

	//Transforma botão d20_minus em uma função que quando clicado subtrai em 1 a quantia da caixa de seleção de quantidade de d20 até no minimo 0 e remove em 1 começãndo pela posição inicial do array de result_d20//
	d20_minus.onclick = function(){
		if(d20_n <= 0) {
			d20_n = 0;
		}else {
			d20_n--;
			result_d20.splice(0, 1);
		    dice_number--;
		}

		//Limita numero de dados para no maximo 10//
		if(d20_n > 10){
			d20_n = 10;
		}

		//Atualiza id d20_n conforme a variavel d20_n//
		document.getElementById("d20_n").innerText = d20_n;
	}

	//Transforma botão d20_plus em uma função que quando clicado aumenta em 1 a quantia da caixa de seleção de quantidade de d20 até no maximo 10 e adiciona em 1 começãndo pela posição inicial do array de result_d20//
	d20_plus.onclick = function(){
		if(d20_n >= 10) {
			d20_n = 10;
		}

		if(dice_number < 10) {
			d20_n++;
			result_d20.splice(1, 0, img_d20);
		    let html_d20 = "";
            result_d20.forEach(function(img) {
                html_d20 += `<img src="${img.src}">`;
            });
			dice_number++;
		}

		//Limita numero de dados para no minimo 1//
		if(d20_n < 1){
			d20_n = 1;
		}

		//Atualiza id d20_n conforme a variavel d20_n//
		document.getElementById("d20_n").innerText = d20_n;

		//Condicional que esconde caixas de seleção de quantidade e muda cores de circulos se dice_number for igual a 10 e as caizas dos dados correspondentes for igual a 0//		
		if(dice_number == 10 && d4_n == 0) {
		    document.getElementById("d4_n").style.display = "none";
		    document.getElementById("d4_minus").style.display = "none";
		    document.getElementById("d4_plus").style.display = "none";
		    circle_d4.src = "img/white_circle.png";
	    }

		if(dice_number == 10 && d6_n == 0) {
		    document.getElementById("d6_n").style.display = "none";
		    document.getElementById("d6_minus").style.display = "none";
		    document.getElementById("d6_plus").style.display = "none";
            circle_d6.src = "img/white_circle.png";
	    }

	    if(dice_number == 10 && d8_n == 0) {    
		    document.getElementById("d8_n").style.display = "none";
		    document.getElementById("d8_minus").style.display = "none";
		    document.getElementById("d8_plus").style.display = "none";
            circle_d8.src = "img/white_circle.png";
	    }

	    if(dice_number == 10 && d10_n == 0) {	
		    document.getElementById("d10_n").style.display = "none";
		    document.getElementById("d10_minus").style.display = "none";
		    document.getElementById("d10_plus").style.display = "none";
		    circle_d10.src = "img/white_circle.png";
        }

	    if(dice_number == 10 && d12_n == 0) {	
		    document.getElementById("d12_n").style.display = "none";
		    document.getElementById("d12_minus").style.display = "none";
		    document.getElementById("d12_plus").style.display = "none";
		    circle_d12.src = "img/white_circle.png";
        }
	}
}

//Funação que Executada quando botão de resultado for clicado//
function result() {

	//Define audio de dados rolando que será atribuído junto com clique do botão de resultado//
	audio_dices = `<audio src= "audio/throw_dices.mp3" autoplay>`;

	if(dice_number > 0){
	    document.getElementById("audio_dices").innerHTML = audio_dices;
    }

    //Define para "" html_d4 e [] face_d4 e remove dados que já foram jogados//    
	let html_d4 = "";
	let face_d4 = [];
	document.getElementById("result_d4").style.display = "none";

	//Para cada img em result_d4 colocar uma imagem de d4 em html_d4 e criar uma array n_face_d4 com os itens 1, 2, 3, 4 e depois embaralha estes numeros em cada uma destas arrays e por fim apresentar só o primeiroitem destas arrays//	
	result_d4.forEach(function(img) {
        html_d4 = `<img class="c_d4" src="img/D4.png">`;
        n_face_d4 = [1, 2, 3, 4];
        shuffleArray(n_face_d4);
        face_d4.push(html_d4 + n_face_d4[0]);
    });

    //Função/Metodo que executa embaralhamento da array//
    function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    }
    //Apresenta os dados d4 com seus respectivos numeros se d4_n for maior que 0//
    if(d4_n > 0){
        document.getElementById("result_d4").style.display = "inline-block";
    }

    document.getElementById("result_d4").innerHTML = face_d4.join("");
    
    //Define para "" html_d6 e [] face_d6 e remove dados que já foram jogados//
    let html_d6 = "";
	let face_d6 = [];
	document.getElementById("result_d6").style.display = "none";

	//Para cada img em result_d6 colocar uma imagem de d4 em html_d6 e criar uma array n_face_d6 com os itens 1, 2, 3, 4, 5, 6  e depois embaralha estes numeros em cada uma destas arrays e por fim apresentar só o primeiroitem destas arrays//	
	result_d6.forEach(function(img) {
        html_d6 = `<img class="c_d6" src="img/D6.png">`;
        n_face_d6 = [1, 2, 3, 4, 5, 6];
        shuffleArray(n_face_d6);
        face_d6.push(html_d6 + n_face_d6[0]);
    });

    //Função/Metodo que executa embaralhamento da array//
    function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    }
    //Apresenta os dados d6 com seus respectivos numeros se d6_n for maior que 0//
    if(d6_n > 0){
        document.getElementById("result_d6").style.display = "inline-block";
    }
    document.getElementById("result_d6").innerHTML = face_d6.join("");

    //Define para "" html_d8 e [] face_d8 e remove dados que já foram jogados//    
	let html_d8 = "";
	let face_d8 = [];
	document.getElementById("result_d8").style.display = "none";

	//Para cada img em result_d8 colocar uma imagem de d8 em html_d8 e criar uma array n_face_d8 com os itens 1, 2, 3, 4, 5, 6, 7, 8 e depois embaralha estes numeros em cada uma destas arrays e por fim apresentar só o primeiroitem destas arrays//	
	result_d8.forEach(function(img) {
        html_d8 = `<img class="c_d8" src="img/D8.png">`;
        n_face_d8 = [1, 2, 3, 4, 5, 6, 7, 8];
        shuffleArray(n_face_d8);
        face_d8.push(html_d8 + n_face_d8[0]);
    });

    //Função/Metodo que executa embaralhamento da array//
    function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    }
    //Apresenta os dados d8 com seus respectivos numeros se d8_n for maior que 0//
    if(d8_n > 0){
        document.getElementById("result_d8").style.display = "inline-block";
    }
    document.getElementById("result_d8").innerHTML = face_d8.join("");

    //Define para "" html_d10 e [] face_d10 e remove dados que já foram jogados//    
	let html_d10 = "";
	let face_d10 = [];
	document.getElementById("result_d10").style.display = "none";

	//Para cada img em result_d10 colocar uma imagem de d10 em html_d10 e criar uma array n_face_d10 com os itens 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 e depois embaralha estes numeros em cada uma destas arrays e por fim apresentar só o primeiroitem destas arrays//	
	result_d10.forEach(function(img) {
        html_d10 = `<img class="c_d10" src="img/D10.png">`;
        n_face_d10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        shuffleArray(n_face_d10);
        if(n_face_d10[0] == 10) {
        	n_face_d10[0] = `<span class="correct_d10_1">1</span><span class="correct_d10_2">0</span>`;
        }
        face_d10.push(html_d10 + n_face_d10[0]);
    });

    //Função/Metodo que executa embaralhamento da array//
    function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    }
    //Apresenta os dados d10 com seus respectivos numeros se d10_n for maior que 0//
    if(d10_n > 0){
        document.getElementById("result_d10").style.display = "inline-block";
    }
    document.getElementById("result_d10").innerHTML = face_d10.join("");

    //Define para "" html_d12 e [] face_d12 e remove dados que já foram jogados//    
    let html_d12 = "";
	let face_d12 = [];
	document.getElementById("result_d12").style.display = "none";

	//Para cada img em result_d12 colocar uma imagem de d12 em html_d12 e criar uma array n_face_d12 com os itens 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 e depois embaralha estes numeros em cada uma destas arrays e por fim apresentar só o primeiroitem destas arrays//	
    result_d12.forEach(function(img) {
        html_d12 = `<img class="c_d12" src="img/D12.png">`;
        n_face_d12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        shuffleArray(n_face_d12);
        if(n_face_d12[0] == 10) {
        	n_face_d12[0] = `<span class="correct_d12_1">1</span><span class="correct_d12_2">0</span>`;
        }
        if(n_face_d12[0] == 11) {
        	n_face_d12[0] = `<span class="correct_d12_1">1</span><span class="correct_d12_2">1</span>`;
        }
        if(n_face_d12[0] == 12) {
        	n_face_d12[0] = `<span class="correct_d12_1">1</span><span class="correct_d12_2">2</span>`;
        }
        face_d12.push(html_d12 + n_face_d12[0]);
    });

    //Função/Metodo que executa embaralhamento da array//
    function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    }
    //Apresenta os dados d12 com seus respectivos numeros se d12_n for maior que 0//
    if(d12_n > 0){
        document.getElementById("result_d12").style.display = "inline-block";
    }
    
    document.getElementById("result_d12").innerHTML = face_d12.join("");

    //Define para "" html_d20 e [] face_d20 e remove dados que já foram jogados//    	
	let html_d20 = "";
	let face_d20 = [];
	document.getElementById("result_d20").style.display = "none";

	//Para cada img em result_d20 colocar uma imagem de d20 em html_d20 e criar uma array n_face_d20 com os itens 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 e depois embaralha estes numeros em cada uma destas arrays e por fim apresentar só o primeiroitem destas arrays//	
    result_d20.forEach(function(img) {
        html_d20 = `<img class="c_d20" src="img/D20.png">`;
        n_face_d20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        shuffleArray(n_face_d20);
        if(n_face_d20[0] == 10) {
        	n_face_d20[0] = `<span class="correct_d20_1">1</span><span class="correct_d20_2">0</span>`;
        }
        if(n_face_d20[0] == 11) {
        	n_face_d20[0] = `<span class="correct_d20_1">1</span><span class="correct_d20_2">1</span>`;
        }
        if(n_face_d20[0] == 12) {
        	n_face_d20[0] = `<span class="correct_d20_1">1</span><span class="correct_d20_2">2</span>`;
        }
        if(n_face_d20[0] == 13) {
        	n_face_d20[0] = `<span class="correct_d20_1">1</span><span class="correct_d20_2">3</span>`;
        }
        if(n_face_d20[0] == 14) {
        	n_face_d20[0] = `<span class="correct_d20_1">1</span><span class="correct_d20_2">4</span>`;
        }
        if(n_face_d20[0] == 15) {
        	n_face_d20[0] = `<span class="correct_d20_1">1</span><span class="correct_d20_2">5</span>`;
        }
        if(n_face_d20[0] == 16) {
        	n_face_d20[0] = `<span class="correct_d20_1">1</span><span class="correct_d20_2">6</span>`;
        }
        if(n_face_d20[0] == 17) {
        	n_face_d20[0] = `<span class="correct_d20_1">1</span><span class="correct_d20_2">7</span>`;
        }
        if(n_face_d20[0] == 18) {
        	n_face_d20[0] = `<span class="correct_d20_1">1</span><span class="correct_d20_2">8</span>`;
        }
        if(n_face_d20[0] == 19) {
        	n_face_d20[0] = `<span class="correct_d20_1">1</span><span class="correct_d20_2">9</span>`;
        }
        if(n_face_d20[0] == 20) {
        	n_face_d20[0] = `<span class="correct_d20_1">2</span><span class="correct_d20_2">0</span>`;
        }
        face_d20.push(html_d20 + n_face_d20[0]);
    });

    //Função/Metodo que executa embaralhamento da array//
    function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    }
    //Apresenta os dados d20 com seus respectivos numeros se d20_n for maior que 0//
    if(d20_n > 0){
        document.getElementById("result_d20").style.display = "inline-block";
    }
    document.getElementById("result_d20").innerHTML = face_d20.join("");
}

//Função que realiza a liampeza da área de rersultado dos dados//
function cleanDices() {
	//Zera e deixa vazia a quantidade de dados e as arrays dos resultados//  
	d4_n = 0;
	d6_n = 0;
	d8_n = 0;
	d10_n = 0;
	d12_n = 0;
	d20_n = 0;
	dice_number = 0;
	result_d4 = [];
	result_d6 = [];
	result_d8 = [];
	result_d10 = [];
	result_d12 = [];
	result_d20 = [];

	//Volta a esconder as caixas de seleção de quantidade de dados assim como os botões e desmarca o círculo deixando-o branco novamente// 
	document.getElementById("d4_n").style.display = "none";
	document.getElementById("d4_minus").style.display = "none";
	document.getElementById("d4_plus").style.display = "none";
	circle_d4.src = "img/white_circle.png";
		
	document.getElementById("d6_n").style.display = "none";
	document.getElementById("d6_minus").style.display = "none";
	document.getElementById("d6_plus").style.display = "none";
    circle_d6.src = "img/white_circle.png";
	    
	document.getElementById("d8_n").style.display = "none";
	document.getElementById("d8_minus").style.display = "none";
	document.getElementById("d8_plus").style.display = "none";
    circle_d8.src = "img/white_circle.png";
	   	
	document.getElementById("d10_n").style.display = "none";
	document.getElementById("d10_minus").style.display = "none";
	document.getElementById("d10_plus").style.display = "none";
	circle_d10.src = "img/white_circle.png";
    	    	
	document.getElementById("d12_n").style.display = "none";
	document.getElementById("d12_minus").style.display = "none";
	document.getElementById("d12_plus").style.display = "none";
	circle_d12.src = "img/white_circle.png";
           
	document.getElementById("d20_n").style.display = "none";
	document.getElementById("d20_minus").style.display = "none";
	document.getElementById("d20_plus").style.display = "none";
	circle_d20.src = "img/white_circle.png";

	//Condicional que elimina os dados se quantidade do seu respectivo dado é igual a 0 quando o botão de limpar é clicado//
 	if(d4_n == 0){
    	document.getElementById("result_d4").style.display = "none";
    }else {
    	document.getElementById("result_d4").style.display = "inline-block";
    }

    if(d6_n == 0){
    	document.getElementById("result_d6").style.display = "none";
    }else {
    	document.getElementById("result_d6").style.display = "inline-block";
    }

    if(d8_n == 0){
    	document.getElementById("result_d8").style.display = "none";
    }else {
    	document.getElementById("result_d8").style.display = "inline-block";
    }

    if(d10_n == 0){
    	document.getElementById("result_d10").style.display = "none";
    }else {
    	document.getElementById("result_d10").style.display = "inline-block";
    }

    if(d12_n == 0){
    	document.getElementById("result_d12").style.display = "none";
    }else {
    	document.getElementById("result_d12").style.display = "inline-block";
    }

    if(d20_n == 0){
    	document.getElementById("result_d20").style.display = "none";
    }else {
    	document.getElementById("result_d20").style.display = "inline-block";
    }
}

