let TrainRoom = {
  sayHello() {
    $('#transform-browser-rendering-heading')
      .after($("<p>")
      .text("Hello js"));
  },

  makeHamburgerClickable() {
    let hamburger = $(".hamburger-wrapper").eq(0);

    hamburger
      .click(() => {
        hamburger.find(".middle")
          .toggleClass((index) => {
            return index === 0 ? 'dash-clockwise' : 'dash-counter-clockwise';
          });
    hamburger.find(".top, .bottom")
      .toggleClass("__hidden");
    });
  },

  doExperiment1(subject) {
    subject.click(() => {

      TweenLite.from(subject, 5, {
        right: "0",
        backgroundColor: "rgb(231, 225, 104)",
        transform: "rotateX(180deg)",
        ease: CustomEase.create("custom", "M0,0 C0.14,0 0.076,0.376 0.1,0.6 0.11,0.693 0.102,1 0.172,0.99 0.296,0.972 0.166,0.08 0.3,0.046 0.422,0.078 0.352,1.022 0.422,1 0.503,0.974 0.43,0.088 0.534,0.088 0.606,0.088 0.6,0.942 0.652,1 0.72,1.076 0.684,0.278 0.752,0.32 0.818,0.38 0.756,0.952 0.814,0.99 0.876,1.03 0.816,0.612 0.878,0.676 0.906,0.744 0.888,1.016 0.942,1 0.958,0.81 1,1 1,1")
      });
    });
  },

  doExperiment2(subject) {

    function completeHandler(bounds) {
      bounds.css({
        visibility: "hidden"
      });
    }

    let middles = subject.find(".middle"),
      bounds = subject.find(".top, .bottom");

    subject.click(() => {
      TweenLite.to(middles.eq(0), .4, {
        transform: "rotateZ(-45deg)",
        ease: Power1.easeOut
      });
      TweenLite.to(middles.eq(1), .4, {
        transform: "rotateZ(45deg)",
        ease: Power1.easeOut
      });
      TweenLite.to(bounds, .3, {
        opacity: 0,
        ease: Power1.easeIn,
        onComplete: completeHandler,
        onCompleteParams: [bounds]
      });
    });
  }
};

export default TrainRoom;
