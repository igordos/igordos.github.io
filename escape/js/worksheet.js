// Start Worksheet

let QUESTIONS_RESOURCES = {
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
        type: 'range-people',
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
        type: 'range-people',
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


let QUESTIONS_MONEY = {
    1: {
        title: 'По каким услугам Вы хотели бы получить более детальную информацию?',
        type: 'checkbox',
        to: 2,
        answers: {
            1: {
                title: 'Ведение участков бухгалтерского учета',
            },
            2: {
                title: 'Полное бухгалтерское сопровождение',
            },
            3: {
                title: 'Подготовка и сдача отчетности',
            },
            4: {
                title: 'Восстановление и аудит бухгалтерской документации',
            },
            5: {
                title: 'Консультации в области бухгалтерского учета',
            },
            6: {
                title: 'Консультации в области налогообложения',
            },
            7: {
                title: 'Другое',
                type: 'text',
            },
        },
    },
    2: {
        title: 'У вас есть зарегистрированное юридическое лицо?',
        type: 'radio',
        to: 3,
        answers: {
            1: {
                title: 'Да',
                to: 6,
            },
            2: {
                title: 'Нет',
                to: 3,
            },
        },
    },
    3: {
        title: 'Чем Вы планируете заниматься?',
        type: 'input',
        to: 4,
        answers: {
            1: {
                title: 'Поясните',
                type: 'text',
            },
        },
    },
    4: {
        title: 'Укажите планируемую численность сотрудников',
        type: 'range-people',
        to: 5,
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
    5: {
        title: 'На какую выручку в год вы рассчитываете?',
        type: 'range-money',
        to: 11,
        answers: {
            1: {
                title: 'Выручка',
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
        title: 'Какой основной вид деятельности у Вашей компании?',
        type: 'input',
        to: 7,
        answers: {
            1: {
                title: 'Поясните',
                type: 'text',
            },
        },
    },
    7: {
        title: 'Сколько сотрудников работает в Вашей компании?',
        type: 'range-people',
        to: 8,
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
    8: {
        title: 'Какой годовой оборот у Вашей компании?',
        type: 'range-money',
        to: 9,
        answers: {
            1: {
                title: 'Годовой оборот',
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
    9: {
        title: 'Какую систему налогообложения использует Ваша компания?',
        type: 'checkbox',
        to: 11,
        answers: {
            1: {
                title: 'ОСН',
            },
            2: {
                title: 'УСН, 6%',
            },
            3: {
                title: 'УСН, 15%',
            },
            4: {
                title: 'ЕНВД, Патент',
            },
            5: {
                title: 'Комментарий',
                type: 'text',
            },
        },
    },
    11: {
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

let questionList; // Set question list in main.js
let style; // Set style in main.js
let currentQuestion = 1; // Start and current question
let oldQuestion = currentQuestion; // For checked checkbox input
let $worksheetWrap = $('#worksheet-wrap');
let $worksheetForm = $('#worksheet-form');
let $worksheetQuestion = $('#worksheet-question');
let $worksheetBtn = $('#worksheet-btn');

function ionRange() {
    let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
    let values_p = ['0', '', '', '', '', '5', '', '', '', '', '10', '', '', '', '', '15', '', '', '', '', '20', '', '', '', '', '25', '', '', '', '', '30', '', '', '', '35+', ''];
    $(".range.range_people").ionRangeSlider({
        type: "single",
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

function ionRangeMoney() {
    let values = [1, 5, 10, 50];
    let values_p = ['До 1 млн. р.', 'До 5 млн. р.', 'До 10 млн. р.', 'До 50 млн. р.'];
    $(".range.range_money").ionRangeSlider({
        type: "single",
        from: 1,
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
            templateInput = '<input class="form__control form__control_' + style + ' form__control_border-bottom" type="' + answers[item].type + '" name="answer-' + questionNumber + '-' + item + '">'
        }

        return '<div class="form__group">' +
            '    <div class="checkbox">' +
            '        <label>' +
            '            <input ' +
            'type="checkbox" ' +
            'name="answer-' + questionNumber + '-' + item + '" value="' + answers[item].title + '"' +
            'onclick="handleClickAnswer(' + questionNumber + ',' + item + ')">' +
            '            <span class="form__label-text form__label-text_' + style + '">' + answers[item].title + '</span>' +

            templateInput +
            '        </label>' +
            '    </div>' +
            '</div>';
    }).join('');
}

function renderRadio(questionNumber, answers) {
    return Object.keys(answers).map(function (item) {
        let templateInput = '';
        if (answers[item].type === 'text') {
            templateInput = '<input class="form__control form__control_' + style + ' form__control_border-bottom" type="' + answers[item].type + '" name="answer-' + questionNumber + '-' + item + '">'
        }

        return '<div class="form__group">' +
            '    <div class="checkbox">' +
            '        <label>' +
            '            <input ' +
            'type="radio" ' +
            'name="answer-' + questionNumber + '" ' +
            'onclick="handleClickAnswerRadio(' + questionNumber + ',' + item + ')">' +
            '            <span class="form__label-text form__label-text_' + style + '">' + answers[item].title + '</span>' +

            templateInput +
            '        </label>' +
            '    </div>' +
            '</div>';
    }).join('');
}


function renderInput(questionNumber, answers) {
    return Object.keys(answers).map(function (item) {
        return '<div class="form__group">' +
            '   <input class="form__control form__control_' + style + '" name="answer-' + questionNumber + '-' + item + '" ' +
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
                '   <input class="form__control form__control_' + style + '" name="answer-' + questionNumber + '-' + item + '" ' +
                'type="' + answers[item].type + '"' +
                'placeholder="' + answers[item].title + '">' +
                '</div>'
        } else if (answers[item].type === 'email') {
            template = '<div class="form__group">' +
                '   <input class="form__control form__control_' + style + '" name="answer-' + questionNumber + '-' + item + '" ' +
                'type="' + answers[item].type + '"' +
                'placeholder="' + answers[item].title + '">' +
                '</div>'
        } else if (answers[item].type === 'textarea') {
            template = '<div class="form__group">' +
                '<textarea class="form__control form__control_' + style + '" rows="6" name="answer-' + questionNumber + '-' + item + '" type="text" placeholder="' + answers[item].title + '"></textarea>' +
                '</div>';
        }
        return template;
    }).join('');
}

function renderInputRangePeople(questionNumber, answers) {
    return Object.keys(answers).map(function (item) {
        let template = '';
        if (answers[item].type === 'text') {
            template = '<div class="form__group">' +
                '<label class="form__label form__label_' + style + '">' + answers[item].title + '</label>' +
                '   <input class="form__control form__control_' + style + '" name="answer-' + questionNumber + '-' + item + '" ' +
                'type="' + answers[item].type + '"' +
                'placeholder="' + answers[item].title + '">' +
                '</div>'
        } else if (answers[item].type === 'range') {
            template = '<div class="form__group">' +
                '    <div class="checkbox">' +
                '<input class="range range_people" type="text" name="answer-' + questionNumber + '-' + item + '" value="" />' +
                '    </div>' +
                '</div>';
        }
        return template;
    }).join('');
}

function renderInputRangeMoney(questionNumber, answers) {
    return Object.keys(answers).map(function (item) {
        let template = '';
        if (answers[item].type === 'text') {
            template = '<div class="form__group">' +
                '<label class="form__label form__label_' + style + '">' + answers[item].title + '</label>' +
                '   <input class="form__control form__control_' + style + '" name="answer-' + questionNumber + '-' + item + '" ' +
                'type="' + answers[item].type + '"' +
                'placeholder="' + answers[item].title + '">' +
                '</div>'
        } else if (answers[item].type === 'range') {
            template = '<div class="form__group">' +
                '    <div class="checkbox">' +
                '<input class="range range_money" type="text" name="answer-' + questionNumber + '-' + item + '" value="" />' +
                '    </div>' +
                '</div>';
        }
        return template;
    }).join('');
}

function renderQuestion(questionNumber) {

    let question;

    if (questionList === 'resources') {
        question = QUESTIONS_RESOURCES[questionNumber] || {};
    } else if (questionList === 'money') {
        question = QUESTIONS_MONEY[questionNumber] || {};
    }

    if (typeof questionNumber === 'number') {
        let template = '<h2 class="worksheet-question-box__title">' + question.title + '</h2>';
        let answersTemplate = '';

        if (question.type === 'checkbox') {
            answersTemplate += renderCheckbox(questionNumber, question.answers);
        } else if (question.type === 'input') {
            answersTemplate += renderInput(questionNumber, question.answers);
        } else if (question.type === 'range-people') {
            answersTemplate += renderInputRangePeople(questionNumber, question.answers);
        } else if (question.type === 'range-money') {
            answersTemplate += renderInputRangeMoney(questionNumber, question.answers);
        } else if (question.type === 'form') {
            answersTemplate += renderForm(questionNumber, question.answers);
        } else if (question.type === 'radio') {
            answersTemplate += renderRadio(questionNumber, question.answers);
        }

        template += '<div class="worksheet-question-box__answers">' + answersTemplate + '</div>';

        let btnStyle = style === 2 ? 3 : null;
        template += '<span class="worksheet-question-box__btn worksheet-question-box__btn_' + btnStyle + '" onclick="handleClickBtn(currentQuestion)">Далее<span></span></span>';

        $worksheetQuestion.append('<div class="worksheet-question-box">' + template + '<div>');
    }

    // Set next question
    if (typeof question.to === 'number') {
        currentQuestion = question.to;
    } else {
        currentQuestion = null;
    }

    ionRange();
    ionRangeMoney();
}

function renderRequestSuccess() {
    return '<div class="worksheet-success">' +
        '<h2>ВАША заявка успешно Оформлена!</h2>' +
        '<p>Мы постараемся ответить вам в ближайшее время</p>' +
        '</div>';
}

function handleClickAnswer(questionNumber, item) {
    if ($("input[name='answer-" + questionNumber + '-' + item + "']").prop("checked")) {
        let answersTo;

        if (questionList === 'resources') {
            answersTo = ((QUESTIONS_RESOURCES[questionNumber] || {}).answers[item] || {}).to || null;
        } else if (questionList === 'money') {
            answersTo = ((QUESTIONS_MONEY[questionNumber] || {}).answers[item] || {}).to || null;
        }

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

function handleClickAnswerRadio(questionNumber, item) {
    if ($("input[name='answer-" + questionNumber + "']")) {
        let answersTo;
        if (questionList === 'resources') {
            answersTo = ((QUESTIONS_RESOURCES[questionNumber] || {}).answers[item] || {}).to || null;
        } else if (questionList === 'money') {
            answersTo = ((QUESTIONS_MONEY[questionNumber] || {}).answers[item] || {}).to || null;
        }

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


function getResults(answers) {
    let result = {};
    answers.forEach(function (item) {
        let question;

        if (questionList === 'resources') {
            question = QUESTIONS_RESOURCES[item['name'].split('-')[1]];
        } else if (questionList === 'money') {
            question = QUESTIONS_MONEY[item['name'].split('-')[1]];
        }

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

function sendRequest() {
    $.ajax({
        type: 'POST',
        url: 'urlSend',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(getResults($worksheetForm.serializeArray())),
        success: function (data, statusText, xhr) {
            $worksheetWrap.html(renderRequestSuccess());
            setTimeout(function () {
                $('#worksheet-wrap, #worksheet-question').toggleClass('toggled');
            }, 3000);
        },
        error: function (xhr, str) {
            console.log(xhr, str);
            alert('Возникла ошибка при отправке. Попробуйте позднее.');
        }
    });
}

function handleClickBtn(questionNumber) {
    if (typeof currentQuestion === 'number') {
        $('.worksheet-question-box').addClass('worksheet-question-box_prev');
        renderQuestion(questionNumber);
        $('html, body').animate({
            scrollTop: $worksheetForm.offset().top
        }, 300);
    } else {
        sendRequest();
    }
}

function renderWorksheet() {
    renderQuestion(currentQuestion);
}

// Run in main.js script
// $worksheetForm.html(renderWorksheet());

// End Worksheet




