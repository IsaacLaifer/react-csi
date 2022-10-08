<?php
include '../model/FunctionsUtils.php';
include '../model/Blog.php';

$cnx = FunctionsUtils::activeCnx();


$newBlog = new Blog($_POST['titleBlog'], $_POST['textBlog']);

$newBlog->insertBlog($cnx);

header("Location: http://localhost:3000/ajout");

die();
