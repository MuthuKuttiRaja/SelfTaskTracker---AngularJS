<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$tasks = [];
$sql = "SELECT id, project, name, status, startedTime, estimatedFinishTime, priority FROM tasks";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $tasks[$i]['id']    = (int)$row['id'];
    $tasks[$i]['project'] = $row['project'];
    $tasks[$i]['timeStarted'] = $row['startedTime'];
    $tasks[$i]['timeCompleted'] = $row['estimatedFinishTime'];
    $tasks[$i]['name']    = $row['name'];
    $tasks[$i]['status'] = $row['status'];
    $tasks[$i]['priority'] = $row['priority'];
    $tasks[$i]['notes'] = '';
    $i++;
  }

  echo json_encode($tasks);
}
else
{
  http_response_code(404);
}
