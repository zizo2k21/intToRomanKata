export enum romanNumbers {
    'I',
    'V',
    'X',
    'L',
    'C',
    'D',
    'M'
}

function romanToInt (str: string): number {
    const map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
    const n = str.length;
    let res = map.get(str[n - 1]);
    for (let i = n - 2; i >= 0; i--) {
        map.get(str[i]) >= map.get(str[i + 1]) ? res += map.get(str[i]) : res -= map.get(str[i]);
    }
    if(isNaN(res)) throw new Error('Must be a roman number')
    return res;
};
export default romanToInt