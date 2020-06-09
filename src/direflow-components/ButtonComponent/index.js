import {
    DireflowComponent
} from 'direflow-component';
import ButtonComponent from './ButtonComponent';

export default DireflowComponent.create({
    component: ButtonComponent,
    configuration: {
        tagname: 'symplr-button',
        useShadow: false
    }
});
