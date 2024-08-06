import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';

const withLoading = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin spinning={loading} >
          {!loading && <WrappedComponent {...props} size="large"/>}
        </Spin>
      </div>
    );
  };
};

export default withLoading;
