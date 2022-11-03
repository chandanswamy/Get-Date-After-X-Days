const addDays = require("date-fns/addDays");

function newDate(days) {
  const date = addDays(new Date("August 22 2020"), days);
  const result = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  return result;
}

module.exports = newDate;
