export default function connect(mapStateToProps, mapDispatchToProps) {
  return function connectHOC(Component) {
    return class Connect extends Component {
      constructor(props) {
        super(props);
        this.state = Object.assign({},
          mapStateToProps(store.getState()),
          mapDispatchToProps(store.dispatch)
        );
        this.onStoreChage = this.onStoreChage.bind(this);
      }

      componentDidMount() {
        store.subscribe(this.onStoreChage);
      }

      componentWillUnmount() {
        store.unsubscribe(this.onStoreChange);
      }

      onStoreChage() {
        const state = store.getState();
        this.setState(mapStateToProps(state));
      }

      render() {
        return <Component {...this.props} {...this.state} />
      }
    }
  }
}