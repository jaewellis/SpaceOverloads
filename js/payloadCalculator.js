  function calcPayload() {
		var rocketName = document.getElementById("rocket").value;
	 	var leo;
	 	var mars;
	 	var goal;

		if (rocketName == 'big_fkin_rocket') {
			leo = '220,000 lbs';
			mars = '220,000 lbs';
		}
		if (rocketName == 'falcon_9') {
			leo = '50,300 lbs';
			mars = '8,860 lbs';
		}
		if (rocketName == 'falcon_heavy') {
			leo = '140,700 lbs';
			mars = '37,000 lbs';
		}
		if (goal == 'tomars') {
			document.getElementById('output').value=mars;
		} else document.getElementById('output').value=leo;
	}