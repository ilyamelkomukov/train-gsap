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
  },

  doExperiment1(subject) {
    TweenLite.from(subject, 1.2, {
      right: "0",
      backgroundColor: "rgb(231, 225, 104)",
      ease: Bounce.easeOut
    });
  }
};

export default TrainRoom;
