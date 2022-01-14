var setting = {
     stone: 100,
     wood: 100,
     food: 3000,
     people: 100,
     mine: 0,
     sawmill: 0,
     farm: 0,
     healer: 0,
     shaman: 0,
     engineer: 0,
     house: 0,
}

var day = 1;
var idofresources = ['numberofpeoples','numberoffood','numberofstone','numberofwood'];
var idofbuildings = ['numberofhouses', 'numberofhealer', 'numberofshaman', 'numberofengineer', 'numberoffarm', 'numberofmines', 'numberofsawmills'];
var idofgrowresources = ['growingofpeoples', 'growingoffood', 'growingofstone', 'growingofwood'];
var nameofsetting = ['people', 'food','stone','wood','house', 'healer', 'shaman', 'engineer', 'farm', 'mine', 'sawmill'];
var nameofbuilding = ['домов', 'хижин лекарей', 'хижин шаманов', 'хижин изобретателей', 'ферм','шахт','лесопилок'];
// alert(setting[nameofsetting[0]]); Пример обращение к параметру через строку

alert('Машина времени безумного профессора отправляет вас в каменный век. Вы находите племя, которое находится на заре развития. При помощи последней плазменной гранаты, вы становитесь вождём племени. На торжественной речи, вы обещаете вывести племя на передовой уровень науки и культуры. В сумке вы находите кое какие припасы в сжатом виде (вроде капсулы расширения), а также мобильный строительный терминал. Вы решаете построить для местных жителей дома, а также хижину лекаря, хижину шамана, хижину изобретателя, а также фермы и лагерь охотников. Припасы ограничены, и на всё не хватит, но построить нужно всё (съедят, если не получится). Из ресурсов вам доступны камень, дерево и пища. Жители, со временем смогут добыть необходимые материалы, но до этого нужно дожить.')
setTimeout(game, 700);
var gamechat = document.getElementById('message-space');
var output = '';
function game() {
    output = day + ' День';
    gamechat.append(output);
    if (setting['food'] < 0) {
        alert('К сожалению, голодным жителям безразницы, что у вас в руках. Боюсь, что через 10 минут вы будете съедены, Милорд. Это конец вашей истории');
        throw newError();
    }
    if (setting['people'] <= 0) {
        alert('*В городе умерли все. Смерть вашего помошника стала последней каплей, которая сломала вашу нервную систему. Вы закончили жизнь самоубийством*');
        throw newError();
    }
    alert('Что будете строить милорд?');
    //Ввод
    var answer = prompt("Какой будет ваш приказ, Милорд");
    switch (answer) {
        case 'hous':
            if (setting['wood'] >= 10 && setting['stone'] >= 10) {
                alert('Мы успешно построили это здание, Милорд');
                setting['house'] += 1;
                setting['wood'] -= 10;
                setting['stone'] -= 10;
            } else {
                alert('К сожалению, что то не так, Милорд');
            }
            break;
        case 'heal':
            if (setting['wood'] >= 30 && setting['stone'] >= 20) {
                alert('Мы успешно построили это здание, Милорд');
                setting['healer'] += 1;
                setting['wood'] -= 30;
                setting['stone'] -= 20;
            } else {
                alert('К сожалению, что то не так, Милорд');
            }
            break;
        case 'drui':
            if (setting['wood'] >= 25 && setting['stone'] >= 15) {
                alert('Мы успешно построили это здание, Милорд');
                setting['shaman'] += 1;
                setting['wood'] -= 25;
                setting['stone'] -= 15;
            } else {
                alert('К сожалению, что то не так, Милорд');
            }
            break;
        case 'engi':
            if (setting['wood'] >= 20 && setting['stone'] >= 20) {
                alert('Мы успешно построили это здание, Милорд');
                setting['engineer'] += 1;
                setting['wood'] -= 20;
                setting['stone'] -= 20;
            } else {
                alert('К сожалению, что то не так, Милорд');
            }
            break;
        case 'farm':
            if (setting['wood'] >= 20 && setting['stone'] >= 10) {
                alert('Мы успешно построили это здание, Милорд');
                setting['farm'] += 1;
                setting['wood'] -= 20;
                setting['stone'] -= 10;
            } else {
                alert('К сожалению, что то не так, Милорд');
            }
            break;
        case 'mine':
            if (setting['wood'] >= 10 && setting['stone'] >= 20) {
                alert('Мы успешно построили это здание, Милорд');
                setting['mine'] += 1;
                setting['wood'] -= 10;
                setting['stone'] -= 20;
            } else {
                alert('К сожалению, что то не так, Милорд');
            }
            break;
        case 'sawm':
            if (setting['wood'] >= 15 && setting['stone'] >= 10) {
                alert('Мы успешно построили это здание, Милорд');
                setting['sawmill']++;
                setting['wood'] -= 15;
                setting['stone'] -= 10;
            } else {
                alert('К сожалению, что то не так, Милорд');
            }
        case 'Ilovecheats123':
            setting['shaman'] = 100;
            setting['engineer'] = 100;
            setting['healer'] = 100;
            setting['sawmill'] = 100;
            setting['mine'] = 100;
            setting['farm'] = 100;
            setting['house'] = 50;
            break;
        case 'stop123':
            throw new Error();
        default:
            alert('К сожалению, что то не так, Милорд');
    }

    //Заполнение ресов
    for (var i = 0; i < 4; i++) {
        document.getElementById(idofresources[i]).textContent = setting[nameofsetting[i]];
    }
    //Заполнение домиков
    for (var i = 0; i < 7; i++) {
        document.getElementById(idofbuildings[i]).textContent = setting[nameofsetting[i + 4]];
    }
    //Заполнение роста
    for (var i = 0; i < 4; i++) {
        var kol = 0;
        if (i === 0) { // Костыль для домов
            kol = setting['house'] * 3;
            document.getElementById(idofgrowresources[i]).textContent = setting['house'] * 3;
        } else {
            kol = setting[nameofsetting[i + 7]];
            if (nameofsetting[i + 7] === 'farm') {
                kol *= 5;
            }
            if (nameofsetting[i + 7] === 'mine') {
                kol *= 2;
            }
            if (nameofsetting[i + 7] === 'sawmill') {
                kol *= 4;
            }
            document.getElementById(idofgrowresources[i]).textContent = kol;
        }
        setting[nameofsetting[i]] += kol;
    }
    //События
    var Event = Math.round(Math.random() * 6);
    if (Event < 4) {
        alert('Ночь прошла спокойно, Милорд');
    } else {
        //Может быть 4,5,6
        var luck = Math.round(Math.random() * 10);
        switch (Event) {
            case 4:
                alert("В городе Чума!!! Будем надеяться, что наши врачи справятся");
                if (luck <= setting.healer) {
                    alert("Хвала небесам, наши врачи справились с чумой!")
                } else {
                    var minus = Math.max((luck - setting.healer) * Math.round(Math.random() * 10), 2);
                    alert("О нет, чума распространилась, Милорд. Она унесла жизни " + minus + " Человек");
                    setting.people -= minus;
                }
                break;
            case 5:
                alert("Непогода, Милорд. Боюсь, если боги нам не помогут, то наш урожай пострадает");
                if (luck <= setting.shaman) {
                    alert("Наши шаманы сумели задобрить богов. Непогода ушла и наш урожай в безопасности")
                } else {
                    var minus = Math.max((luck - setting.healer) * Math.round(Math.random() * 40), 2);
                    alert("О нет, шаманы не справились, непогода забрала " + minus + " пищи с собой");
                    setting.food -= minus;
                }
                break;
            case 6:
                alert("О ужас! Прятчесь милорд, на город идет лавина!");
                if (luck <= setting.engineer) {
                    alert("Наши инженеры смогли возыести укрепления. Город спасен")
                } else {
                    var minus = Math.max(luck - setting.engineer, 2);
                    var building = Math.round(Math.random() * 6);
                    var name = nameofbuilding[building];
                    minus = Math.min(minus, setting[nameofsetting[building + 4]]);
                    if(setting[nameofsetting[building + 4]] === 0){
                        alert("Лавина прошла мимо города!");
                    } else {
                        alert("О нет, инженеры даже не успели встать с кроватей. Лавина унесла " + minus + " " + nameofbuilding[building]);
                    }
                    setting[nameofsetting[building + 4]] -= minus;
                    setting[nameofsetting[building + 4]] = Math.max(0, setting[nameofsetting[building + 4]]);
                }
                break;
        }
    }
        setting['food'] -= setting['people'];
        //Заполнение ресов после событий
        for (var i = 0; i < 4; i++){
            document.getElementById(idofresources[i]).textContent = setting[nameofsetting[i]];
        }
        //Заполнение домиков после ивента

        for (var i = 0; i < 7; i++) {
            document.getElementById(idofbuildings[i]).textContent = setting[nameofsetting[i + 4]];
        }

        day++;
        setTimeout(game, 700);
    }

