var bars = [
				'Siggys',
				'Blind Tiger',
				'Zum Schneider',
				'One Month',
				'Home Sweet Home',
				'Union Pool'
			];

			// Our List of Friends
			var friends = [
				'Mattan',
				'Chris',
				'Lee',
				'Casey',
				'that girl you forgot to text back',
				'Kayne West'
			];

			var randomNumber = Math.ceil(Math.random()*bars.length);
			var barname = bars[randomNumber];
			document.write("Randomly selected index from bars array :");
			document.write(randomNumber);
			document.write("<br>");

			var randomNumber = Math.floor(Math.random()*friends.length);
			var friendname = friends[randomNumber];
			document.write("<br>");
			document.write("Randomly selected index from friends array :");
			document.write(randomNumber);
			document.write("<br>");
			document.write("<br>");


			document.write("How about you go to <strong>" + barname + "</strong> with <strong>" + friendname + "</strong>?");
