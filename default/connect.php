<?php
	DEFINE ('DB_USER', 'CS330G3');
	DEFINE ('DB_PASSWORD', '6MISP7KE');
	DEFINE ('DB_HOST', 'alfred.cs.uwec.edu');
	DEFINE ('DB_NAME', 'CS330_GROUP3');

	$con = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
	OR die('Could not connect to MySQL: ' .
	mysqli_connect_error());
	
	
	if(!mysqli_select_db($con, 'CS330_GROUP3')){
		echo 'Database not selected';
	}
?>
