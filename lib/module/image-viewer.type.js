function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { simpleStyle } from './image-viewer.style';
export class Props {
  constructor() {
    _defineProperty(this, "show", false);

    _defineProperty(this, "imageUrls", []);

    _defineProperty(this, "flipThreshold", 80);

    _defineProperty(this, "maxOverflow", 300);

    _defineProperty(this, "index", 0);

    _defineProperty(this, "failImageSource", undefined);

    _defineProperty(this, "backgroundColor", 'black');

    _defineProperty(this, "footerContainerStyle", {});

    _defineProperty(this, "menuContext", {
      saveToLocal: 'save to the album',
      cancel: 'cancel'
    });

    _defineProperty(this, "saveToLocalByLongPress", true);

    _defineProperty(this, "enableImageZoom", true);

    _defineProperty(this, "style", {});

    _defineProperty(this, "enableSwipeDown", false);

    _defineProperty(this, "swipeDownThreshold", void 0);

    _defineProperty(this, "doubleClickInterval", void 0);

    _defineProperty(this, "minScale", void 0);

    _defineProperty(this, "maxScale", void 0);

    _defineProperty(this, "enablePreload", false);

    _defineProperty(this, "pageAnimateTime", 100);

    _defineProperty(this, "useNativeDriver", false);

    _defineProperty(this, "onLongPress", () => {//
    });

    _defineProperty(this, "onClick", () => {//
    });

    _defineProperty(this, "onDoubleClick", () => {//
    });

    _defineProperty(this, "onSave", () => {//
    });

    _defineProperty(this, "onMove", () => {//
    });

    _defineProperty(this, "renderHeader", () => {
      return null;
    });

    _defineProperty(this, "renderFooter", () => {
      return null;
    });

    _defineProperty(this, "renderIndicator", (currentIndex, allSize) => {
      return /*#__PURE__*/React.createElement(View, {
        style: simpleStyle.count
      }, /*#__PURE__*/React.createElement(Text, {
        style: simpleStyle.countText
      }, currentIndex + '/' + allSize));
    });

    _defineProperty(this, "renderImage", props => {
      return /*#__PURE__*/React.createElement(Image, props);
    });

    _defineProperty(this, "renderArrowLeft", () => {
      return null;
    });

    _defineProperty(this, "renderArrowRight", () => {
      return null;
    });

    _defineProperty(this, "onShowModal", () => {//
    });

    _defineProperty(this, "onCancel", () => {//
    });

    _defineProperty(this, "onSwipeDown", () => {//
    });

    _defineProperty(this, "loadingRender", () => {
      return null;
    });

    _defineProperty(this, "onSaveToCamera", () => {//
    });

    _defineProperty(this, "onChange", () => {//
    });

    _defineProperty(this, "menus", void 0);
  }

}
export class State {
  constructor() {
    _defineProperty(this, "show", false);

    _defineProperty(this, "currentShowIndex", 0);

    _defineProperty(this, "prevIndexProp", 0);

    _defineProperty(this, "imageLoaded", false);

    _defineProperty(this, "imageSizes", []);

    _defineProperty(this, "isShowMenu", false);
  }

}
//# sourceMappingURL=image-viewer.type.js.map