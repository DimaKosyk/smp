<?php
    session_start();
    if(!$_SESSION['check']){
        $_SESSION['check'] = true;
        echo "-";
    }
    include "dbConnect.php";
    $userName = $_SESSION['username'];
    $userId = $_SESSION['userid'];
    $_SESSION['userid'];
    $noteTitleArr = array();
    $noteContentArr = array();
    $noteDateArr = array();
    $noteIdArr = array();
    $cnt = 0;
	$result = "<div class='container'>";
    if($userName != "admin"){
            $query = "SELECT * FROM notes WHERE `user_id` =".$userId;
            $us = mysqli_query($dbcnx, $query);
            if($us)
            {
                while($notes = mysqli_fetch_array($us, MYSQLI_ASSOC))
                {

                    $noteTitleArr[$cnt] = $notes['title'];
                    $noteContentArr[$cnt] = wordwrap($notes['content'], 40, "\n",1);
                    $noteDateArr[$cnt] = $notes['date'];
                    $noteIdArr[$cnt] = $notes['note_id'];
                    $cnt++;
                }
                $_SESSION['noteTitleArr'] = $noteTitleArr;
                $_SESSION['noteContentArr'] = $noteContentArr;
                $_SESSION['noteDateArr'] = $noteDateArr;
                $_SESSION['noteIdArr'] = $noteIdArr;
                $cnt = 0;

            }
            else
            {
              echo "<p><b>Error: ".mysqli_error($dbcnx)."</b></p>";
              exit();
            }

    }
            if($noteTitleArr[$cnt]){
                $result .= "<div class='jumbotron mainHeader'><h1 id='title'>".$noteTitleArr[$cnt]."</h1>";

            }else {
                $result .= "<div class='jumbotron mainHeader'><h1 id='title'>Hello ".$userName."</h1>";
            }
            if($noteContentArr[$cnt]){
                $result .=  "<p id='content'>".$noteContentArr[$cnt]."</p></div><div id='cont' class='row'>";
            }
                    else {
                        $result .=  "<p id='content'>You have no notes yet!</p></div><div id='cont' class='row'>";
                         }

             while($noteIdArr[$cnt]){
                    $result.="<div id='container".$noteIdArr[$cnt]."' class='col-xs-6 col-lg-4'><div class='panel'><div class='panel-heading fff'><h2 id='title".$noteIdArr[$cnt]."'>".$noteTitleArr[$cnt]."</h2></div><p id='content".$noteIdArr[$cnt]."' hidden>".$noteContentArr[$cnt]."</p><div class='panel-body'><div class='row '><p class='col-md-6'><a class='btn btn-warning' href='javascript:open(".$noteIdArr[$cnt].")' role='button' >Open node »</a></p><p class='col-md-6'><a class='btn btn-danger' href='javascript:deleteNote(".$noteIdArr[$cnt].")' role='button'>Delete Note</a></p></div></div><div class='panel-footer ddd'><h5>".$noteDateArr[$cnt]."</h5></div></div></div>";
                    $cnt++;
            }

            $result .="</div></div></div></div></div></div></div>";
            echo $result;
        mysqli_close($dbcnx);

?>
