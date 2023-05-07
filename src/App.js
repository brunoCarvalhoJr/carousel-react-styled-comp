import Carousel from './Carousel';
import {DivApp} from './App.style'

const images = [
  'https://picsum.photos/id/1015/800/300',
  'https://picsum.photos/id/1016/800/300',
  'https://picsum.photos/id/1018/800/300',
  'https://picsum.photos/id/1015/800/300',
  'https://picsum.photos/id/1016/800/300',
  'https://picsum.photos/id/1018/800/300',
];

function App() {
  return (
    <DivApp>
      <Carousel images={images} />
    </DivApp>
  );
}

export default App;
