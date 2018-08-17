<?php
$conn = new mysqli("localhost:3306", "root", "", "bk1808");

$conn->query("set names 'utf8'");

$user = $_GET["user"];
$pass = $_GET["pass"];
$email = $_GET["email"];
$sql = "insert into userlist1(email,username,password,regtime)values('$email','$user','$pass',now()) ";

$conn->query($sql);

echo "注册成功";
?>