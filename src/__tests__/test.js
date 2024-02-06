import { test, expect } from '@jest/globals';
import sortByHealth from '../index';


test('testing sortByHealth', () => {
    const array = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];
    const exceptedArray = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];
    const result = sortByHealth(array);
    expect(result).toEqual(exceptedArray);
})
