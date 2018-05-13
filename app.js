$(document).ready(function(){
	//votre code
	var messages=[
	"Même si un million de personnes croient en une idiotie, ça reste une idiotie.",
	"Idiot, pourquoi te soucier de ce qui se passera dans plusieurs années ? Il faut être fou pour trembler de peur à l'idée de mourir pendant qu'on est vivant.",
	"L'honneur consiste le plus souvent à être idiot.Et ne vaut-il pas mieux se conduire comme une imbécile que se déshonorer ? ",
	"Cher disciple, je suis très peiné de devoir vous annoncer une bien mauvaise nouvelle, mais... VOUS ÊTES UN SOMBRE IDIOT ! ",
	"C'était idiot, mais incroyablement touchant, ces gens qui dépensaient une telle énergie à essayer de me comprendre.",
	"Les idiots et l'argent sont comme la glace et la chaleur. Ils ne font pas bon ménage.",
	"Mais vous savez, quand on est amoureux, on est idiot.",
	"L’idiot ne comprend pas le vrai sens des choses, il n'en voit que la surface."
	]
	var x=0;
			$('.cake').click(function(){
			x++;
			var y=$('span').text(x);
			if(x%20==0 && x%100!=0){
				alert(messages[Math.floor(Math.random()*8)]);
			}
			if (x%100==0 && x%1000!=0){
				alert('Vous avez cliqué jusquà atteindre un nombre à 3 chiffres ?? Excellent parce que votre QI, lui, est bloqué a 2 :/')
			} 
		})
	});