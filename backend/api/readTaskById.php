<?php
/**
 * Returns the list of policies.
 */
require 'database.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$id = mysqli_real_escape_string($con, trim($request->id));

$task = [];
$sql = "SELECT id, project, name, status, startedTime, estimatedFinishTime, priority FROM tasks
            where cast(id as char) like '{$id}'";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $task['id']    = (int)$row['id'];
    $task['project'] = $row['project'];
    $task['timeStarted'] = $row['startedTime'];
    $task['timeCompleted'] = $row['estimatedFinishTime'];
    $task['name']    = $row['name'];
    $task['status'] = $row['status'];
    $task['priority'] = $row['priority'];
    $task['notes'] = '';
    $i++;
  }

  echo json_encode($task);
}
else
{
  http_response_code(404);
}
