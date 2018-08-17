<?php
$conn = new mysqli("localhost:3306", "root", "", "bk1808");
$conn->query("set names 'utf8'");

$sql="select count(*) as num from shop";//查询到数据库所有的数据
$result = $conn->query($sql);

$row = $result->fetch_assoc();

$ma = $row["num"];


if($ma==0){
	echo 0;
}else{
	echo $ma;
}





?>