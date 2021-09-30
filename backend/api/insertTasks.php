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

  $name = mysqli_real_escape_string($con, trim($request->name));
  $status = mysqli_real_escape_string($con, trim($request->status));
  $project = mysqli_real_escape_string($con, trim($request->project));
  $timeCompleted = mysqli_real_escape_string($con, trim($request->timeCompleted));
  $priority = mysqli_real_escape_string($con, (int)$request->priority);


  // Create.
  $sql = "INSERT INTO `tasks`(`project`,`name`,`status`,`startedTime`,`estimatedFinishTime`,`priority`) VALUES ('{$project}','{$name}','{$status}',NOW(),'{$timeCompleted}','{$priority}')";

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