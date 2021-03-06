/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
function robotSim(commands, obstacles) {
    let obstacle = {};
    let x = 0, y = 0, max = 0, direction = 0;
    for (let i = 0; i < obstacles.length; i++) {
        obstacle[obstacles[i]] = true;
    }
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === -1) {
            direction = (direction + 1 + 4) % 4;
        } else if (commands[i] === -2) {
            direction = (direction - 1 + 4) % 4;
        } else {
            while (commands[i]--) {
                let previousX = x;
                let previousY = y;
                if (direction === 0) {
                    y++;
                }
                if (direction === 1) {
                    x++;
                }
                if (direction === 2) {
                    y--;
                }
                if (direction === 3) {
                    x--;
                }
                if (obstacle[x + ',' + y]) {
                    [x, y] = [previousX, previousY];
                    break;
                }
            }
        }
        max = Math.max(max, x ** 2 + y ** 2);
    }
    return max;
}

console.log(robotSim([4,-1,3], []));
console.log(robotSim([4,-1,4,-2,4], [[2,4]]));
