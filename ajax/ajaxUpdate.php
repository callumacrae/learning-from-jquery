<?php

if ($_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest') {
	echo time();
} else {
	echo 'Please go to ajax.php and request this page using AJAX.';
}

?>