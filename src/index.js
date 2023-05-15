import './scss/index.scss';
import {Excel} from '@/components/excel/Excel';
console.log('Working!');

const excel = new Excel('#app', {
    components: [],
});

console.log(excel);
