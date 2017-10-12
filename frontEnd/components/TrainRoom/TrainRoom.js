let TrainRoom = {
  sayHello() {
    $('#transform-browser-rendering-heading')
      .after($("<p>")
        .text("Hello js"));
  },

  makeHamburgerClickable() {
    $(".hamburger-wrapper")
      .click(() => {
        $(".middle")
          .toggleClass((index) => {
            return index === 0 ? 'dash-clockwise' : 'dash-counter-clockwise';
          });
        $(".top, .bottom")
          .toggleClass("__hidden");
      });
  }
};

export default TrainRoom;
