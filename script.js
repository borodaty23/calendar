const date = new Date();

const doCalendar = () => {
  const lastMonthDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const firstMonthDay = date.getDay();
  const lastDayOfLastMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const lastDayOfCurrentMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = document.querySelector(".calendar__month");
  const exactDate = document.querySelector(".calendar__exact-date");
  const days = document.querySelector(".calendar__days");
  const nextDays = 7 - lastDayOfCurrentMonth;
  //   const nextDayButton = document.querySelector(".calendar__next");
  //   const prevDayButton = document.querySelector(".calendar__prev");

  month.innerHTML = months[date.getMonth()];
  exactDate.innerHTML = date.toDateString();

  for (j = firstMonthDay; j > 0; j--) {
    days.innerHTML += `<div class="calendar__prev-day">${
      lastDayOfLastMonth - j + 1
    }</div>`;
  }

  for (i = 1; i <= lastMonthDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days.innerHTML += `<div class="calendar__current-day" >${i}</div>`;
    } else days.innerHTML += `<div>${i}</div>`;
  }

  for (x = 1; x <= nextDays; x++) {
    days.innerHTML += `<div class="calendar__next-day" >${x}</div>`;
  }

  //   nextDayButton.addEventListener("click", () => {
  //     date.setMonth(date.getMonth() + 1);
  //     days.innerHTML = "";
  //     doCalendar();
  //   });

  //   prevDayButton.addEventListener("click", () => {
  //     date.setMonth(date.getMonth() - 1);
  //     days.innerHTML = "";
  //     doCalendar();
  //   });
};
const days = document.querySelector(".calendar__days");
const nextDayButton = document.querySelector(".calendar__next");
const prevDayButton = document.querySelector(".calendar__prev");
nextDayButton.addEventListener("click", () => {
  days.innerHTML = "";
  date.setMonth(date.getMonth() + 1);
  doCalendar();
});

prevDayButton.addEventListener("click", () => {
  days.innerHTML = "";
  date.setMonth(date.getMonth() - 1);
  doCalendar();
});

doCalendar();
