exports.ids = [4];
exports.modules = {

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/users/_id.vue?vue&type=template&id=04f082b5&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_vm._ssrNode("<h1>" + _vm._ssrEscape("User with id " + _vm._s(_vm.user.name)) + "</h1> <hr> <b>" + _vm._ssrEscape(" " + _vm._s(_vm.user.email)) + "</b>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/users/_id.vue?vue&type=template&id=04f082b5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/users/_id.vue?vue&type=script&lang=js&
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  // validate({params}) {
  //   return /^\d+$/.test(params.id)
  // },
  async asyncData({
    params,
    store
  }) {
    try {
      const user = await store.dispatch('users/fetchUserById', params.id);
      return {
        user
      };
    } catch (e) {
      console.log(e);
    }
  }

});
// CONCATENATED MODULE: ./pages/users/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var users_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/users/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  users_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "100aa0b2"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map