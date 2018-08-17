<?php
header('Content-Type: text/html; charset=utf-8');	
$conn = new mysqli("localhost:3306", "root", "", "bk1808");

$conn->query("set names 'utf8'");
$imgs = $_GET["imgs"];
$names = $_GET["names"];
$unit = $_GET["unit"];

$sql = "insert into shop(imgs,names,unit,regtime)values('$imgs','$names','$unit',now()) ";

$conn->query($sql);

echo "添加成功";
?>