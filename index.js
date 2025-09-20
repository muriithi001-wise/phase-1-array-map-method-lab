const tutorials = [
  'what does the this keyword mean?',
  'what is the constructor oo pattern?',
  'implementing blockchain web api',
  'the test driven development workflow',
  'what is nan and how can we check for it',
  'what is the difference between stoppropagation and preventdefault?',
  'immutable state and pure functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is jsonp?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      // Handle special cases for acronyms and specific terms
      if (word.toLowerCase() === 'oo') return 'OO';
      if (word.toLowerCase() === 'api') return 'API';
      if (word.toLowerCase() === 'nan') return 'NaN';
      if (word.toLowerCase() === 'jsonp?') return 'JSONP?';
      if (word.toLowerCase() === 'stoppropagation') return 'StopPropagation';
      if (word.toLowerCase() === 'preventdefault?') return 'PreventDefault?';
      // Capitalize first letter of each word and lowercase the rest
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  });
};

console.log(titleCased());