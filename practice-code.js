class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counts: 0 };
  }

  tick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  componentDidMount() {
    this.counter = setInterval(() => this.tick(), 1000);
    console.log(" fuck OFF ");
  }

  componentDidUpdate() {
    console.log(" this is hard ");
  }

  componentWillUnmount() {
    console.log("killing myself now byeeeeeee");
    clearInterval(this.counter);
  }

  render() {
    console.log(
      "body found just moments ago dead at the scene from gunshot wounds, witnesses say he deserved ",
    );
  }
}
