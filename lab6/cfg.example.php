<?php
$host = '';
$port = 3306;
$dbname = '';

$dsn = "mysql:host=$host;port=$port;dbname=$dbname;charset=utf8mb4";
$user = '';
$password = '';

$pdo = new PDO($dsn, $user, $password);

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
?>
