import {observable, action} from 'mobx';

class ScoreStore {
  @observable score = 10;
  @action increment() { this.score+=10;}
  decrement() { this.counter--;}
}

export default new ScoreStore();