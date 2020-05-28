/* eslint-disable import/prefer-default-export */
export const getPlatform = () => {
  const obj = {
    android: false,
    ios: false,
    mobile: false,
    desktop: false
  };
  if (navigator) {
    if (navigator.userAgent.match(/Android/i)) obj.android = true;
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) obj.ios = true;

    if (obj.android || obj.ios) {
      obj.mobile = true;
    } else obj.desktop = true;
  } else if (window) {
    if (window.innerWidth >= 990) {
      obj.desktop = true;
    } else obj.mobile = true;
  }
  return obj;
};