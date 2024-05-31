
class Direction {
    static UP = 0
    static RIGHT = 1
    static DOWN = 2
    static LEFT = 3
}
class Location {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
class PacMan {
    constructor(location, direction) {
        this.location = location || new Location();
        this.direction = direction || Direction.LEFT;
    }
    setDirection(direction) {
        this.direction = direction;
        //update screen?
    }
    toString() {
        return ["U", "C", "n", ")"][this.direction];
    }
    getImage() {
        return [
            "up.png",
            "right.png",
            "down.png",
            "left.png"
        ][this.direction];
    }
}
class Game {
    constructor() {
        this.pacman = new PacMan();
        this.pacman.location = new Location(5,5);
        this.lastKey = 37; //left
        this.run()
    }
    run() {
        // while(!this.quitting){
        this.render()
        this.input()
        this.update()
        // }
        // window.requestAnimationFrame(e => this.run());
        setTimeout(() => {
            this.run();
        }, 200);
    }
    render() {
        hero.src = "./images/" + this.pacman.getImage()
        hero.style.left = this.pacman.location.x * 10 + "vw";
        hero.style.top = this.pacman.location.y * 10 + "vw";
    }
    input() {

        const keymap = {
            37: Direction.LEFT,
            38: Direction.UP,
            39: Direction.RIGHT,
            40: Direction.DOWN,
        };

        this.pacman.direction = keymap[this.lastKey];

    }
    update() {
        if(this.pacman.direction === Direction.RIGHT && this.pacman.location.x < 9){
            this.pacman.location.x += 1;
        }
        if(this.pacman.direction === Direction.UP && this.pacman.location.y > 0){
            this.pacman.location.y -= 1;
        }
        if(this.pacman.direction === Direction.LEFT && this.pacman.location.x > 0){
            this.pacman.location.x -= 1;
        }
        if(this.pacman.direction === Direction.DOWN && this.pacman.location.y < 9){
            this.pacman.location.y += 1;
        }
    }
}
document.addEventListener("DOMContentLoaded", e => {
    const game = new Game();
    document.addEventListener("keydown", (event) => {
        game.lastKey = event.keyCode;
    });

});//end loaded
