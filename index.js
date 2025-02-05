
// ----- Задание 1

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus sint velit cum possimus esse doloribus consequuntur deleniti ad similique corrupti architecto incid amet consectetur adipisicing elit. Impedit delectus sint velit cum possimus esse doloribus consequuntur deleniti ad similique corrupti architecto incidunt fugiat, ex nam molestias sequi. Facilis, nobis!";

function UpdText(text) {
    const words = text.split(' ');

    if (words.length > 30) {
        return words.slice(0, 30).join(' ') + '...';
    } else {
        if (text.trim().endsWith('.')) {
            return text + '.';
        } else {
            return text + '...';
        }
    }
}

const res = UpdText(text);

console.log("Res:", res);

// ----- Задание 2

function swapText(inputTxt) {
    inputTxt = inputTxt.trim();

    const length = inputTxt.length;

    if (length % 2 !== 0) {
        console.log("Строка нечетная!");
        return;
    }

    const mid = length / 2;

    const onePart = inputTxt.slice(0, mid);
    const twoPart = inputTxt.slice(mid);

    const swapText = onePart + twoPart;
    console.log("Res:", swapText);
}

const inputTxt = "Lorem ipsums";
swapText(inputTxt);

//-------- Задание 3

const intext = "Lorem, ipsum dolor sit? amet? consectetur? adipisicing elit. Sed tenetur? delectus? incidunt? quia? eaque, expedita? numquam neque quas quisquam totam est, ad facilis aut? necessitatibus aliquam? ullam non! Quibusdam?";

const outtext = intext.replace(/\?/g, '');

console.log("Res:", outtext);

// ---------- Задание 4

const indexsalary = 123912.57;
const procindex = 0.175;

const notindexsalary = indexsalary / (1 + procindex);

console.log(`ЗП до индексации: ${notindexsalary.toFixed(2)} руб.`);

// ----------- Задание 5

function parseUrl(inputUrl) {
    const regex = /^(https?:\/\/)?([^\/\s:]+)(:\d+)?(\/[^\s?]*)?(\?.*)?$/;
    const match = inputUrl.match(regex);

    if (!match) {
        throw new Error('Ошибка!');
    }

    const protocol = match[1] ? match[1].replace('://', '') : null;
    const domain = match[2];
    const uri = match[4] ? match[4] : '/';
    const query = match[5] ? match[5].replace('?', '') : null;

    return {
        protocol,
        domain,
        uri,
        query
    };
}

const inputUrl = 'https://www.google.com/search?q=nodejs+url+parser&hl=ru';
const parsedUrl = parseUrl(inputUrl);

console.log(parsedUrl);