var test = require("tape");

test("Testing tape", function(t) {
  t.equal(1, 1, "tape is working");
  t.end();
});

// var letter = "A";
// test("findFamilyName() finds a string in words array", function(t) {
//   var actual = "/.index.js".findFamilyName(letter);
//   var expected = ["Abdou", "Adams", "Aimone"];
//   t.deepEqual(actual, expected, "Search for A found");
//   t.end();
// });
//
// var letter = "B";
// test("findFamilyName() finds a string in words array", function(t) {
//   var actual = "/.index.js".findFamilyName(letter);
//   var expected = ["Bach", "Bagi", "Bainer"];
//   t.deepEqual(actual, expected, "Search for B found");
//   t.end();
// });
