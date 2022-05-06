import store from './store';
import { actions as counterActions } from './store/reducers/counter/actions';
import { actions as lessonsActions } from './store/reducers/lessons/actions';
import './style';

console.log( store.getState() ) // retorna o valor atual da store

store.dispatch( counterActions.increment() )
store.dispatch( counterActions.increment() )
store.dispatch( counterActions.decrement() )

store.dispatch( lessonsActions.addLesson() )
store.dispatch( lessonsActions.addLesson() )
store.dispatch( lessonsActions.removeLesson() )

console.log( store.getState() ) // retorna o valor atualizado
