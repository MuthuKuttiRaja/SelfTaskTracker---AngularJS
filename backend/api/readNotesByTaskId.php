<?php
/**
 * Returns the list of policies.
 */
require 'database.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$taskId = mysqli_real_escape_string($con, trim($request->taskId));
$notes = [];
$sql = "select notesId, taskId, notes, createdTime from notes 
        where cast(taskId as char) like '{$taskId}'";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $notes[$i]['notesId']    = (int)$row['notesId'];
    $notes[$i]['taskId'] = (int)$row['taskId'];
    $notes[$i]['notes'] = $row['notes'];
    $notes[$i]['createdDateTime'] = $row['createdTime'];
    $i++;
  }

  echo json_encode($notes);
}
else
{
  http_response_code(404);
}
