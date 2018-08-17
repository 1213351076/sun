<?php
$conn = new mysqli("localhost:3306", "root", "", "bk1808");

$conn->query("set names 'utf8'");

$id = $_GET["id"];

$sql = "delete from shop where id='$id'";

$conn->query($sql);

echo "删除成功";
?>