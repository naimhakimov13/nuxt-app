exports.ids = [5];
exports.modules = {

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/users/index.vue?vue&type=template&id=19e547c8&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_vm._ssrNode("<h1>Users Page</h1> <ul>" + _vm._ssrList(_vm.users, function (user) {
    return "<li><a href=\"#\">" + _vm._ssrEscape(_vm._s(user.name) + " (" + _vm._s(user.email) + ")") + "</a></li>";
  }) + "</ul>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/users/index.vue?vue&type=template&id=19e547c8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/users/index.vue?vue&type=script&lang=js&
/* harmony default export */ var usersvue_type_script_lang_js_ = ({
  // async asyncData({store, error}) {
  //   try {
  //     await store.dispatch('users/fetchUsers')
  //     return {}
  //   } catch (e) {
  //     error(e)
  //   }
  // },
  // async fetch({store, error}) {
  //   try {
  //     if (!store.getters['users/users'].length) {
  //       await store.dispatch('users/fetchUsers')
  //     }
  //   } catch (e) {
  //     error(e)
  //   }
  // },
  data() {
    return {
      pageTitle: "Users page"
    };
  },

  computed: {
    users() {
      return this.$store.getters['users/users'];
    }

  },
  methods: {
    goTo(id) {
      this.$router.push("/users/" + id);
    }

  }
});
// CONCATENATED MODULE: ./pages/users/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_usersvue_type_script_lang_js_ = (usersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/users/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_usersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "67ce33ca"
  
)

/* harmony default export */ var users = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map