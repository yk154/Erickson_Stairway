//Global variables
let i = 0;
let score = 0;
let totalScore = 0;
let firstStage = 0;
let secondStage = 0;
let thirdStage = 0;
let fourthStage = 0;
let fifthStage = 0;
let sixthStage = 0;
let seventhStage = 0;
const form = document.getElementById('quizForm');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const endBtn = document.getElementById('endBtn');
const image = document.getElementById('image');

function initialize() {
	form.style.display = 'block';
	startBtn.style.display = 'none';
	nextBtn.style.display = 'block';

	nextQuestion();
}

function nextQuestion() {
	const q = data[i].question;
	const choices = Object.values(data[i].choices);

	if (i !== 0) {
	  calculateScore(i - 1);
  }

  showQuestion(q, choices);
  showImage(i+1);

  i++;

  console.log('i', i);
	if (i === 29) {
		endGame();
	}
}

function removeChild() {
  let child = image.lastElementChild;
	while (child) { 
			image.removeChild(child); 
			child = image.lastElementChild; 
  } 
}

function showImage(src){
  removeChild();
  
  const img = document.createElement("img");
  img.src = "assets/"+src+".jpg";
  img.setAttribute('style', 'width: 100%; height: 100%');
  img.style.display= 'block';

  // img.setAttribute('style', 'display: block');
  // document.body.appendChild(img);
  image.appendChild(img);

  const citation = document.createElement("p");
  citation.innerHTML = data[i].imgSrc;
  citation.id = "citation"
  image.appendChild(citation);
}

function showQuestion(question, choices) {
  let child = form.lastElementChild;
	while (child) { 
			form.removeChild(child); 
			child = form.lastElementChild; 
	}

	const q = document.createElement('h4');
	q.innerHTML = question;
	form.appendChild(q);

	let div = null;
	let option = null;
	let label = null;

	choices.forEach((choice, idx) => {
		div = document.createElement('div');
		div.setAttribute('style', 'display: block');
		option = document.createElement('input');
		option.setAttribute('id', idx);
		option.setAttribute('type', 'radio');
		option.setAttribute('name', 'stage');
		option.setAttribute('value', choice[1]); //choice[1] -- question point
		label = document.createElement('label');
		label.innerHTML = choice[0]; //choice[0] -- question text
		label.setAttribute('style', 'margin-left: 10px');
		div.appendChild(option);
		div.appendChild(label);
		form.appendChild(div);
    document.getElementById(idx).addEventListener('click', () => clicked(idx));
	});
}

function endGame() {
	nextBtn.style.display = 'none';
  endBtn.style.display = 'block';
}

function displayResult() {
  calculateScore(i - 1);
  totalScore = firstStage + secondStage + thirdStage + fourthStage + fifthStage + sixthStage + seventhStage;
  console.log(totalScore);

  let child = document.getElementById("stages");
  child.style.display = "none";
  removeChild();

  const endingStory = document.createElement("p");

  for (var ith = 0; ith < endingTemplate.length - 1; ith++) {
    console.log(endings[ith])
    if(totalScore > endings[ith].threshold) {
      endingStory.innerHTML += endingTemplate[ith].context + " " + endings[ith].pos + " ";
    } else { endingStory.innerHTML += endingTemplate[ith].context + " " + endings[ith].neg + " "; }
  }

  endingStory.innerHTML += endingTemplate[endingTemplate.length - 1].context;

  const img = document.createElement("img");
  img.src = "assets/bear.png"
  img.width = '200';
  img.height = '280';
  img.align = 'left';

  document.getElementById("image").appendChild(img);
  document.getElementById("image").appendChild(endingStory);

}

function clicked(idx) {
  const id = document.getElementById(idx);
  score = id.getAttribute("value");
  console.log('score', score);
}

function calculateScore(i) {
  switch (true) {
    case (i <= 3):
      firstStage += +score;
      console.log("firstStage", firstStage);
      break;
    case (i > 3 && i <= 7):
      secondStage += +score;
      console.log("secondStage", secondStage);
      break;
    case (i > 7 && i <= 11):
      thirdStage += +score;
      console.log("thirdStage", thirdStage);
      break;
    case (i > 11 && i <= 16):
      fourthStage += +score;
      console.log("fourthStage", fourthStage);
      break;
    case (i > 16 && i <= 20):
      fifthStage += +score;
      console.log("fifthStage", fifthStage);
      break;
    case (i > 20 && i <= 24):
      sixthStage += +score;
      console.log("sixthStage", sixthStage);
      break;
    case (i > 24 && i <= 30):
      seventhStage += +score;
      console.log("seventhStage", seventhStage);
      break;
    default:
      break;
  }

  score = 0;
}

///JSON DATA



/*
first query = totalScore > 165?
second query = first + second + third > 65?
third query = fourth + fifth > 55?
fourth query = sixth + seventh > 45?
 */

let endings = [
  {
    "threshold": 165,
    "pos": "achieving a sense of integrity for what you have accomplished.",
    "neg": "falling into despair due to disappointments and nonfulfillments in your life."
  },
  {
    "threshold": 65,
    "pos": "your caregivers tried their best to show immediate and consistent responses to your needs. With their faith, you were able to develop a sense of personal independence and control over yourselves. They also encouraged you to confidently and independently choose your preferences.",
    "neg": "your caregivers failed to show immediate and consistent responses to your needs. Their strict surveillance made you doubt in your own abilities, not to mention that you were not able to learn independence and that you feared to make choices as you grow up.",
  },
  {
    "threshold": 55,
    "pos": "you have been highly praised for your accomplishments. You also explored a lot of different interests from hobbies to religion, and you were able to successfully recognize your identity and became confident about yourself.",
    "neg": "you have not been praised enough for your accomplishments. You grew to feel inferior about your abilities and became less likely to engage in new tasks in the future. You either did not experience different enough interests or were afraid of exploring them.",
  },
  {
    "threshold": 45,
    "pos": "you were able to build an intimate relationship with people at college or in your workplace. You also succeeded in guiding future generations and bringing positivity in society.",
    "neg": "you were isolated as you locked up yourself into your own space. You became a person who prioritized yourself the most. You ended up regretting what you have done in your life.",
  },
];

let endingTemplate = [
  {
    "order": 0,
    "context": "To my understanding, you have been",
  },
  {
    "order": 1,
    "context": "When you were a little baby, ",
  },
  {
    "order": 2,
    "context": "When you were a teenager, ",
  },
  {
    "order": 3,
    "context": "When you became an adult, ",
  },
  {
    "order": 4,
    "context": "What do YOU think about your life - was it meaningful to you?",
  },
];


let data = 
[
  {
    "question": "Look! You are crying and a little baby. Your mom is washing dishes.",
    "imgSrc": "[신생아 분수토] 당황하지 마세요! 아벤트가 알려주는 신생아 분수토의 원인 및 대처법. (n.d.). Retrieved from https://m.blog.naver.com/PostView.nhn?blogId=philipsavent&logNo=220756230632&proxyReferer=https://www.google.com/.",
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
    "imgSrc": "Ellis, K. (2018, July 10). Super Bowl Sunday. Retrieved from https://www.sheknows.com/health-and-wellness/articles/822983/how-to-enjoy-the-super-bowl-with-your-man/.",
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
    "imgSrc": "Avoid the Unhappy and Unlucky. (2016, December 13). Retrieved from https://lefuturistedailynews.com/2016/12/13/avoid-the-unhappy-and-unlucky/.",
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
    "imgSrc": "B., E. (2018, February 1). Cosa fare se il neonato fatica ad accettare il seno. Retrieved from https://www.maternita.it/cosa-fare-se-il-neonato-fatica-ad-accettare-il-seno.html.",
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
    "imgSrc": "Depositphotos, Inc. (n.d.). Zabawy dzieci z rodzicami na odkrytym placu zabaw. Retrieved from https://pl.depositphotos.com/100226976/stock-photo-playful-child-with-parents-at.html.",
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
    "imgSrc": "someone giving food 이미지. (n.d.). Retrieved from https://www.shutterstock.com/ko/search/someone giving food.",
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
    "imgSrc": "Lock, C. (2019, October 18). The 10 Best Toys to Buy 10-Month-Olds in 2019. Retrieved from https://www.verywellfamily.com/best-toys-for-10-month-olds-4169818.",
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
    "imgSrc": "When to Start Toilet Training: Is My Child Ready for It? (2018, June 26). Retrieved from https://childrensmd.org/browse-by-age-group/toddler-pre-school/toilet-training/.",
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
    "imgSrc": "Savchenko, M. (2019, August 31). Desenvolvimento do bebê aos 8 meses: o que vai acontecer. Retrieved from https://flo.health/pt/ser-mae/criar-um-bebe/cuidados-e-alimentacao-dos-bebes/desenvolvimento-do-bebe-aos-8-meses.",
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
    "imgSrc": "GmbH, F. R. S. (n.d.). Girl / Relaxing / Lying: HD Stock Video 121-707-129: Framepool & RightSmith Stock Footage. Retrieved from http://footage.framepool.com/en/shot/121707129-rehabilitation-infirmary-granddaughter-grandmother.",
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
		"imgSrc": "Admin. (2019, September 23). Israeli Preschool Ordered Closed After Segregating Ethiopian Children. Retrieved from https://www.branapress.com/2019/09/23/israeli-preschool-ordered-closed-after-segregating-ethiopian-children/.",
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
    "imgSrc": "귀여운 외로운 강아지 강아지 pug 슬픈 및 검은 소파에 앉아 누군가 기다려야합니다. (n.d.). Retrieved from https://kr.123rf.com/photo_53884638_귀여운-외로운-강아지-강아지-pug-슬픈-및-검은-소파에-앉아-누군가-기다려야합니다-.html.",
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
    "imgSrc": "Desk, I. T. W. (2019, April 3). Bihar Board Class 10 Result 2019: Check declaration date, steps to check. Retrieved from https://www.indiatoday.in/education-today/notification/story/bihar-board-class-10-result-2019-check-declaration-date-steps-to-check-1492784-2019-04-03.",
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
    "imgSrc": "Tisch, A. R. (2019, October 16). Dear Struggling Student: An Open Letter. Retrieved from https://www.theodysseyonline.com/dear-struggling-students.",
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
    "imgSrc": "Macaroni Kid - Find Your Family Fun. (n.d.). Retrieved from https://loveland.macaronikid.com/articles/5b6f9feb4b17331f951d041d.",
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
    "imgSrc": "NOS Classroom Resources Case Study: Holme Valley Primary School. (2019, March 4). Retrieved from https://nationalonlinesafety.com/testimonials/holme-valley-primary-school/.",
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
    "imgSrc": "Tribune News Service. (2019, March 3). 'Arrived' late, 3 students not allowed to sit in CBSE exam. Retrieved from https://www.tribuneindia.com/news/bathinda/-arrived-late-3-students-not-allowed-to-sit-in-cbse-exam/737263.html.",
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
    "imgSrc": "Kovtun, D. (2018, June 18). Happy excited woman celebrating victory. Retrieved from https://www.dreamstime.com/stock-video-happy-excited-woman-celebrating-victory-happy-excited-woman-celebrating-victory-joyful-mature-business-woman-clenching-her-fists-video119114578.",
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
    "imgSrc": "ArtsEdge, K. C. (n.d.). The Kennedy Center: ARTSEDGE - the National Arts and Education Network. Retrieved from https://artsedge.kennedy-center.org/students/features/field-guides/dance-performance.",
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
    "imgSrc": "girl future career images. (n.d.). Retrieved from https://www.shutterstock.com/search/girl future career.",
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
    "imgSrc": "(n.d.). Retrieved from http://cakningkak.com/set/?url=krumiro.info/mens-walk-in-closet/themed-closet-design-mens-walk-in-best-designs-for-men/.",
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
    "imgSrc": "When God comes to us do we even notice? (2018, July 30). Retrieved from https://leadership101.blog/2018/07/30/when-god-comes-to-us-do-we-even-notice/.",
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
    "imgSrc": "Fostering Student Learning through the Use of Debates. (2017, September 8). Retrieved from https://www.facultyfocus.com/articles/course-design-ideas/fostering-student-learning-through-the-use-of-debates/.",
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
    "imgSrc": "[영어발음연습] that-these-those 신기한 th 약 발음 현상.!! (n.d.). Retrieved from http://blog.naver.com/PostView.nhn?blogId=megaeagel9523&logNo=220490787715.",
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
    "imgSrc": "The 'love at first sight' myth - Renato Cardoso´s Blog. (n.d.). Retrieved from https://blogs.universal.org/renatocardoso/en/2016/01/03/the-love-at-first-sight-myth/.",
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
    "imgSrc": "27 Best Zakir Khan images in 2019: Hindi quotes, Poetry hindi, Poetry quotes. (2019, June 7). Retrieved from https://www.pinterest.com/Vicibabu/zakir-khan/.",
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
    "imgSrc": "Admin. (2016, May 24). A Newbie's Guide to Managing Interns. Retrieved from https://www.mediabistro.com/employer/blog/best-practices/a-newbies-guide-to-managing-interns/.",
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
    "imgSrc": "Hopper, E. (2018, August 20). An Introduction to Rogerian Therapy. Retrieved from https://www.thoughtco.com/rogerian-therapy-4171932.",
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
    "imgSrc": "Meir, D. (2017, June 22). A Day in the Life. Retrieved from https://www.acmscalgary.com/single-post/2017/05/24/A-Day-in-the-Life.",
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
];