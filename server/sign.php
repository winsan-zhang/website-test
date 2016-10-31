<?php
    header("content-type: application/json;charset=utf-8");
    session_start();
    $usr_name = (String)$_POST["username"];
    $pwd = (String)$_POST["password"];

    if($usr_name == "winsan"){
        $success = false;
        $msg = "用户名以被注册，请更换";
        $resData = '{ "success": '.$success.', "msg": '.$msg.'}';
        echo $resData;
    }else {
        $success = true;
        $msg = "success";
        $resData = '{ "success": '.$success.', "msg": '.$msg.'}';
        echo $resData;
    }

