//Global variables
var i = 0;
var score = 0; //total score
var form = document.getElementById('quizForm');
var nextBtn = document.getElementById('startBtn');
var nextBtn = document.getElementById('nextBtn');
var endBtn = document.getElementById('endBtn');

function initialize() {
	form.style.display = 'block';
	startBtn.style.display = 'none';
	nextBtn.style.display = 'block';

	nextQuestion();
}

function nextQuestion() {
	var q = data[i].question;
	var choices = Object.values(data[i].choices);

	console.log(q, choices);
	showQuestion(q, choices);

	i++;

	if (i == 29) {
		endGame();
	}
}

function showQuestion(question, choices) {
	var child = form.lastElementChild;  
	while (child) { 
			form.removeChild(child); 
			child = form.lastElementChild; 
	} 

	const q = document.createElement('h4');
	q.innerHTML = question;
	form.appendChild(q)

	choices.forEach((choice, idx) => {
		const div = document.createElement('div');
		div.setAttribute('style', 'display: block');
		const option = document.createElement('input');
		option.setAttribute('type', 'radio');
		option.setAttribute('name', 'stage')
		option.setAttribute('value', choice[1]);
		const label = document.createElement('label');
		label.innerHTML = choice[0];
		label.setAttribute('style', 'margin-left: 10px');
		div.appendChild(option);
		div.appendChild(label);
		form.appendChild(div);
	});
}

function endGame () {
	nextBtn.style.display = 'none';
	endBtn.style.display = 'block';

	// totalScore();
}

// function totalScore() {

// 	//점수 계산 코드 짜기
// }


let data = 
[
  {
    "question": "Look! You are crying and a little baby. Your mom is washing dishes.",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "Mom will first finish washing dishes.",
        5
      ],
      "choiceB": [
        "Mom ignores you.",
        0
      ],
      "choiceC": [
        "Mom stops washing dishes, and hug you.",
        15
      ],
      "choiceD": [
        "Mom will feed you.",
        10
      ]
    },
    "stage": "Trust vs Mistrust"
  },
  {
    "question": "Your parents are watching the Super Bowl! Oh, you are about to cry.",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "They will watch super bowl with you.",
        5
      ],
      "choiceB": [
        "They will turn off the TV and check you.",
        15
      ],
      "choiceC": [
        "Our team is winning! They will ignore you and turn the volume up.",
        0
      ]
    },
    "stage": "Trust vs Mistrust"
  },
  {
    "question": "Your parents have an argument. And you suddenly start to cry.",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "Parents will stop the argument and look after you.",
        10
      ],
      "choiceB": [
        "They do not feel good. Keep having the argument.",
        0
      ]
    },
    "stage": "Trust vs Mistrust"
  },
  {
    "question": "You are about to cry. Who is around you?",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "Caregivers",
        10
      ],
      "choiceB": [
        "Alone",
        0
      ]
    },
    "stage": "Trust vs Mistrust"
  },
  {
    "question": "You are now a toddler. You want to go outside and play at the playground with parents. What does your parent say?",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "NO! Too dangerous.",
        0
      ],
      "choiceB": [
        "Sure sure. Let’s go outside.",
        10
      ],
      "choiceC": [
        "Stop. You can only go outside when we are not busy.",
        5
      ]
    },
    "stage": "Autonomy vs Shame and doubt"
  },
  {
    "question": "What is your food preference?",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "Beef",
        10
      ],
      "choiceB": [
        "Vegetables",
        10
      ],
      "choiceC": [
        "Anything caregivers give me.",
        0
      ]
    },
    "stage": "Autonomy vs Shame and doubt"
  },
  {
    "question": "Which toys do you want to play with?",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "Doll",
        10
      ],
      "choiceB": [
        "Lego",
        10
      ],
      "choiceC": [
        "Anything caregivers give me.",
        0
      ]
    },
    "stage": "Autonomy vs Shame and doubt"
  },
  {
    "question": "Did you master toilet training?",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "Yes",
        10
      ],
      "choiceB": [
        "No",
        0
      ]
    },
    "stage": "Autonomy vs Shame and doubt"
  },
  {
    "question": "You made a mud pie for your mom and she was not happy that I got mud all over my pants.",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "I will not make her another one.",
        0
      ],
      "choiceB": [
        "I will make until she’s happy.",
        10
      ]
    },
    "stage": "Initiative vs Guilt"
  },
  {
    "question": "You made a paper windmill for Dad and it made him happy.",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "I will make him another one.",
        10
      ],
      "choiceB": [
        "I will stop making it.",
        0
      ]
    },
    "stage": "Initiative vs Guilt"
  },
  {
    "question": "You made a paper flower for your friend and it made him/her happy.",
		"imgSrc": "",
		"choices": {
			"choiceA": [
				"Make another paper flower for her.",
				10
			],
			"choiceB": [
				"Take a paper flower from her when she feels happy and tear it apart.",
				0
			]
		},
    "stage": "Initiative vs Guilt"
  },
  {
    "question": "You were with mom, and found a hungry dog.",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "I feel guilty, so I’ll ask my mom if we could feed him/her.",
        10
      ],
      "choiceB": [
        "Homeless dogs are dirty. Ignore.",
        0
      ]
    },
    "stage": "Initiative vs Guilt"
  },
  {
    "question": "Yeah! You are now at school! Where are you at school in terms of academic achievement?",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "Bottom 10%",
        0
      ],
      "choiceB": [
        "Bottom.",
        5
      ],
      "choiceC": [
        "Middle",
        10
      ],
      "choiceD": [
        "Top",
        15
      ],
      "choiceE": [
        "Top 10%",
        20
      ]
    },
    "stage": "Industry vs Inferiority"
  },
  {
    "question": "What did you do when you struggled with your homework?",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "I always asked for help from people around me: teachers, parents, friends… everyone can help me!",
        10
      ],
      "choiceB": [
        "I usually didn’t ask and I really tried not to! If I ask questions, people will think that I am dumb. Urgh! That shouldn’t happen.",
        0
      ]
    },
    "stage": "Industry vs Inferiority"
  },
  {
    "question": "How did the people around you respond when you ask for help?",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "They always explained in detail and praised me for asking questions.",
        10
      ],
      "choiceB": [
        "They were not responsive, but I was able to solve the problems and find my way around.",
        5
      ],
      "choiceC": [
        "They never responded, and I wasn’t able to learn what I need to learn.",
        0
      ]
    },
    "stage": "Industry vs Inferiority"
  },
  {
    "question": "Today was the final poster presentation day! What did everyone say?",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "My poster was one of the most popular ones. The poster that I made will be presented in the school hallway!",
        10
      ],
      "choiceB": [
        "The teacher said I tried hard and some of my friends told me it was good but I know that it’s clearly not one of the best.",
        5
      ],
      "choiceC": [
        "Nobody clapped after my poster showcase. The past effort has been effortless!",
        0
      ]
    },
    "stage": "Industry vs Inferiority"
  },
  {
    "question": "You took an exam. How did you do and what did your parents say?",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "I did very well! My parents praised me a lot :)",
        5
      ],
      "choiceB": [
        "I did not do well but my parents still thanked me for my effort and they said I can do better next time.",
        15
      ],
      "choiceC": [
        "I did very well! Oh well, but my parents were not interested in my scores as usual. They said nothing.",
        10
      ],
      "choiceD" : [
        "I did not do well…. And my parents scolded me for that. They said if I fail on these easy exams, then I will not do good in the future with even harder exams.",
        0
      ]
    },
    "stage": "Industry vs Inferiority"
  },
  {
    "question": "You know how to make yourself happy.",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "Of course! If I don’t know myself, then who? I have my go-tos",
        10
      ],
      "choiceB": [
        "I am not sure but I guess what makes others happy will also make me feel good?",
        5
      ],
      "choiceC": [
        "I have no idea. What makes me happy? Do I feel happy at all? Hmm..",
        0
      ]
    },
    "stage": "Identity vs Role Confusion"
  },
  {
    "question": "When I tried to do new things, my parents….",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "Always encouraged me to explore! They said I can only learn what I want to do by trying different things.",
        10
      ],
      "choiceB": [
        "Were not happy. They didn’t want me to waste time on such meaningless activities.",
        0
      ]
    },
    "stage": "Identity vs Role Confusion"
  },
  {
    "question": "Did you know what you wanted to be in the future at that time?",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "Hell yeah!! I was so passionate about it.",
        10
      ],
      "choiceB": [
        "Undecided but I was so excited to explore!",
        5
      ],
      "choiceC": [
        "Undecided and I was not sure how to find it out…",
        0
      ]
    },
    "stage": "Identity vs Role Confusion"
  },
  {
    "question": "Are you happy with your outfit for school tomorrow?",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "Yesss. You know what? I have my own style and I love it.",
        10
      ],
      "choiceB": [
        "Hmmm...I might take a while to pick my outfit tomorrow morning but I enjoy that process. Fashion matters.",
        5
      ],
      "choiceC": [
        "NO no no no! I don’t know what to wear. Will my friends like my clothes? What will others think? What if people think it’s weird?",
        0
      ]
    },
    "stage": "Identity vs Role Confusion"
  },
  {
    "question": "In social situations, you were the person who…",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "Loved to mingle with others",
        10
      ],
      "choiceB": [
        "Wanted to be alone",
        0
      ]
    },
    "stage": "Intimacy vs Isolation"
  },
  {
    "question": "You had an argument with a friend you knew from high school. You were considering whether you should go talk to him/her.",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "He was the one who got my nerves first. Why should I?",
        5
      ],
      "choiceB": [
        "I should apologize first and then save our struggling relationship.",
        10
      ],
      "choiceC": [
        "You know what? I’m gonna meet up with my other friends and do a number on him/her.",
        0
      ]
    },
    "stage": "Intimacy vs Isolation"
  },
  {
    "question": "You got your first job near my hometown and have been working for a month. You would like to be familiar with co-workers, but you had no idea what to do.",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "Yeah, I could ask them to come over to my house and have dinner together.",
        10
      ],
      "choiceB": [
        "I’m not that close to them, so how should I ask for them to do something? I don’t know…",
        5
      ],
      "choiceC": [
        "I kinda want to hang out with them after work, but not this time.",
        5
      ],
      "choiceD": [
        "Being alone is the best option. Go away.",
        0
      ]
    },
    "stage": "Intimacy vs Isolation"
  },
  {
    "question": "You found someone you fell in love with. You have a crush on him/her. What should you do? Should I ask for a date?",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "Yes",
        10
      ],
      "choiceB": [
        "No",
        0
      ]
    },
    "stage": "Intimacy vs Isolation"
  },
  {
    "question": "You married a person you met from a workplace. You and your spouse went on a  honeymoon. During the flight, he/she tells you that you and him/her would be the happiest partner ever. Your reaction was:",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "For sure.",
        10
      ],
      "choiceB": [
        "…Okay.",
        0
      ]
    },
    "stage": "Generativity vs. Stagnation"
  },
  {
    "question": "You became a senior staff in your workplace. A newbie just got in recently, but he seems a bit clumsy and feels stressed about his work life.",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "Buys him a drink and hear the hardships he went through in the workplace.",
        10
      ],
      "choiceB": [
        "Force him to do better performance",
        0
      ],
      "choiceC": [
        "Look on him",
        0
      ]
    },
    "stage": "Generativity vs. Stagnation"
  },
  {
    "question": "Your son/daughter came to ask you about his/her innocent, somewhat unrealistic dream. He/She reminds of your childhood when you used to picture yourself to a hero who changes the world. You said….",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "Be realistic kiddo. Don’t act like a child and be mature, or else you’ll fall behind.",
        0
      ],
      "choiceB": [
        "When I was little, I had a similar dream goal too. I used to do….",
        10
      ],
      "choiceC": [
        "(Ignore)",
        5
      ]
    },
    "stage": "Generativity vs. Stagnation"
  },
  {
    "question": "Last choice. Looking back on what you have done in your life, you ponder over who you were and what you’ll become. Your thought was...",
    "imgSrc": "",
    "choices": {
      "choiceA": [
        "I wish I could go back to days when I was little. I wanna start over…",
        5
      ],
      "choiceB": [
        "I wanna live my life to the fullest. What should I do to make myself shine brighter?",
        15
      ],
      "choiceC": [
        "I regret every single decision I made up to this moment.",
        0
      ]
    },
    "stage": "Generativity vs. Stagnation"
  }
]