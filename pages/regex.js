const Regex = () => {

  // https://regexland.com/regex-spaces/
  
  const spaces_x20 = /\x20+/g;
  // console.log(spaces_x20.test('   a')); // true
  // console.log(spaces_x20.test('   ')); // false
  const spaces_s = /^\s+$/g;
  // console.log(spaces_s.test('   a')); // false
  // console.log(spaces_s.test('   ')); // true

  const atleast3 = /^[a-zA-Zà-ž\s]{3,}$/g;
  // console.log(atleast3.test('a  ')); // true
  // console.log(atleast3.test('   ')); // false

  const regex = /\bcat\b/g;
  //console.log(regex.test('a black cat')); // true
  //console.log(regex.test('tomcat')); // false


  const food_regex = /^[a-zA-Zà-ž]{3,}$/g;
  //console.log(food_regex.test("ryż")); // true

  const town_regex = /^\s*[a-zA-Zà-žÀ-Ž]{1}[a-zA-Zà-žÀ-Ž][a-zA-Zà-žÀ-Ž '-.=#/]*$/g;
  //console.log(town_regex.test("El Łódź")); // true





  const food = 'ryż';
  const town = 'Łódź';

  if (
    food_regex.test(food) === true
    &&
    town_regex.test(town) === true
  ) {
    console.log('TRUE, data submited');
  } else {
    console.log('FALSE, no submission');
  }
















































  return null;
}

export default Regex;