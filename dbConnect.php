<?php
$dblocation = "localhost";
$dbname = "mysql";
$dbuser = "root";
$dbpasswd = "";
$dbcnx = @mysqli_connect($dblocation,$dbuser,$dbpasswd,$dbname);
if (!$dbcnx)
{
  echo( "<P>В настоящий момент сервер базы данных не доступен, поэтому
            корректное отображение страницы невозможно.</P>" );
  exit();
}
?>
