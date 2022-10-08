<?php
include '../model/FunctionsUtils.php';
include '../model/Blog.php';

$cnx = FunctionsUtils::activeCnx();

$allBlogs = array();
$rqt = $cnx->prepare("select idBlog, titleBlog, textBlog
                        from blog");
$rqt->execute();

foreach ($rqt->fetchAll(PDO::FETCH_ASSOC) as $line) {

    $blog =
        [
            'titleBlog' => $line['titleBlog'],
            'textBlog'  => $line['textBlog'],
            'idBlog'    => $line['idBlog']
        ];

    $allBlogs[] = $blog;
}

echo json_encode($allBlogs);
