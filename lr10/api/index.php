<?php 
require 'config.php';
require 'db.php';
require 'model.php';
require 'auth.php';
require 'controller.php';

header('Content-type: application/json'); 
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS'); 
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization'); 

$input = json_decode(file_get_contents( 'php://input'), true); 
 
 (new Controller())->run();