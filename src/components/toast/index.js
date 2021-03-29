import { toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

import './style.scss';

const View = (type, description) => {
  toast({
    title: `${type[0].toUpperCase()}${type.slice(1)}`,
    description: description,
    type: type,
    icon: 'envelope',
    time: 5000,
    size: 'medium',
  });
};

export default View;
