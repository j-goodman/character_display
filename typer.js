var canvas;
var ctx;

var cursor;
cursor = {x: 20, y: 20};
var shift = false;

onload = () => {
    
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);
    loadImages();
}

var keyDown = (event) => {
    var character;
    var fontsize = 22;
    var fontcolor = '#fff';
    var kerning = 1;
    character = characters[(shift ? '*' : '') + event.keyCode] || false;
    ctx.fillStyle = fontcolor;
    if (character) {
        ctx.fillRect(cursor.x, cursor.y, fontsize, fontsize);
        ctx.drawImage(character, cursor.x, cursor.y, fontsize, fontsize);
        cursor.x += fontsize * kerning;
    } else if (event.keyCode === 16) { // SHIFT
        shift = true;
    } else if (event.keyCode === 8) { // BACKSPACE
        cursor.x -= fontsize * kerning;
    } else if (event.keyCode === 13) { // ENTER
        cursor.x = fontsize * kerning;
        cursor.y += fontsize * kerning;
    }
}

var keyUp = (event) => {
    if (event.keyCode === 16) {
        shift = false;
    }
}

var loadImages = () => {
    var codes;
    var i;
    var image;
    keymapKeys = Object.keys(keymap);
    for (i=0 ; i<keymapKeys.length ; i++) {
        image = document.createElement('img');
        image.src = './alphabet/' + keymap[keymapKeys[i]] + '.png';
        characters[eventmap[keymap[keymapKeys[i]]]] = image;
    }
}

var eventmap = {
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    'exclamation_point': '*49',
    'open_parenthesis': '*57',
    'close_parenthesis': '*48',
    'asterisk': '*56',
    'comma': 188,
    'hyphen': 189,
    'period': 190,
    'colon': '*186',
    'question_mark': '*191',
    'bar': '*220',
    'apostrophe': 222,
    'open_quote': '*222',
    'close_quote': '*222',
    'space': 32,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    'A_cap': '*65',
    'B_cap': '*66',
    'C_cap': '*67',
    'D_cap': '*68',
    'E_cap': '*69',
    'F_cap': '*70',
    'G_cap': '*71',
    'H_cap': '*72',
    'I_cap': '*73',
    'J_cap': '*74',
    'K_cap': '*75',
    'L_cap': '*76',
    'M_cap': '*77',
    'N_cap': '*78',
    'O_cap': '*79',
    'P_cap': '*80',
    'Q_cap': '*81',
    'R_cap': '*82',
    'S_cap': '*83',
    'T_cap': '*84',
    'U_cap': '*85',
    'V_cap': '*86',
    'W_cap': '*87',
    'X_cap': '*88',
    'Y_cap': '*89',
    'Z_cap': '*90',
}

var characters = {};

var keymap = {
    32: 'space',
    33: 'exclamation_point',
    40: 'open_parenthesis',
    41: 'close_parenthesis',
    42: 'asterisk',
    44: 'comma',
    45: 'hyphen',
    46: 'period',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    58: 'colon',
    63: 'question_mark',
    65: 'A_cap',
    66: 'B_cap',
    67: 'C_cap',
    68: 'D_cap',
    69: 'E_cap',
    70: 'F_cap',
    71: 'G_cap',
    72: 'H_cap',
    73: 'I_cap',
    74: 'J_cap',
    75: 'K_cap',
    76: 'L_cap',
    77: 'M_cap',
    78: 'N_cap',
    79: 'O_cap',
    80: 'P_cap',
    81: 'Q_cap',
    82: 'R_cap',
    83: 'S_cap',
    84: 'T_cap',
    85: 'U_cap',
    86: 'V_cap',
    87: 'W_cap',
    88: 'X_cap',
    89: 'Y_cap',
    90: 'Z_cap',
    97: 'a',
    98: 'b',
    99: 'c',
    100: 'd',
    101: 'e',
    102: 'f',
    103: 'g',
    104: 'h',
    105: 'i',
    106: 'j',
    107: 'k',
    108: 'l',
    109: 'm',
    110: 'n',
    111: 'o',
    112: 'p',
    113: 'q',
    114: 'r',
    115: 's',
    116: 't',
    117: 'u',
    118: 'v',
    119: 'w',
    120: 'x',
    121: 'y',
    122: 'z',
    124: 'bar',
    8217: 'apostrophe',
    8220: 'open_quote',
    8221: 'close_quote',
}