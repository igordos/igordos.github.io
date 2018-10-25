let QUESTIONS = {
    1: {
        title: 'По каким услугам Вы хотели бы получить более детальную информацию?',
        type: 'checkbox',
        to: 2,
        answers: {
            1: {
                title: 'Ведение кадрового учета',
            },
            2: {
                title: 'Разработка кадровой документации',
            },
            3: {
                title: 'Восстановление и аудит кадровой документации',
            },
            4: {
                title: 'Услуги по охране труда',
            },
            5: {
                title: 'Аттестация персонала и независимая оценка квалификации',
            },
            6: {
                title: 'Консультации в области трудового законодательства, кадрового учета',
            },
            7: {
                title: 'Услуги по миграционному учету',
            },
            8: {
                title: 'Другое',
                type: 'text',
            },
        },
    },
    2: {
        title: 'Какой основной вид деятельности у Вашей организации?',
        type: 'input',
        to: 3,
        answers: {
            1: {
                title: 'Например, салон красоты, ресторанный бизнес',
                type: 'text',
            },
        },
    },
    3: {
        title: 'Какое количество сотрудников работает в Вашей организации?',
        type: 'range',
        to: 4,
        answers: {
            1: {
                title: 'Количество сотрудников',
                type: 'range',
                min: 0,
                max: 35,
                value: 5,
            },
            2: {
                title: 'Комментарий',
                type: 'text',
            },
        },
    },
    4: {
        title: 'Соискателей (сотрудников) с каким гражданством Вы хотите устроить на работу?',
        type: 'input',
        to: 5,
        answers: {
            1: {
                title: 'Например: страны Таможенного союза, Узбекистан',
                type: 'text',
            },
        },
    },
    5: {
        title: 'Для какой численности сотрудников / соискателей требуются услуги по миграционным вопросам?',
        type: 'range',
        to: 6,
        answers: {
            1: {
                title: 'Количество сотрудников',
                type: 'range',
                min: 0,
                max: 35,
                value: 5,
            },
            2: {
                title: 'Комментарий',
                type: 'text',
            },
        },
    },
    6: {
        title: 'Дополнительная информация',
        type: 'form',
        to: null,
        answers: {
            1: {
                title: 'Имя',
                type: 'text',
            },
            2: {
                title: 'E-mail',
                type: 'email',
            },
            3: {
                title: 'Здесь Вы можете написать все, что считаете нужным',
                type: 'textarea',
            },
        },
    },
};

let currentQuestion = 1; // Start and current question
let oldQuestion = currentQuestion; // For checked checkbox input
let $worksheetWrap = $('#worksheet-wrap');
let $worksheetForm = $('#worksheet-form');
let $worksheetQuestion = $('#worksheet-question');
let $worksheetBtn = $('#worksheet-btn');


function ionRange() {
    let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
    let values_p = ['0', '', '', '', '', '5', '', '', '', '', '10', '', '', '', '', '15', '', '', '', '', '20', '', '', '', '', '25', '', '', '', '', '30', '', '', '', '35+', ''];
    $(".range").ionRangeSlider({
        type: "single",
        // min: 0,
        // max: 35,
        from: 5,
        grid: true,
        hide_min_max: true,
        hide_from_to: true,
        values: values,
        prettify: function (n) {
            var ind = values.indexOf(n);
            return values_p[ind];
        },
    });
}

function renderCheckbox(questionNumber, answers) {
    return Object.keys(answers).map(function (item) {
        let templateInput = '';
        if (answers[item].type === 'text') {
            templateInput = '<input class="form__control form__control_2 form__control_border-bottom" type="' + answers[item].type + '" name="answer-' + questionNumber + '-' + item + '">'
        }

        return '<div class="form__group">' +
            '    <div class="checkbox">' +
            '        <label>' +
            '            <input ' +
            'type="checkbox" ' +
            'name="answer-' + questionNumber + '-' + item + '" value="' + answers[item].title + '"' +
            'onclick="handleClickAnswer(' + questionNumber + ',' + item + ')">' +
            '            <span class="form__label-text form__label-text_2">' + answers[item].title + '</span>' +

            templateInput +
            '        </label>' +
            '    </div>' +
            '</div>';
    }).join('');
}

function renderInput(questionNumber, answers) {
    return Object.keys(answers).map(function (item) {
        return '<div class="form__group">' +
            '   <input class="form__control form__control_2" name="answer-' + questionNumber + '-' + item + '" ' +
            'type="' + answers[item].type + '"' +
            'placeholder="' + answers[item].title + '">' +
            '</div>';
    }).join('');
}

function renderForm(questionNumber, answers) {
    return Object.keys(answers).map(function (item) {
        let template = '';
        if (answers[item].type === 'text') {
            template = '<div class="form__group">' +
                '   <input class="form__control form__control_2" name="answer-' + questionNumber + '-' + item + '" ' +
                'type="' + answers[item].type + '"' +
                'placeholder="' + answers[item].title + '">' +
                '</div>'
        } else if (answers[item].type === 'email') {
            template = '<div class="form__group">' +
                '   <input class="form__control form__control_2" name="answer-' + questionNumber + '-' + item + '" ' +
                'type="' + answers[item].type + '"' +
                'placeholder="' + answers[item].title + '">' +
                '</div>'
        } else if (answers[item].type === 'textarea') {
            template = '<div class="form__group">' +
                '<textarea class="form__control form__control_2" rows="6" name="answer-' + questionNumber + '-' + item + '" type="text" placeholder="' + answers[item].title + '"></textarea>' +
                '</div>';
        }
        return template;
    }).join('');
}

function renderInputRange(questionNumber, answers) {
    return Object.keys(answers).map(function (item) {
        let template = '';
        if (answers[item].type === 'text') {
            template = '<div class="form__group">' +
                '<label class="form__label form__label_2">' + answers[item].title + '</label>' +
                '   <input class="form__control form__control_2" name="answer-' + questionNumber + '-' + item + '" ' +
                'type="' + answers[item].type + '"' +
                'placeholder="' + answers[item].title + '">' +
                '</div>'
        } else if (answers[item].type === 'range') {
            template = '<div class="form__group">' +
                '    <div class="checkbox">' +
                '<input class="range" type="text" name="answer-' + questionNumber + '-' + item + '" value="" />' +
                '    </div>' +
                '</div>';
        }
        return template;
    }).join('');
}

function renderQuestion(questionNumber) {
    let question = QUESTIONS[questionNumber] || {};

    if (typeof questionNumber === 'number') {
        let template = '<h2 class="worksheet-question-box__title">' + question.title + '</h2>';
        let answersTemplate = '';

        if (question.type === 'checkbox') {
            answersTemplate += renderCheckbox(questionNumber, question.answers);
        } else if (question.type === 'input') {
            answersTemplate += renderInput(questionNumber, question.answers);
        } else if (question.type === 'range') {
            answersTemplate += renderInputRange(questionNumber, question.answers);
        } else if (question.type === 'form') {
            answersTemplate += renderForm(questionNumber, question.answers);
        }

        template += '<div class="worksheet-question-box__answers">' + answersTemplate + '</div>';

        template += '<span class="worksheet-question-box__btn worksheet-question-box__btn_3" onclick="handleClickBtn(currentQuestion)">Далее<span></span></span>';

        $worksheetQuestion.append('<div class="worksheet-question-box">' + template + '<div>');
    }

    // Set next question
    if (typeof question.to === 'number') {
        currentQuestion = question.to;
    } else {
        currentQuestion = null;
    }

    ionRange();
}

function renderRequestSuccess() {
    return '<div class="worksheet-success">' +
        '<h2>ВАША заявка успешно Оформлена!</h2>' +
        '<p>Мы постараемся ответить вам в ближайшее время</p>' +
        '</div>';
}

function handleClickAnswer(questionNumber, item) {
    if ($("input[name='answer-" + questionNumber + '-' + item + "']").prop("checked")) {
        let answersTo = ((QUESTIONS[questionNumber] || {}).answers[item] || {}).to || null;
        // Set next question
        if (typeof answersTo === 'number') {
            oldQuestion = currentQuestion;
            currentQuestion = answersTo;
        }
    } else {
        // Set next question
        currentQuestion = oldQuestion;
    }
}


let answers = [
    {
        name: "answer-1-1",
        value: "Ведение кадрового учета",
    },
    {
        name: "answer-1-2",
        value: "Разработка кадровой документации",
    },
    {
        name: "answer-1-3",
        value: "Восстановление и аудит кадровой документации",
    },
    {
        name: "answer-2-1",
        value: "Салон красоты",
    }
];

function getResults(answers) {
    let result = {};

    answers.forEach(function (item) {
        let question = QUESTIONS[item['name'].split('-')[1]];

        if (item.value !== '') {
            if (result.hasOwnProperty(question.title)) {
                result[question.title].push(item.value);
            } else {
                result[question.title] = [item.value];
            }
        }

    });

    console.log(result);

    return result;
}

getResults(answers);

function sendRequest() {

    $worksheetWrap.html(renderRequestSuccess());

    getResults($worksheetForm.serializeArray());
    // $.ajax("#")
    //     .done(function () {
    //         alert("success");
    //     })
    //     .fail(function () {
    //         alert("error");
    //     })
    //     .always(function () {
    //         alert("complete");
    //     });
}

function handleClickBtn(questionNumber) {
    if (typeof currentQuestion === 'number') {
        $('.worksheet-question-box').addClass('worksheet-question-box_prev');
        renderQuestion(questionNumber);
    } else {
        // console.log($worksheetForm.serializeArray());
        sendRequest();
    }
}

function renderWorksheet() {
    renderQuestion(currentQuestion);
    // $worksheetBtn.html('<span class="btn" onclick="handleClickBtn(currentQuestion)">Далее</span>');
}

$worksheetForm.html(renderWorksheet());
