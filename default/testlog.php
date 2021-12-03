<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In</title>
    <link rel="stylesheet" href="../default/login.css">
    <link rel="stylesheet" href="../global.css">
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
            <div class = "selection">
                <label for="student">
                    <input type="radio" name="qtype" id="student" value="student" onclick="replaceshort(this.id)" checked/>
                    Student
                </label>
               
                <label for="faculty">
                    <input type="radio" name="qtype" id="faculty" value="faculty" onclick="replaceshort(this.id)"/>
                    Faculty
                </label>
                <label for="admin">
                    <input type="radio" name="qtype" id="admin" value="admin" onclick="replaceshort(this.id)"/>
                    Admin
                </label>
            </div>
            
                <label for="username">Email:</label><br>
                <input type="text" id="username" class="username" name="username"><br>
                <label for="password">Password:</label><br>
                <input type="text" id="password" class="password" name="password"><br>
                <a href="signup.php">Create Account?</a><br>
                <a href="forgot.html">Forgot Password?</a><br>
            
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

		}else if ($qtype == 'faculty'){
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
		} else{
            $sql = "SELECT * FROM admin WHERE admin_username = '$username'";
            $result = mysqli_query($con, $sql);
            if($result){
                if($result && mysqli_num_rows($result) > 0){
                    $user_data = mysqli_fetch_assoc($result); 
                         
                    if($user_data['password'] === $password){
                        $_SESSION['adminID'] = $user_data['adminID'];
                        header("Location: /QuizManager/quiz-project-main/admin/home.html");
                    }
                }
            }
            echo "Wrong username or password.";
        }
	}

	if(mysqli_query($con,$sql)){
		header("Location: login.php");
	}

mysqli_close($con);
?>
</body>
</html>

		
		
		