const logger = (state) => (next) => (action) => {
  console.log("current state =>", state.getState());
  console.log("action =>", action);
  next(action);
  console.log("new state =>", state.getState());
};

export default logger;
