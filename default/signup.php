<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="stylesheet" href="signup.css">
    <link rel="stylesheet" href="/global.css">
    <script defer src="signup.js"></script>
</head>
<body>
    <div>
        <ul class="navleft">
            <li><a href="home.html">Home</a></li>
        </ul>
        <ul class="navright">
            <li><a href="signup.php">Sign Up</a></li>
            <li><a href="login.php">Log In</a></li>
        </ul>
    </div>
    <div>
    <div class="create">
        
        <form action = "signup.php" method = "POST">
            <h1>Create Account</h1>
            <label for="username">Username:</label><br>
            <input type="text" id="username" class="username" name="username"><br>
			 <label for="email">Email:</label><br>
            <input type="text" id="email" class="email" name="email"><br>
            <label for="password">Password:</label><br>
            <input type="text" id="password" class="password" name="password"><br>
            <a href="login.php">Already have an account?</a><br>
            <div class = "selection">
                <label for="multchoice1">
                    <input type="radio" name="qtype" id="student" value="student" onclick="replaceshort(this.id)"/>
                    Student
                </label>
                <label for="admin">
                    <input type="radio" name="qtype" id="admin" value="admin" onclick="replaceshort(this.id)"/>
                    Faculty
                </label>
            </div>
            <input type="submit" value="Sign Up" id="enter">
        </form>
    </div>
    </div>
	<?php
	
error_reporting(0);
include("connect.php");

	$sql = "";
	if(!empty($_POST['username']) && !empty($_POST['password'])){
		$username = $_POST['username'];
		$password = $_POST['password'];
		$email = $_POST['email'];
		$qtype = $_POST['qtype'];
		
		if($qtype == 'student'){
			$sql = "INSERT INTO student (student_username, student_email, password)
			VALUES ('$username', '$email', '$password')";
		}else{
			$sql = "INSERT INTO faculty (faculty_username, faculty_email, password)
			VALUES ('$username', '$email', '$password')";
		}
	}

	if(mysqli_query($con,$sql)){
		header("Location: login.php");
	}

mysqli_close($con);
?>
</body>
</html>
