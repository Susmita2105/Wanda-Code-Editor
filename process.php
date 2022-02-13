<?php 

    if(isset($_POST['btn-submit']))
    {
       $UserName = $_POST['UName'];
       $Email = $_POST['Email'];
       $Msg = $_POST['msg'];

       if(empty($UserName) || empty($Email) || empty($Msg))
       {
           header('location:contact.php?error');
       }
       else
       {
           $to = "baruaankita2002@gmail.com";

           if(mail($to,$Msg,$Email))
           {
               header("location:contact.php?success");
           }
       }
    }
    else
    {
        header("location:contact.php");
    }
?>