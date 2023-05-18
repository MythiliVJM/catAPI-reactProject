import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatsSuccess } from './catState';

function* workGetCatsFetch(){
    const cats= yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
    const formattedCats= yield cats.json();
    const formattedCatsShortend= formattedCats.slice(0,20);
    yield put(getCatsSuccess(formattedCatsShortend));
}
function* catSaga(){
    yield takeEvery('cats/getCatsFetch', workGetCatsFetch);
}

export default catSaga;