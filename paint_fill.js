/**
 * Given a 2-D matrix representing an image, a location of a pixel in the screen and a color C, replace the color of the given pixel and all adjacent same colored pixels with C.
 * For example, given the following matrix, and location pixel of (2, 2), and 'G' for green:
 * B B W
 * W W W
 * W W W
 * B B B
 *
 * Becomes
 * B B G
 * G G G
 * G G G
 * B B B
 */

const image = [
    ['b', 'b', 'w'],
    ['w', 'd', 'w'],
    ['a', 'w', 'w'],
    ['b', 'b', 'b']
];

const m = image.length;
const n = image[0].length;

const i = 2;
const j = 2;
prevColor = image[i][j];
newColor = 'g';
fill(image, i, j, newColor, prevColor);

function fill(image, i, j, newColor) {
    if (i < 0 || i >= m) {
        return;
    }

    if (j < 0 || j >= n) {
        return;
    }

    if (image[i][j] === newColor) {
        return;
    }

    if (image[i][j] !== prevColor) {
        return;
    }

    image[i][j] = newColor;
    fill(image, i, j + 1, newColor, prevColor);
    fill(image, i + 1, j, newColor, prevColor);
    fill(image, i, j - 1, newColor, prevColor);
    fill(image, i - 1, j, newColor, prevColor);

    // console.log(image);
}