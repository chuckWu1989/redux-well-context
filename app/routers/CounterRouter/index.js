import { connect } from "react-redux";
import Counter from "../../views/Counter";
import { query } from "../../../src";
import { onIncrease, onDecrease } from "../../controllers/CounterController";

const mapStateToProps = (state, props) => ({
  times: query(state)
    .withId(props.name)
    .get("times")
});
const mapDispatchToProps = (dispatch, props) => ({
  onIncrease: () => dispatch(onIncrease(props)),
  onDecrease: () => dispatch(onDecrease(props))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
