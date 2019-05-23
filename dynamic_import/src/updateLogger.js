export default (Component) => class extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('component did update');
  }
}