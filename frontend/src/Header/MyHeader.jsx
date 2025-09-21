import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './MyNavBar';
import '../Styles/style.css';
import SearchItem from './SearchItem';

function MyHeader() {
  return (
    <div>
      <MyNavBar></MyNavBar>
      <SearchItem></SearchItem>
    </div>
  );
}

export default MyHeader;