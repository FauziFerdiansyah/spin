



// Super Wheel Script
jQuery(document).ready(function($){
	$('.wheel-letter-spacing').superWheel({
		slices: [
			{
				text: "Makan di Resto 🍱",
				value: 1,
				message: "Kamu Dapat Hadiah Makan Di Restoran Bebas Mau Makan Apa Max 500 Ribu",
				background: "#f1c32f",
			},
			{
				text: "Sepatu 👠",
				value: 1,
				message: "Kamu Dapat Hadiah 1 Pasang Sepatu",
				background: "#f66e91",
			},
			{
				text: "Tas 👜",
				value: 1,
				message: "Kamu Dapat Hadiah 1 Buah Tas",
				background: "#09a7bf",
			},
			{
				text: "Baju Lebaran 💃🏼",
				value: 1,
				message: "Kamu Dapat Hadiah 1 Stel Baju Lebaran (Baju & Celana)",
				background: "#f67b46",
			},
			{
				text: "Uang 1/2 Juta 💰",
				value: 1,
				message: "Kamu Dapat Hadiah Uang Rp. 500.000 Ribu Rupiah",
				background: "#c17bd2",
			},
			{
				text: "E-walet 500K 🤑",
				value: 1,
				message: "Kamu Dapat Hadiah Saldo E-walet 500 Ribu Gopay/Shopee",
				background: "#02b7a6",
			},
			// {
			// 	text: "20% OFF",
			// 	value: 1,
			// 	message: "You win 20% off",
			// 	discount: "95Qm9tof",
			// 	background: "#546E7A",
				
			// },
			// {
			// 	text: "No luck",
			// 	value: 0,
			// 	message: "You have No luck today",
			// 	discount: "no",
			// 	background: "#455A64",
				
			// },
			// {
			// 	text: "30% OFF",
			// 	value: 1,
			// 	message: "You win 30% off",
			// 	discount: "8C46fBeH",
			// 	background: "#546E7A",
				
			// },
			// {
			// 	text: "Lose",
			// 	value: 0,
			// 	message: "You Lose :(",
			// 	discount: "no",
			// 	background: "#455A64",
				
			// },
			// {
			// 	text: "40% OFF",
			// 	value: 1,
			// 	message: "You win 40% off",
			// 	discount: "aHiH4bfd",
			// 	background: "#546E7A",
				
			// },
			// {
			// 	text: "Nothing",
			// 	value: 0,
			// 	message: "You get Nothing :(",
			// 	discount: "no",
			// 	background: "#455A64",
				
			// }
		],
		text : {
			color: '#ffffff',
			offset : 10,
			letterSpacing: 3,
			orientation: 'h',
			arc: true
		},
		line: {
			width: 8,
			color: "#000000"
		},
		outer: {
			width: 10,
			color: "#000000"
		},
		inner: {
			width: 10,
			color: "#000000"
		},
		marker: {
			background: "#e60022"
		},
		selector: "value"
	});
	
	
	
	var tick = new Audio('media/tick.mp3');
	var cheers = new Audio('media/cheers.mp3');
	
	$(document).on('click','.wheel-letter-spacing-spin-button',function(e){
		
		$('.wheel-letter-spacing').superWheel('start','value',Math.floor(Math.random() * 2));
		$(this).prop('disabled',true);
	});
	
	
	$('.wheel-letter-spacing').superWheel('onStart',function(results){
		
		
		$('.wheel-letter-spacing-spin-button').text('Spinning...');
		
	});
	$('.wheel-letter-spacing').superWheel('onStep',function(results){
		
		if (typeof tick.currentTime !== 'undefined')
			tick.currentTime = 0;
        
		tick.play();
		
	});
	
	
	$('.wheel-letter-spacing').superWheel('onComplete',function(results){
		if(results.value === 1){
			if (typeof cheers.currentTime !== 'undefined')
				cheers.currentTime = 0;
					
			cheers.play();
			swal({
				type: 'success',
				title: "Selamat!", 
				// html: results.message+' <br><br><b>Discount : [ '+ results.discount+ ' ]</b>'
				html: results.message,
				confirmButtonText: 'Tutup',
			});
		}else{
			swal("Oops!", results.message, "error");
		}
		$('.wheel-letter-spacing-spin-button:disabled').prop('disabled',false).text('Spin');
		
	});
	
	
	
	
	
});