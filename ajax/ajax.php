<!DOCTYPE html>
<html>
<head>
	<title>time()</title>
	<meta charset="utf-8">
<body>
	<strong>The time() is:</strong>
	<span id="time"><?php echo time(); ?></span>
	<button>Update time</button>

	<script src="../ajax.js"></script>
	<script src="../events.js"></script>
	<script>
		var button = document.getElementsByTagName('button')[0];
		addEventListener(button, 'click', function () {
			get('ajaxUpdate.php', '', function (time) {
				document.getElementById('time').innerHTML = time;
			});
		});
	</script>
</body>
</html>