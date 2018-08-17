<?php
$conn = new mysqli("localhost:3306", "root", "", "bk1808");

$conn->query("set names 'utf8'");

$num = $_GET["num"];		// 每一页显示多少行数据


$p = $_GET["p"];			//第几行开始

$min = ($p-1)*$num;

$sql = "select * from shop order by id asc limit $min, $num";

$result = $conn->query($sql);
$i=0;
while( $row=$result->fetch_assoc() ){
$arr=array(
		"id1"=>$row["id"],
		"imgs1"=>$row["imgs"],
		"names1"=>$row["names"],
		"unit1"=>$row["unit"],
		) ;
	$user[$i]=$arr;
	$i++;
};

echo json_encode($user,$p);

//alert()
?>