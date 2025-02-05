function reverse(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

const isPalindrome = (str) => {
  return str.split("").reverse().join("") === str;
};

const maxChar = (str) => {
  let obj = {};
  let max = 0;
  let char = "";

  for (let ch of str) {
    obj[ch] = obj[ch] ? obj[ch] + 1 : 1;
  }

  for (const [k, v] of Object.entries(obj)) {
    if (v > max) {
      max = v;
      char = k;
    }
  }

  return char;
};

//(maxChar("abcccccccd"));
//(maxChar("apple 1231111"));

const chunk = (array, size) => {
  const result = [];
  let index = 0;

  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }

  return result;
};

//(chunk([1, 2, 3, 4], 2));
//(chunk([1, 2, 3, 4, 5], 2));
//(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
//(chunk([1, 2, 3, 4, 5], 4));
//(chunk([1, 2, 3, 4, 5], 10));

const capitalize = (str) => {
  const words = str.split(" ");
  const sentence = [];

  for (let word of words) {
    sentence.push(word[0].toUpperCase() + word.slice(1));
  }

  return sentence.join(" ");
};

//(capitalize("this is mukhtar from coding money"));

const vowels = (str) => {
  const vowel = "aeiou";
  str = str.toLowerCase();
  let vowelCount = 0;

  for (let ch of str) {
    if (vowel.includes(ch)) {
      vowelCount++;
    }
  }

  return vowelCount;
};

//(vowels("Coding Money"));
//(vowels("How are you"));

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      //("fizzbuzz");
    } else if (i % 3 === 0) {
      //("fizz");
    } else if (i % 5 === 0) {
      //("buzz");
    } else {
      //(i);
    }
  }
}

// fizzBuzz(20);

const spiralMatrix = (n) => {
  const matrix = [];
  for (let row = 0; row < n; row++) {
    matrix.push([]);
  }

  return matrix;
};

//(spiralMatrix(4));

let arry = [1, 2, [4, 5, 6], 7, [9, 10, [11, 12]], 14];

function flatten(input) {
  const stack = [...input];
  const res = [];

  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }

  return res;
}

//(flatten(arry));

const users = [
  { id: 32, fName: "Mary", lName: "Smith" },
  { id: 65, fName: "Steve", lName: "Hancock" },
  { id: 105, fName: "LJ", lName: "Estoque" },
  { id: 65, fName: "Steve", lName: "Hancock" },
  { id: 12, fName: "Lynette", lName: "Turner" },
  { id: 32, fName: "Mary", lName: "Smith" },
];

const uniqUsers = [
  ...users.reduce((acc, obj) => acc.set(obj.id, obj), new Map()).values(),
];

//(uniqUsers);

let array = [1, 2, 3, 4, 2, 5, 4, 1, 5, 6];

const newArray = array.filter((num, i) => array.indexOf(num) === i);

//(newArray);

let start = [
  {
    id: 1,
    status: "completed",
    name: "The Lord of the Rings",
  },
  {
    id: 2,
    status: "in-progress",
    name: "Lord of the Flies",
  },
  {
    id: 3,
    status: "not-started",
    name: "Dune",
  },
  {
    id: 4,
    status: "not-started",
    name: "American Gods",
  },
  {
    id: 5,
    status: "completed",
    name: "Ender's Game",
  },
  {
    id: 6,
    status: "in-progress",
    name: "Brave New World",
  },
  {
    id: 7,
    status: "completed",
    name: "1984",
  },
];

let final = start.reduce(
  (acc, obj) => {
    switch (obj.status) {
      case "completed":
        acc[0].books = [...acc[0].books, { id: obj.id, name: obj.name }];
        return acc;
        break;

      case "in-progress":
        acc[1].books = [...acc[1].books, { id: obj.id, name: obj.name }];
        return acc;
        break;

      case "not-started":
        acc[2].books = [...acc[2].books, { id: obj.id, name: obj.name }];
        return acc;
        break;
    }
  },
  [
    { status: "completed", books: [] },
    { status: "in-progress", books: [] },
    { status: "not-started", books: [] },
  ]
);

let scores = [90, 60, 50, 80, 60, 70, 60, 50, 90, 100, 60];

// let elementCount = {};

// scores.forEach((val) => (elementCount[val] = elementCount[val] + 1 || 1));

const elementCount = scores.reduce((acc, elem) => {
  acc[elem] = acc[elem] + 1 || 1;
  return acc;
}, {});

const duplicateElements = [];

for (let [k, v] of Object.entries(elementCount)) {
  if (v > 1) duplicateElements.push(parseInt(k));
}

// //console.log(duplicateElements);

let testArray = [1, [2, 3, [4, 5, 6, [7]]], [8, 9]];

const flattenedArray = (arr) => {
  const stack = [...arr];
  const res = [];

  while (stack.length) {
    const next = stack.shift();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }

  return res;
};

//console.log(flattenedArray(testArray));

const arr = [60, 90, 80, 70, 50, 30, 20, 100, 40];

const insertEvery = (array, data, nth) => {
  return array.flatMap((elem, idx) =>
    (idx + 1) % nth === 0 ? [elem, data] : elem
  );
};

//console.log(insertEvery(arr, 99, 3));

const sum = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

//console.log(sum(23)(6)(1));

function evaluate(operator) {
  return function (a) {
    return function (b) {
      switch (operator) {
        case "sum":
          return a + b;
          break;
        case "multiply":
          return a * b;
          break;
        case "divide":
          return a / b;
          break;
        case "subtract":
          return a - b;
          break;
        default:
          return "Invalid operation";
      }
    };
  };
}

// console.log(evaluate("divide")(38)(6));
// console.log(evaluate("multiply")(24)(6));
// console.log(evaluate("sum")(38)(6));
// console.log(evaluate("subtract")(45)(6));

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    else return a;
  };
}

// console.log(add(5)(2)());
