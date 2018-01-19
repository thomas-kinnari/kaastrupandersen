<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    $arr_res = array('status'=>'failed','msg'=>'Something went wrong! Please try again later');

    if(!empty($_POST['first_name']) && !empty($_POST['last_name']) && !empty($_POST['work_email'])){

        require_once "vendor/autoload.php";

        $mail = new PHPMailer(true);
        $mail->isSMTP();            
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;                               
        $mail->Username = "testing@itactsolutions.com";                 
        $mail->Password = "test@124";
        $mail->Port = 587;                                   

        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $FullName = $_POST['first_name'].' '.$_POST['last_name'];
        $email = $_POST['work_email'];
        $company = 'N/A';
        $job_title = 'N/A';
        $industry = 'N/A';
        $country = 'N/A';
        $phone = 'N/A';
        $comment = 'N/A';
        $selected_category = 'N/A';
        $chk_update = 'Off';
        $chk_subscribe = 'Off';

        if(!empty($_POST['company'])){
            $company = $_POST['company'];
        }
        if(!empty($_POST['job_title'])){
            $job_title = $_POST['job_title'];
        }
        if(!empty($_POST['industry'])){
            $industry = $_POST['industry'];
        }
        if(!empty($_POST['country'])){
            $country = $_POST['country'];
        }
        if(!empty($_POST['phone'])){
            $phone = $_POST['phone'];
        }
        if(!empty($_POST['selected_category'])){
            $selected_category = $_POST['selected_category'];
        }
        if(!empty($_POST['comment'])){
            $comment = $_POST['comment'];
        }
        if(!empty($_POST['chk_update'])){
            $chk_update = $_POST['chk_update'];
        }
        if(!empty($_POST['chk_subscribe'])){
            $chk_subscribe = $_POST['chk_subscribe'];
        }

        $mail->From = $email;
        $mail->FromName = $FullName;
        $mail->addAddress("testing@itactsolutions.com");
        //$mail->addAddress("info@kaastrupandersen.dk");

        $mail->isHTML(true);

        $mail->Subject = "Kaastrup Andersen : Predictions and trends for 2018";

        $content = str_replace(
            array('{first_name}', '{last_name}', '{email}', '{company}', '{job_title}', '{industry}', '{comment}', '{selected_category}', '{chk_update}', '{chk_subscribe}', '{phone}', '{country}'),
            array($first_name, $last_name, $email, $company, $job_title, $industry, $comment, $selected_category, $chk_update, $chk_subscribe, $phone, $country),
            file_get_contents('email_template.html')
        );

        $body = $content;

        $mail->Body = $body;

        if(!$mail->send()) 
        {   
            $arr_res = array('status'=>'failed','msg'=>$mail->ErrorInfo);
        } 
        else 
        {   
            $arr_res = array('status'=>'success','msg'=>'mail sent');
        }
    }
    echo json_encode($arr_res);die();
?>