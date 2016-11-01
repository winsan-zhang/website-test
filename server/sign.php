<?php
    header("Content-Type: application/json;charset=utf-8");
    session_start();
    $usr_name = (String)$_POST["username"];
//    $pwd = (String)$_POST["password"];

    if($usr_name == "winsan"){
        $success = 0;
        $msg = "fuck";
        $resData = '{ "success": '.$success.'}';
        echo $resData;
    }else {
        $success = 1;
        $msg = "success";
        $resData = '{ "success": '.$success.', "msg": '.$msg.'}';
        echo $resData;
    }

