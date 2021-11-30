
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
            <li><a href="signup.php">Sign Up</a></li>
            <li><a href="login.php">Log In</a></li>
        </ul>
    </div>
    <div class="box">
        <div class="login">
            <form action="loginfaculty.php" method = "POST">
                <h1>Faculty Login</h1>
                <label for="username">Username:</label><br>
                <input type="text" id="username" class="username" name="username"><br>
                <label for="password">Password:</label><br>
                <input type="text" id="password" class="password" name="password"><br>
                <a href="signup.php">Create Account?</a><br>
                <a href="forgot.html">Forgot Password?</a><br>
                <a href="loginadmin.php">Log in as Admin?</a><br>
                <a href="login.php">Log in as Student?</a><br>
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
		
		$sql = "SELECT * FROM faculty WHERE faculty_username = '$username'";
		
		
		$result = mysqli_query($con, $sql);
		if($result){
			if($result && mysqli_num_rows($result) > 0){
				$user_data = mysqli_fetch_assoc($result);
				
				if($user_data['password'] === $password){
					$_SESSION['facultyID'] = $user_data['facultyID'];
					header("Location: /QuizManager/quiz-project-main/faculty/home.html");
				}
			}
		}
		echo "Wrong username or password.";

	}

	mysqli_close($con);

?>
