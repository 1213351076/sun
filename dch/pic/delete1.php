<?php
$conn = new mysqli("localhost:3306", "root", "", "bk1808");

$conn->query("set names 'utf8'");


$sql = "TRUNCATE TABLE shop";

$conn->query($sql);


?>