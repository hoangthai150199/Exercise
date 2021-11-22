const totalTime = 10 * 60 * 1000; 
const questions = [
    {
        question: 'Câu 1: CSS là viết tắt của?',
        answers: [
            {
                text : 'A: Creative Style Sheets',
                checked : false
            },
            {
                text : 'B: Computer Style Sheets',
                checked : false
            },{
                text : 'C: Cascading Style Sheets',
                checked : false
            },{
                text : 'D: Colorful Style Sheets',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 2: Đặt dòng liên kết với file CSS ở vùng nào trong file HTML?',
        answers: [
            {
                text : 'A: Trong thẻ <body>',
                checked : false
            },
            {
                text : 'B: Trong thẻ <head>',
                checked : false
            },{
                text : 'C: Ở cuối file HTML',
                checked : false
            },{
                text : 'D: Ở đầu file HTML',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 3: Thuộc tính nào định nghĩa CSS ngay trong 1 tag?',
        answers: [
            {
                text : 'font',
                checked : false
            },
            {
                text : 'B: class',
                checked : false
            },{
                text : 'C: styles',
                checked : false
            },{
                text : 'D: style',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 4: Muốn liên kết file HTML với file định nghĩa CSS ta dùng dòng nào sau đây?',
        answers: [
            {
                text : 'A: <style src=”mystyle.css”>',
                checked : false
            },
            {
                text : 'B: <stylesheet>mystyle.css</stylesheet>',
                checked : false
            },{
                text : 'C: <link rel=”stylesheet” type=”text/css” href=”mystyle.css”>',
                checked : false
            },{
                text : 'D: Tất cả đều đúng',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 5: Làm sao để khi click chuột vào link thì tạo ra cửa sổ mới?',
        answers: [
            {
                text : 'A: <a href="url" new>',
                checked : false
            },
            {
                text : 'B: <a href="url" target="new">',
                checked : false
            },{
                text : 'C: <a href="url" target="_blank">',
                checked : false
            },{
                text : 'D: <a href="url"blank="new">',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 6: Đâu là những tag dành cho việc tạo bảng?',
        answers: [
            {
                text : 'A: <table><tr><td>',
                checked : false
            },
            {
                text : 'B: <thead><body><tr>',
                checked : false
            },{
                text : 'C: <table><head><tfoot>',
                checked : false
            },{
                text : 'D:  <table><tr><tt>',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 7: Đâu là tag căn lề trái cho nội dung 1 ô trong bảng?',
        answers: [
            {
                text : 'A: <tdleft>',
                checked : false
            },
            {
                text : 'B: <td valign="left">',
                checked : false
            },{
                text : 'C:  <td align="left">',
                checked : false
            },{
                text : 'D: <td leftalign>',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 8: Đâu là tag tạo ra 1 danh sách đứng đầu bằng số?',
        answers: [
            {
                text : 'A: <ul>',
                checked : false
            },
            {
                text : 'B: <list>',
                checked : false
            },{
                text : 'C: <ol>',
                checked : false
            },{
                text : 'D: <dl>',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 9:  Tag nào tạo ra 1 checkbox?',
        answers: [
            {
                text : 'A: <check>',
                checked : false
            },
            {
                text : 'B: <input type="check">',
                checked : false
            },{
                text : 'C: <checkbox>',
                checked : false
            },{
                text : 'D:<input type="checkbox">',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 10: Muốn liên kết xHTML với 1 file định nghĩa CSS ta dùng dòng nào sau đây?',
        answers: [
            {
                text : 'A: <style src="mystyle.css">',
                checked : false
            },{
                text : 'B: <stylesheet>mystyle.css</stylesheet>',
                checked : false
            },{
                text : 'C: <link rel="stylesheet" type="text/css" href="mystyle.css">',
                checked : false
            },{
                text : 'D: <link rel="stylesheet" style src="style.css" type=type="text/css">',
                checked : false
            },
        ],
    }
]

window.onload = function () {
    // Archive question
    if(!localStorage.getItem('questions')) {
      localStorage.setItem('questions', JSON.stringify(questions));
    }

    // Start button and remaining of time
    const btnStart = document.querySelector('#save-btn');
    const labelTime = document.querySelector('#time');
    var timeBegin = localStorage.getItem('timeBegin');
    var runTime = function() {
        if (timeBegin) {
            btnStart.innerText = 'Submit';
            setInterval(function() {
                showRemainTime();
            }, 1000) 
        } else {
            labelTime.innerText = '10 : 00';
        }
    }
    runTime();
    btnStart.addEventListener('click', function() {
        if (!timeBegin) {
            btnStart.innerHTML = 'Submit';
            localStorage.setItem('timeBegin', new Date());
            timeBegin = localStorage.getItem('timeBegin');
            runTime();
            showQuestion(0);
        } else {
            // TODO: Submit
        }
    })

    var showRemainTime = function() {
        let containTime = totalTime - (new Date() - new Date(timeBegin))
        labelTime.innerText = '' + timeTransformToText(containTime)
    }

    var timeTransformToText = function(ms) {
        if(ms < 0) {
            return '00 : 00';
        }
        let totalMs = Math.floor((+ms)/1000);
        let minusDuration = Math.floor(totalMs/60);
        if(minusDuration < 10) {
            minusDuration = '0' + minusDuration;
        }
        let secondsDuration = Math.floor(totalMs - minusDuration*60);
        if(secondsDuration < 10) {
            secondsDuration = '0' + secondsDuration;
        }
        return `${minusDuration} : ${secondsDuration}`;
    }
    

    /**
     * Load questions 
     */
    
    const questionList = document.querySelector('.question-list ul');
    // localStorage.getItem()
    
    var showListQuestion = function() {
      let questionStorage = JSON.parse(localStorage.getItem('questions'));
      questionStorage.forEach((element, index) => {
        let liElement = document.createElement('li');
        liElement.classList.add('question-item-list');
        liElement.classList.add('btn');
        liElement.classList.add('btn-secondary');
        liElement.innerText = '' + (index+1);
        questionList.appendChild(liElement);
        liElement.addEventListener('click', function(){
          showQuestion(index);
        });
      });
    }
    showListQuestion();
    
    var showQuestion = function(indexQuestion) {
        // validate start status
        if(!checkStartedStastus()) {
          return;
        }

        let questionStorage = JSON.parse(localStorage.getItem('questions'));
        if(indexQuestion < 0 || indexQuestion > questionStorage.length -1) {
          return;
        }
        let textQuestion= document.querySelector('#id-question #text-question');
        let textAnswers= document.querySelector('#id-question #text-answers');
        textAnswers.innerHTML = '';
        textQuestion.innerText = questionStorage[indexQuestion].question;
        questionStorage[indexQuestion].answers.forEach((e, indexAnswer) => {
          let liElement = document.createElement('li');
          let answerCheckbox = document.createElement('input');
          answerCheckbox.setAttribute('type', 'checkbox')
          answerCheckbox.checked = e.checked;
          liElement.appendChild(answerCheckbox);
          let textElement = document.createElement('p');
          textElement.style.display = 'inline';
          textElement.classList.add('text-answer')
          textElement.innerText = e.text;
          liElement.appendChild(textElement);
          answerCheckbox.addEventListener('click', function(event) {
            checkedAnswer(indexQuestion, indexAnswer, event.target.checked);
          })
          textAnswers.appendChild(liElement);
        })

        // Active style for item list
        let itemList = document.querySelectorAll('.question-list li');
        itemList.forEach(e => {
          e.classList.remove('btn-info');
        })
        itemList[indexQuestion].classList.add('btn-info');
        fillStyleList();

        //  Save Index
        localStorage.setItem('currentIndex', indexQuestion);
    }
    var checkedAnswer = function(indexQuestion, indexAnswer, checked) {
      let questionStorage = JSON.parse(localStorage.getItem('questions'));
      questionStorage[indexQuestion].answers[indexAnswer].checked = checked;
      localStorage.setItem('questions', JSON.stringify(questionStorage));
      
    }

    // Next and Previous Button
    const btnPrevious = document.querySelector('#prev-btn');
    btnPrevious.addEventListener('click', function() {
      // validate start status
      if(!checkStartedStastus()) {
        return;
      }
      let currentIndex = +localStorage.getItem('currentIndex');
      showQuestion(--currentIndex);
    })

    const btnNext = document.querySelector('#next-btn');
    btnNext.addEventListener('click', function() {
      // validate start status
      if(!checkStartedStastus()) {
        return;
      }
      let currentIndex = +localStorage.getItem('currentIndex');
      showQuestion(++currentIndex);
    })

    function checkStartedStastus() {
      return !(localStorage.getItem('timeBegin') === null);
    }

    var fillStyleList = function() {
      let questionStorage = JSON.parse(localStorage.getItem('questions'));
      let itemList = document.querySelectorAll('.question-list li');

      itemList.forEach(item => {
        item.classList.remove('btn-primary');
        if(!item.classList.contains('btn-secondary')) {
          item.classList.add('btn-secondary');
        }
      })
      questionStorage.forEach((question, index) => {
        question.answers.forEach(answer => {
          if(answer.checked === true) {
            console.log(answer);
            itemList[index].classList.remove('btn-secondary');
            itemList[index].classList.add('btn-primary');
            return;
          }
        })
      })
    }

    // Init when reload page
    if(localStorage.getItem('questions')) {
      showQuestion(localStorage.getItem('currentIndex'))
    }
}
