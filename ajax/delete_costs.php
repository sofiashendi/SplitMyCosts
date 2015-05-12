<?php

	$arrJson = array(
		'success' => 0,
		'errors' => array()
	);

	$intID = trim($_POST['expense_id']);
	
	if(count($arrJson['errors']) == 0)
	{
		$arrJson['success'] = 1;
		unset($arrJson['errors']);
	}

	echo json_encode($arrJson);