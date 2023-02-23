import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import ButtonPanel from '../components/ButtonPanel';
import Display from '../components/Display';
import App from '../App';

it('renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<ButtonPanel clickHandler={clickHandler} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Display>123</Display>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
