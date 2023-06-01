// BoardMember constructor function
function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;

  // Method: veto
  this.veto = function() {
    return "No, I must disagree";
  };

  // Method: approve
  this.approve = function() {
    return "You can do that!";
  };

  // Method: doCharity
  this.doCharity = function() {
    return "I like to help people.";
  };

  // Method: releasePressStatement
  this.releasePressStatement = function() {
    return "You will see great things from Scuber.";
  };

  // Method: sayHi
  this.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  };
}

// Create a board member instance
const boardMember = new BoardMember('John Doe', 'New York', 'Finance');
console.log(boardMember.name);           // Output: John Doe
console.log(boardMember.homeState);      // Output: New York
console.log(boardMember.training);       // Output: Finance
console.log(boardMember.veto());         // Output: No, I must disagree
console.log(boardMember.approve());      // Output: You can do that!
console.log(boardMember.doCharity());    // Output: I like to help people.
console.log(boardMember.releasePressStatement());  // Output: You will see great things from Scuber.
console.log(boardMember.sayHi());        // Output: Hi, my name is John Doe. I am from New York, and I was trained in Finance.
