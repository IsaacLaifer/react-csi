<?php

include 'model/functionsUtils.php';
$connexion = FunctionsUtils::activeCnx();

if ($connexion != null) {
  echo "<p>Connexion à la base de donnée réussie</p>";

?>
  <a href="controller/getAllBlogs.php">Aller sur le site</a>
<?php

  var_dump($connexion);
} else {
  echo "<p> ! Connexion à la base de donnée échouée ! </p>";
}


?>