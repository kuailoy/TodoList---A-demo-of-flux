import React from 'react';

export default React.memo(({ isLoading, error }) => {
  if (isLoading) {
    return <div>页面加载中...</div>;
  } else if (error) {
    console.log(error);
    return <div>页面加载失败</div>;
  } else {
    return null;
  }
})