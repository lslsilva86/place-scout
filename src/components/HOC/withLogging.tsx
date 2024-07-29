import React, { useEffect } from 'react';
import { selectError } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { NoticeBar } from '@ant-design/react-native';

const withLogging = <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> => {
  return (props: P) => {
    const error = useSelector(selectError);

    useEffect(() => {
      console.log('Component Mounted');
      return () => {
        console.log('Component Unmounted');
      };
    }, []);

    if (error) {
      return (
        <NoticeBar
          mode="closable"
          marqueeProps={{ loop: true, style: { fontSize: 12, color: 'red' } }}
          icon={undefined}
        >
          {error.message}
        </NoticeBar>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLogging;
