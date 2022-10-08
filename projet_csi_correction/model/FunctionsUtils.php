<?php

/**
 *
 */
class FunctionsUtils
{

  //Fonction qui établie la connexion avec la base de données
  static function activeCnx()
  {
    if (file_exists('utils/autoloader.php')) {
      require 'utils/autoloader.php';
    } else {
      if (file_exists('../utils/autoloader.php')) {
        require '../utils/autoloader.php';
      }
    }

    Autoloader::register();
    $dbh = Connexion::seConnecter();
    $cnx = $dbh->getCnx();

    return $cnx;
  }
}
