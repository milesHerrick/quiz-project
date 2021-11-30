<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log In</title>
    <link rel="stylesheet" href="login.css">
    <link rel="stylesheet" href="/global.css">
</head>
<body>
    <div>
        <ul class="navleft">
            <li><a href="home.html">Home</a></li>
        </ul>
        <ul class="navright">
            <li><a href="SignUp.html">Sign Up</a></li>
            <li><a href="Login.html">Log In</a></li>
        </ul>
    </div>
    <div class="box">
        <div class="login">
            <form action="login.php" method = "POST">
                <h1>Student Login</h1>
                <label for="username">Username:</label><br>
                <input type="text" id="username" class="username" name="username"><br>
                <label for="password">Password:</label><br>
                <input type="text" id="password" class="password" name="password"><br>
                <a href="signup.php">Create Account?</a><br>
                <a href="forgot.html">Forgot Password?</a><br>
                <a href="loginadmin.php">Log in as Admin?</a><br>
                <a href="loginfaculty.php">Log in as Faculty?</a><br>
                <input type="submit" value="Sign In">
            </form>
        </div>
        
    </div>
</body>
</html>
<?php
	error_reporting(0);
	include("connect.php");
	
	$sql = "";
	if(!empty($_POST['username']) && !empty($_POST['password'])){
		$username = $_POST['username'];
		$password = $_POST['password'];
		
		$sql = "SELECT * FROM student WHERE student_username = '$username'";
		
		
		$result = mysqli_query($con, $sql);
		if($result){
			if($result && mysqli_num_rows($result) > 0){
				$user_data = mysqli_fetch_assoc($result);
				
				if($user_data['password'] === $password){
					$_SESSION['studentID'] = $user_data['studentID'];
					header("Location: /QuizManager/quiz-project-main/student/join.html");
				}
			}
		}
		echo "Wrong username or password.";

	}

	mysqli_close($con);

?>
