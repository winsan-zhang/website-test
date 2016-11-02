<?php
    header("Content-Type: application/json;charset=utf-8");
    session_start();
    $usr_name = (String)$_POST["username"];
//    $pwd = (String)$_POST["password"];

    if($usr_name == "winsan"){
        $success = 0;
        $msg = "该用户名已被注册，请更换";
        $resData = array("success"=>$success, "msg"=>$msg);
        $resData = json_encode($resData);
        echo $resData;
    }else {
        $success = 1;
        $msg = "该用户名可以使用";
        $resData = array("success"=>$success, "msg"=>$msg);
        $resData = json_encode($resData);
        echo $resData;
    }

