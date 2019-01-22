import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LocalStorageMock from './__mocks__/localStorage';

configure({ adapter: new Adapter() });

global.localStorage = new LocalStorageMock();
