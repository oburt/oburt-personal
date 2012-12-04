<!DOCTYPE html>

<html>

<head>
	<title>Burt Engineering - Helping You Build Well</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/effects.js"></script>
	<script type="text/javascript" src="//use.typekit.net/onz6cct.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
</head>

<body data-spy="scroll" data-target=".be-sidebar">
	
	<div class="container">
		<div class="be-header">
			<div class="row">
				<div class="span12">
					<h1>Burt Engineering</h1>
					<address><a href="tel:1-206-779-6856">(206) 779-6856</a> | <a href="mailto:cb@burtengineering.com">cb@burtengineering.com</a></address>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<nav class="be-navbar">
			<div class="row">
				<div class="span3 <?php if($page === 'index') echo('active'); ?>">
					<a href="index.php">Our Promise</a>
				</div>
				<div class="span3 <?php if($page === 'builders') echo('active'); ?>">
					<a href="builders.php">For Builders &amp; Architects</a>
				</div>
				<div class="span3 <?php if($page === 'owners') echo('active'); ?>">
					<a href="owners.php">For Property Owners</a>
				</div>
				<div class="span3 <?php if($page === 'contact') echo('active'); ?>">
					<a href="contact.php">Contact Us</a>
				</div>
			</div>
		</nav>
	</div>
