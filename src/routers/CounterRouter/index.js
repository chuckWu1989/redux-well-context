import { connect } from "react-redux";
import Counter from "../../views/Counter";
import { onIncrease, onDecrease } from "../../controllers/CounterController";

const mapStateToProps = (state, props) => ({
  times: state.getIn(["store", props.name, "times"])
});
const mapDispatchToProps = (dispatch, props) => ({
  onIncrease: () => dispatch(onIncrease(props)),
  onDecrease: () => dispatch(onDecrease(props))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
