<html>
	<head>
		<title>Split My Costs | No more headaches after an awesome trip!</title>
		<meta name="description" content="Split My Costs is the perfect tool to split costs between friends & family after a trip.">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<link rel="stylesheet" href="lib/base.css"></link>
		
		<!--script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script-->
		<script src="lib/jquery-2.0.0.min.js"></script>
		<script src="lib/common.js"></script>
		
		<!-- Web fonts are cool, don't you think? -->
		<link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
	</head>
	
	<body>
		<div id="container">
			
			<div id="choose_person"></div>
			
			<header>
				<h1>Split My Costs</h1>
				<p>The perfect tool to split costs between friends & family after a trip!</p>
			</header>
			
			<div id="content">
				
				<section id="costs">
					<h1>
						Costs
						<span>List what are the costs and easily add who was involved.</span>
					</h1>
					<table id="costs_list">
						<thead>
							<tr>
								<th width="30">&nbsp;</th>
								<th width="220">Expense</th>
								<th width="130">Price (Total)</th>
								<th width="130">Price (Per person)</th>
								<th width="150" align="left">Who is concerned?</th>
							</tr>
						</thead>
						<tbody>
							<tr id="cost_1">
								<td><a href="#" class="del">X</a></td><td>Snacks</td><td>$20</td><td>$20</td><td><span data-email="info@sofiashendi.com">Sofia Shendi</span> <a href="#" class="add">Add/Remove</a></td>
							</tr>
							<tr id="cost_2">
								<td><a href="#" class="del">X</a></td><td>Snacks</td><td>$20</td><td>$20</td><td><span data-email="info@sofiashendi.com">Sofia Shendi</span> <a href="#" class="add">Add/Remove</a></td>
							</tr>
						</tbody>
					</table>
					<form id="frm_costs">
						<input type="text" id="expense" name="expense" placeholder="What was the expense?" required="required" />
						<input type="number" id="price" name="price" placeholder="Price" required="required" />
						<button>+</button>
					</form>
				</section>
				
				<section id="people" class="col">
					<h1>
						People
						<span>Add people to split the costs.</span>	
					</h1>
					<ul id="people_list"></ul>
					<form id="frm_people">
						<input type="text" id="name" name="name" placeholder="Name" required="required" />
						<input type="email" id="email" name="email" placeholder="Email" required="required" />
						<button>+</button>
					</form>
				</section>
			
			</div>
			
			<footer>
				<span><?php echo date('Y'); ?> &copy; Split My Costs is brought to you by</span>
				<a href="http://www.sofiashendi.com">Sofia Shendi</a>
			</footer>
			
		</div>
		
	</body>
</html>
