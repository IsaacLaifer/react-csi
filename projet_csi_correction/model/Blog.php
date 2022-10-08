<?php

/**
 *Classe d'un Blog
 */
class Blog
{
    private $idBlog;
    private $titleBlog;
    private $textBlog;

    public function __construct($titleBlog, $textBlog, $idBlog = 0)
    {
        $this->titleBlog = $titleBlog;
        $this->textBlog = $textBlog;
        $this->idBlog = $idBlog;
    }

    public function getIdBlog()
    {
        return $this->idBlog;
    }

    public function getTitleBlog()
    {
        return $this->titleBlog;
    }

    public function setTitleBlog($titleBlog)
    {
        $this->titleBlog = $titleBlog;

        return $this;
    }

    public function getTextBlog()
    {
        return $this->textBlog;
    }

    public function setTextBlog($textBlog)
    {
        $this->textBlog = $textBlog;

        return $this;
    }

    /**
     *fonction qui insert un blog dans une base de données
     */
    public function insertBlog($cnx)
    {
        $insertBlog = $cnx->prepare("INSERT INTO `blog`(`titleBlog`, `textBlog`)
                                       VALUES ('$this->titleBlog','$this->textBlog')");
        $insertBlog->execute();
    }
}
