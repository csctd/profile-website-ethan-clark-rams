# Non Standard Landing Page

#HTML

<!DOCTYPE html>

<html>

<head>
	<title>Calculator</title>
	<link rel="stylesheet" type="text/css" href="style.css">

</head>

<body>
	<div class="calculator">
		<input type="text" id="display" readonly>
		<div class="buttons">
			<button class="button" id="clear">C</button>
			<button class="button" id="backspace">←</button>
			<button class="button" id="divide">/</button>
			<button class="button" id="multiply">*</button>
			<button class="button" id="seven">7</button>
			<button class="button" id="eight">8</button>
			<button class="button" id="nine">9</button>
			<button class="button" id="subtract">-</button>
			<button class="button" id="four">4</button>
			<button class="button" id="five">5</button>
			<button class="button" id="six">6</button>
			<button class="button" id="add">+</button>
			<button class="button" id="one">1</button>
			<button class="button" id="two">2</button>
			<button class="button" id="three">3</button>
			<button class="button" id="equals">=</button>
			<button class="button" id="zero">0</button>
			<button class="button" id="decimal">.</button>
		</div>
	</div>
	<script src="script.js"></script>

</body>

</html>

#css

.calculator {
	width: 250px;
	margin: 50px auto;
	padding: 20px;
	border: 1px solid black;
	border-radius: 5px;
	background-color: #f2f2f2;

}


.buttons {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

}


.button {
	width: 50px;
	height: 50px;
	font-size: 20px;
	border: none;
	border-radius: 5px;
	background-color: #fff;
	cursor: pointer;

}


.button:hover {
	background-color: #ddd;

}


#display {
	width: 100%;
	height: 50px;
	font-size: 24px;
	text-align: right;
	border: none;
	border-bottom: 1px solid black;
	background-color: #fff;

}

