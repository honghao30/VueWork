let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let ydate = today.getDate() - 1;
let ydate2 = today.getDate() - 2;
let ydate3 = today.getDate() - 2;
let todayFormt = Number(
  `${year}${month >= 10 ? month : '0' + month}${ydate >= 10 ? ydate : '0' + ydate
  }`,
);
let yesterDayFormt = Number(
  `${year}${month >= 10 ? month : '0' + month}${ydate2 >= 10 ? ydate2 : '0' + ydate2
  }`,
);
let oldDayFormt = Number(
  `${year}${month >= 10 ? month : '0' + month}${ydate3 >= 10 ? ydate3 : '0' + ydate3
  }`,
);
