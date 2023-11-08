
function intToRoman(num: number): string {
    if (num <= 0 || num % 1 > 0) throw new Error("Number must be positive or integer");
    const record: Record<string, number> = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let res = "";
    for (let rec in record) {
      let count = num / record[rec];
      if (count > 0) {
        res += rec.repeat(count);
        num = num % record[rec];
      }
    }
    return res;
  }
  
  export default intToRoman;
  