define(["exports","preact/jsx-runtime","./utils/UNSAFE_classNames","css!./UNSAFE_LabelValueLayout.css","./UNSAFE_Flex","./hooks/UNSAFE_useFormContext","./hooks/UNSAFE_useFormFieldContext","./utils/UNSAFE_size","./classNames-f11010a7","./Flex-e3a46a36","./tslib.es6-24bf3861","./utils/UNSAFE_interpolations/dimensions","./utils/UNSAFE_arrayUtils","./_curry1-f9717f1c","./utils/UNSAFE_mergeInterpolations","./_curry3-01167a7d","./_curry2-c4648b65","./_has-6f4fa2af","./utils/UNSAFE_interpolations/boxalignment","./keys-6231193b","./utils/UNSAFE_interpolations/flexbox","./flexbox-b6c222f9","./utils/UNSAFE_interpolations/flexitem","./flexitem-1405ebe5","preact","preact/hooks"],function(s,e,t,a,i,l,o,r,n,c,x,u,d,_,F,b,f,m,p,N,h,y,S,E,U,A){"use strict";const g="_1xnb9na",j="fyo095",k="_5wgkix",v="a4cxou",w="_7839vk",C="_1fo7ckq",O="_19kk1oz",z="_1ax99fx";s.LabelValueLayout=({label:s,labelEdge:t,children:a,labelStartWidth:i="33%"})=>{const x=r.sizeToCSS(i),u=`calc(100% - ${x})`,d="start"===t?{flexBasis:x,width:x,maxWidth:x}:{},_="start"===t?{flexBasis:u,width:u,maxWidth:u}:{},{isFormLayout:F,isReadonly:b,labelWrapping:f}=l.useFormContext(),{isReadonly:m}=o.useFormFieldContext(),p=F&&b||!F&&m,N=n.classNames([g,"start"===t&&j,"top"===t&&k,"top"===t&&p&&v]),h=n.classNames([w,"start"===t&&C,"start"===t&&!p&&O,"truncate"===f&&z]);return e.jsxs(c.Flex,Object.assign({wrap:"wrap",align:"start"},{children:[e.jsx("div",Object.assign({class:N,style:d},{children:e.jsx("div",Object.assign({class:h},{children:s}))})),e.jsx("div",Object.assign({class:"uyxz2o",style:_},{children:a}))]}))},Object.defineProperty(s,"__esModule",{value:!0})});
//# sourceMappingURL=UNSAFE_LabelValueLayout.js.map
