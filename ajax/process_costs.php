<?php

	$arrJson = array(
		'success' => 0,
		'errors' => array(),
		'id' => 0
	);

	$strExpense = trim($_POST['expense']);
	$strPrice = trim($_POST['price']);

	if(strlen($strPrice) == 0)
	{
		$arrJson['errors']['global'] = 'How much did it cost?';
	}

	if(strlen($strExpense) == 0)
	{
		$arrJson['errors']['global'] = 'What is the expense?';
	}
	
	if(count($arrJson['errors']) == 0)
	{
		$arrJson['success'] = 1;
		$arrJson['id'] = 'cost_' . rand(3, 100);
		unset($arrJson['errors']);
	}

	echo json_encode($arrJson);