<?php

$name = $_POST ['name'];

$msg = $_POST['msg'];

$subj = 'Message sent by '. $name;


// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail( 'chalnicol@gmail.com', $subj ,$msg);

header ( "Location:https://chalnicol.tech" );

exit;

?>