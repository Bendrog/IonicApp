import { Bull } from './bull';
import { Race } from './race';
var Female = /** @class */ (function () {
    function Female() {
        this.race = new Race();
        this.father = new Bull();
        this.grandfather = new Bull();
    }
    return Female;
}());
export { Female };
//# sourceMappingURL=female.js.map