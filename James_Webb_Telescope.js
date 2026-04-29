/*
****************************************************************************************************
*                                        ПАСПОРТ ПРОЄКТУ                                           *
****************************************************************************************************
Назва: «Телескоп James Webb»
Опис: Створення конструкції у вигляді космічного телескопа ім. Джеймса Уебба

Мова програмування: JavaScript (Static TypeScript)
Номер версії: 2.0
Дата створення: квітень 2026
Автор: Дмитро Іваненко
Публікація: --

Пояснення особливостей:
Ідея проєкту запропонована студентом школи «GoITeens» Матвієм Черніковим.
Для створення моделі використовувалися візуальні зразки справжнього телескопа,
доступні з відкритих джерел (YouTube, портал NASA та ін.)

Матеріали для створення телескопу визначаються константами у розділі «Набір констант».
Програмування дзеркал здійснювалося за створеною схемою (Google Sheet): https://bit.ly/4n7RTR9

Орієнтування: телескоп створюється в напрямку на Схід від місця виконання.

Телескоп створюється у два етапи:
  - Спочатку створюються дзеркала у вигляді 16 окремих сегментів та центральної частини.
    Для цього потрібно обрати будь-яке місце на висоті щонайменше 20 блоків над поверхнею та
    запустити команду чату «james_webb» (рядок коду 115).
  - Після створення дзеркал потрібно перейти на нове місце, щоб створити поверхні охолодження.
    Виконайте там команду чату «surfaces» (рядок коду 280).
****************************************************************************************************
*/



// --- Набір констант, які визначають матеріали для створення телескопа --- //
const MAIN_MIRROR_BASE    = GRAY_CONCRETE;
const MAIN_MIRROR         = GOLD_BLOCK;

const CENTRAL_MODULE_BASE = BLACK_CONCRETE;
const CENTRAL_MODULE      = GRAY_CONCRETE;

const SECONDARY_MIRROR    = GRAY_CONCRETE;

const FIX                 = BLACK_STAINED_GLASS;
const MAST                = TINTED_GLASS;

const COOLING_SURFACE     = LIGHT_GRAY_CARPET;
const COOLING_SURFACE_FIX = BLACK_CONCRETE;

const EL_MODULE           = GRAY_CONCRETE;
const EL_MODULE_FRAME     = BLACK_CONCRETE;

const BASE_FRAME          = GRAY_CONCRETE;
const BASE                = BLACK_CONCRETE;

const DECORATION          = ORANGE_CONCRETE;


// Змінні для розрахунків
let distToBase   = 16; // Відстань до основ дзеркал («подушок»)
let distToMirror = 15; // Відстань до поверхонь дзеркал



// --------------------------------------------------------------------------------------------- //
// Функція для створення основи для дзеркала («подушка»)
function goldSegmentsBase(x: number, y: number, z: number) {
    blocks.fill(MAIN_MIRROR_BASE, pos(x, y, z), pos(x, y - 12, z + 1), FillOperation.Replace);
    blocks.fill(MAIN_MIRROR_BASE, pos(x, y - 1, z - 1), pos(x, y - 11, z + 2), FillOperation.Replace);
    blocks.fill(MAIN_MIRROR_BASE, pos(x, y - 2, z - 2), pos(x, y - 10, z + 3), FillOperation.Replace);
    blocks.fill(MAIN_MIRROR_BASE, pos(x, y - 3, z - 3), pos(x, y - 9, z + 4), FillOperation.Replace);
    blocks.fill(MAIN_MIRROR_BASE, pos(x, y - 4, z - 4), pos(x, y - 8, z + 5), FillOperation.Replace);
    blocks.fill(MAIN_MIRROR_BASE, pos(x, y - 5, z - 5), pos(x, y - 7, z + 6), FillOperation.Replace);

    shapes.line(MAIN_MIRROR_BASE, pos(x, y - 6, z - 6), pos(x, y - 6, z + 7));
}



// --------------------------------------------------------------------------------------------- //
// Функція для створення поверхні дзеркала
function goldSegments(x: number, y: number, z: number) {
    blocks.fill(MAIN_MIRROR, pos(x, y, z), pos(x, y - 10, z + 1), FillOperation.Replace);
    blocks.fill(MAIN_MIRROR, pos(x, y - 1, z - 1), pos(x, y - 9, z + 2), FillOperation.Replace);
    blocks.fill(MAIN_MIRROR, pos(x, y - 2, z - 2), pos(x, y - 8, z + 3), FillOperation.Replace);
    blocks.fill(MAIN_MIRROR, pos(x, y - 3, z - 3), pos(x, y - 7, z + 4), FillOperation.Replace);
    blocks.fill(MAIN_MIRROR, pos(x, y - 4, z - 4), pos(x, y - 6, z + 5), FillOperation.Replace);

    shapes.line(MAIN_MIRROR, pos(x, y - 5, z - 5), pos(x, y - 5, z + 6));
}



// --------------------------------------------------------------------------------------------- //
// Функція для створення інфрачервоної камери
function infraredCamera(x: number, y: number, z: number) {
    blocks.fill(CENTRAL_MODULE_BASE, pos(x, y, z), pos(x, y - 8, z + 3), FillOperation.Replace);
    blocks.fill(CENTRAL_MODULE_BASE, pos(x, y - 1, z - 1), pos(x, y - 7, z + 4), FillOperation.Replace);
    blocks.fill(CENTRAL_MODULE_BASE, pos(x, y - 2, z - 2), pos(x, y - 6, z + 5), FillOperation.Replace);
    blocks.fill(CENTRAL_MODULE_BASE, pos(x, y - 3, z - 3), pos(x, y - 5, z + 6), FillOperation.Replace);

    shapes.line(CENTRAL_MODULE_BASE, pos(x, y - 4, z - 4), pos(x, y - 4, z + 7));

    blocks.fill(CENTRAL_MODULE, pos(x - 1, y - 3, z - 1), pos(x - 2, y - 5, z + 4), FillOperation.Replace);
    shapes.line(SEA_LANTERN, pos(x - 1, y - 4, z), pos(x - 1, y - 4, z + 3));
    shapes.line(GRAY_STAINED_GLASS_PANE, pos(x - 2, y - 4, z), pos(x - 2, y - 4, z + 3));
}



// ============================================================================================= //
// Скрипт для створення телескопа
// ============================================================================================= //
player.onChat("james_webb", function () {
    player.say("§6 Починаю працювати...");

    // Сегмент №1
    goldSegmentsBase(distToBase, 55, 0);
    goldSegments(distToMirror, 54, 0);

    // Сегмент №2
    goldSegmentsBase(distToBase, 50, -8);
    goldSegments(distToMirror, 49, -8);

    // Сегмент №3
    goldSegmentsBase(distToBase, 50, 8);
    goldSegments(distToMirror, 49, 8);

    // Сегмент №4
    goldSegmentsBase(distToBase, 45, -16);
    goldSegments(distToMirror, 44, -16);

    // Сегмент №5
    goldSegmentsBase(distToBase, 45, 0);
    goldSegments(distToMirror, 44, 0);

    // Сегмент №6
    goldSegmentsBase(distToBase, 45, 16);
    goldSegments(distToMirror, 44, 16);

    // Сегмент №7
    goldSegmentsBase(distToBase, 40, -8);
    goldSegments(distToMirror, 39, -8);

    // Сегмент №8
    goldSegmentsBase(distToBase, 40, 8);
    goldSegments(distToMirror, 39, 8);

    player.say("§6... Чекай! Я все ще працюю :-) ...");

    // Сегмент №9
    goldSegmentsBase(distToBase, 35, -16);
    goldSegments(distToMirror, 34, -16);

    // Сегмент №10
    goldSegmentsBase(distToBase, 35, 16);
    goldSegments(distToMirror, 34, 16);

    // Сегмент №11
    goldSegmentsBase(distToBase, 30, -8);
    goldSegments(distToMirror, 29, -8);

    // Сегмент №12
    goldSegmentsBase(distToBase, 30, 8);
    goldSegments(distToMirror, 29, 8);

    // Сегмент №13
    goldSegmentsBase(distToBase, 25, -16);
    goldSegments(distToMirror, 24, -16);

    // Сегмент №14
    goldSegmentsBase(distToBase, 25, 0);
    goldSegments(distToMirror, 24, 0);

    // Сегмент №15
    goldSegmentsBase(distToBase, 25, 16);
    goldSegments(distToMirror, 24, 16);

    // Сегмент №16
    goldSegmentsBase(distToBase, 20, -8);
    goldSegments(distToMirror, 19, -8);

    // Сегмент №17
    goldSegmentsBase(distToBase, 20, 8);
    goldSegments(distToMirror, 19, 8);

    // Сегмент №18
    goldSegmentsBase(distToBase, 15, 0);
    goldSegments(distToMirror, 14, 0);


    // Інфрачервона камера
    infraredCamera(distToMirror, 33, -1);


    // Кріплення на корпусі дзеркала: верхнє
    blocks.fill(FIX, pos(14, 55, -1), pos(16, 55, 2), FillOperation.Replace);

    // Штанга вторинного дзеркала: верх-низ
    shapes.line(MAST, pos(13, 55, 0), pos(-10, 32, 0));
    shapes.line(MAST, pos(13, 55, 1), pos(-10, 32, 1));

    // Кріплення на корпусі дзеркала: нижнє північне
    shapes.line(FIX, pos(16, 7, -7), pos(16, 7, -8));
    blocks.fill(FIX, pos(14, 7, -7), pos(15, 7, -8), FillOperation.Replace);

    // Штанга вторинного дзеркала: північна
    shapes.line(MAST, pos(13, 7, -7), pos(-7, 27, -7));
    shapes.line(MAST, pos(13, 7, -8), pos(-7, 27, -8));
    blocks.fill(FIX, pos(-8, 27, -7), pos(-11, 27, -8), FillOperation.Replace);
    blocks.fill(FIX, pos(-10, 27, -3), pos(-11, 27, -6), FillOperation.Replace);

    shapes.line(AIR, pos(-10, 27, -8), pos(-11, 27, -8));
    shapes.line(AIR, pos(-11, 27, -7), pos(-11, 27, -8));

    // Кріплення на корпусі дзеркала: нижнє південне
    shapes.line(FIX, pos(16, 7, 8), pos(16, 7, 9));
    blocks.fill(FIX, pos(14, 7, 8), pos(15, 7, 9), FillOperation.Replace);

    // Штанга вторинного дзеркала: південна
    shapes.line(MAST, pos(13, 7, 8), pos(-7, 27, 8));
    shapes.line(MAST, pos(13, 7, 9), pos(-7, 27, 9));
    blocks.fill(FIX, pos(-8, 27, 8), pos(-11, 27, 9), FillOperation.Replace);
    blocks.fill(FIX, pos(-10, 27, 4), pos(-11, 27, 7), FillOperation.Replace);

    shapes.line(AIR, pos(-10, 27, 9), pos(-11, 27, 9));
    shapes.line(AIR, pos(-11, 27, 8), pos(-11, 27, 9));

    // Вторинне дзеркало
    blocks.fill(FIX, pos(-10, 27, -2), pos(-11, 31, 3), FillOperation.Replace);
    shapes.line(FIX, pos(-10, 32, -1), pos(-10, 32, 2));

    blocks.fill(SECONDARY_MIRROR, pos(-12, 27, -2), pos(-13, 31, 3), FillOperation.Replace);
    blocks.fill(SECONDARY_MIRROR, pos(-10, 28, -1), pos(-12, 30, 2), FillOperation.Replace);

    shapes.line(AIR, pos(-10, 29, 0), pos(-10, 29, 1));
    shapes.line(SEA_LANTERN, pos(-11, 29, 0), pos(-11, 29, 1));


    // Модуль електроніки
    blocks.fill(EL_MODULE_FRAME, pos(17, 21, -8), pos(23, 36, 9), FillOperation.Replace);
    blocks.fill(EL_MODULE, pos(17, 22, -7), pos(23, 35, 8), FillOperation.Replace);
    blocks.fill(EL_MODULE, pos(18, 22, -8), pos(22, 35, 9), FillOperation.Replace);
    blocks.fill(EL_MODULE, pos(18, 21, -7), pos(22, 36, 8), FillOperation.Replace);

    blocks.fill(EL_MODULE_FRAME, pos(23, 26, -4), pos(23, 32, 5), FillOperation.Replace);
    blocks.fill(EL_MODULE, pos(24, 27, -3), pos(24, 31, 4), FillOperation.Replace);

    blocks.place(EL_MODULE_FRAME, pos(24, 27, -3));
    blocks.place(EL_MODULE_FRAME, pos(24, 31, -3));
    blocks.place(EL_MODULE_FRAME, pos(24, 27, 4));
    blocks.place(EL_MODULE_FRAME, pos(24, 31, 4));

    blocks.place(DECORATION, pos(24, 29, -3));
    blocks.place(DECORATION, pos(24, 29, 4));


    shapes.line(AIR, pos(17, 21, -8), pos(23, 21, -8));
    shapes.line(AIR, pos(17, 21, 9), pos(23, 21, 9));
    shapes.line(AIR, pos(17, 36, -8), pos(23, 36, -8));
    shapes.line(AIR, pos(17, 36, 9), pos(23, 36, 9));


    // Блок-мітка: місце, з якого створювалися дзеркала
    blocks.place(IRON_BLOCK, pos(0, -1, 0));

    // Блок-мітка для створення поверхонь охолодження 
    blocks.place(DIAMOND_BLOCK, pos(-31, -4, 0));

    player.say("§2§lВиконано!");

})



// ============================================================================================= //
// Скрипт для створення поверхонь охолодження
// Запуск цих команд потрібно здійснити з точки (блок-мітки), створеної у команді з рядка 268 
// ============================================================================================= //
player.onChat("surfaces", function () {

    let north = -2;
    let south = 3;
    let east = 3;

    for (let counter = 1; counter <= 13; counter++) {
        player.execute("/fill" + pos(east, 0, north) + pos(east + 1, 0, south) + "BARRIER");

        north -= 2;
        south += 2;
        east += 2;
    }

    player.execute("/fill" + pos(east, 0, north + 2) + pos(east + 40, 0, south - 2)
        + "BARRIER");


    for (let counter = 1; counter <= 13; counter++) {
        player.execute("/fill" + pos(east + 41, 0, north + 2) + pos(east + 42, 0, south - 2)
            + "BARRIER");

        north -= -2;
        south += -2;
        east += 2;
    }


    let height = 1;
    for (let counter = 1; counter <= 5; counter++) {
        north = -2;
        south = 3;
        east = 3;

        for (let counter = 1; counter <= 13; counter++) {
            blocks.fill(COOLING_SURFACE, pos(east, height, north), pos(east + 1, height, south),
                FillOperation.Replace);

            north -= 2;
            south += 2;
            east += 2;
        }

        blocks.fill(COOLING_SURFACE, pos(east, height, north + 2),
            pos(east + 40, height, south - 2), FillOperation.Replace);


        for (let counter = 1; counter <= 13; counter++) {
            blocks.fill(COOLING_SURFACE, pos(east + 41, height, north + 2),
                pos(east + 42, height, south - 2), FillOperation.Replace);

            north -= -2;
            south += -2;
            east += 2;
        }

        height += 1;
    }


    // Кріплення поверхонь охолодження
    blocks.fill(COOLING_SURFACE_FIX, pos(3, 0, -3), pos(4, 5, -4), FillOperation.Replace);
    shapes.line(AIR, pos(3, 0, -4), pos(3, 5, -4));

    blocks.fill(COOLING_SURFACE_FIX, pos(3, 0, 4), pos(4, 5, 5), FillOperation.Replace);
    shapes.line(AIR, pos(3, 0, 5), pos(3, 5, 5));

    blocks.fill(COOLING_SURFACE_FIX, pos(25, 0, -25), pos(26, 5, -26), FillOperation.Replace);
    shapes.line(AIR, pos(25, 0, -26), pos(25, 5, -26));

    blocks.fill(COOLING_SURFACE_FIX, pos(25, 0, 26), pos(26, 5, 27), FillOperation.Replace);
    shapes.line(AIR, pos(25, 0, 27), pos(25, 5, 27));


    blocks.fill(COOLING_SURFACE_FIX, pos(72, 0, -25), pos(73, 5, -26), FillOperation.Replace);
    shapes.line(AIR, pos(73, 0, -26), pos(73, 5, -26));

    blocks.fill(COOLING_SURFACE_FIX, pos(72, 0, 26), pos(73, 5, 27), FillOperation.Replace);
    shapes.line(AIR, pos(73, 0, 27), pos(73, 5, 27));


    blocks.fill(COOLING_SURFACE_FIX, pos(94, 0, -3), pos(95, 5, -4), FillOperation.Replace);
    shapes.line(AIR, pos(95, 0, -4), pos(95, 5, -4));

    blocks.fill(COOLING_SURFACE_FIX, pos(94, 0, 4), pos(95, 5, 5), FillOperation.Replace);
    shapes.line(AIR, pos(95, 0, 5), pos(95, 5, 5));


    blocks.fill(COOLING_SURFACE_FIX, pos(47, 0, 26), pos(47, 5, 27), FillOperation.Replace);
    blocks.fill(COOLING_SURFACE_FIX, pos(47, 0, -25), pos(47, 5, -26), FillOperation.Replace);


    // Модуль між основним дзеркалом та поверхнями охолодження
    blocks.fill(BASE_FRAME, pos(43, -3, -6), pos(51, 5, 7), FillOperation.Replace);
    blocks.fill(BASE, pos(43, -2, -5), pos(51, 4, 6), FillOperation.Replace);
    blocks.fill(BASE, pos(44, -2, -6), pos(50, 4, 7), FillOperation.Replace);
    blocks.fill(BASE, pos(44, -3, -5), pos(50, 5, 6), FillOperation.Replace);

    blocks.place(AIR, pos(43, 5, -6));
    blocks.place(AIR, pos(43, 5, 7));
    blocks.place(AIR, pos(51, 5, -6));
    blocks.place(AIR, pos(51, 5, 7));

    blocks.fill(DECORATION, pos(46, -4, -1), pos(48, -4, 2), FillOperation.Replace);


    player.say("§2§lВиконано!");

})