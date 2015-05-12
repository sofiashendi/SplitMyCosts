<?php

	$arrJson = array(
		'success' => 0,
		'errors' => array()
	);

	$strEmail = trim($_POST['email']);
	$strName = trim($_POST['name']);

	if(strlen($strEmail) == 0)
	{
		$arrJson['errors']['global'] = 'Please add an email address.';
	}
	
	if(strlen($strName) == 0)
	{
		$arrJson['errors']['global'] = 'Please add a name.';
	}

	if(count($arrJson['errors']) == 0)
	{
		$arrJson['success'] = 1;
		unset($arrJson['errors']);
	}

	echo json_encode($arrJson);