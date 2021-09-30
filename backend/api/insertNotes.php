<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
 // if(trim($request->number) === '' || (float)$request->amount < 0)
 // {
 //   return http_response_code(400);
  //}

  // Sanitize.

  $notes = mysqli_real_escape_string($con, trim($request->notes));
  $taskId = mysqli_real_escape_string($con, trim($request->taskId));
  

  // Create.
  $sql = "INSERT INTO `notes`(`taskId`,`notes`,`createdTime`) VALUES ('{$taskId}','{$notes}',NOW())";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $task = [
      'status' => 'completed'
    ];
    echo json_encode($task);
  }  
  else
  {
    http_response_code(422);
  }
}