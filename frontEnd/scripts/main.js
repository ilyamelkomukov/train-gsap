import TrainRoom from '../components/TrainRoom/Trainroom.js';

TrainRoom.sayHello();

$("document").ready(() => {
  TrainRoom.makeHamburgerClickable();

  let subject = $("#subject");
  subject.click(() => {
    TrainRoom.doExperiment1(subject);
  });
});
