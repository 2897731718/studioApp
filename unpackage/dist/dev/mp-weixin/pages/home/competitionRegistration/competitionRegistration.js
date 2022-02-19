(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/home/competitionRegistration/competitionRegistration"],{

/***/ 48:
/*!****************************************************************************************************************************************************!*\
  !*** D:/frontEnd/project/studioAssessment/studioAssessmentApp/main.js?{"page":"pages%2Fhome%2FcompetitionRegistration%2FcompetitionRegistration"} ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _competitionRegistration = _interopRequireDefault(__webpack_require__(/*! ./pages/home/competitionRegistration/competitionRegistration.vue */ 49));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_competitionRegistration.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 49:
/*!*******************************************************************************************************************************!*\
  !*** D:/frontEnd/project/studioAssessment/studioAssessmentApp/pages/home/competitionRegistration/competitionRegistration.vue ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _competitionRegistration_vue_vue_type_template_id_0285956a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./competitionRegistration.vue?vue&type=template&id=0285956a& */ 50);
/* harmony import */ var _competitionRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./competitionRegistration.vue?vue&type=script&lang=js& */ 52);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _competitionRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _competitionRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _competitionRegistration_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./competitionRegistration.vue?vue&type=style&index=0&lang=scss& */ 54);
/* harmony import */ var _ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _competitionRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _competitionRegistration_vue_vue_type_template_id_0285956a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _competitionRegistration_vue_vue_type_template_id_0285956a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _competitionRegistration_vue_vue_type_template_id_0285956a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/home/competitionRegistration/competitionRegistration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 50:
/*!**************************************************************************************************************************************************************!*\
  !*** D:/frontEnd/project/studioAssessment/studioAssessmentApp/pages/home/competitionRegistration/competitionRegistration.vue?vue&type=template&id=0285956a& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_template_id_0285956a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./competitionRegistration.vue?vue&type=template&id=0285956a& */ 51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_template_id_0285956a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_template_id_0285956a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_template_id_0285956a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_template_id_0285956a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 51:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/frontEnd/project/studioAssessment/studioAssessmentApp/pages/home/competitionRegistration/competitionRegistration.vue?vue&type=template&id=0285956a& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 52:
/*!********************************************************************************************************************************************************!*\
  !*** D:/frontEnd/project/studioAssessment/studioAssessmentApp/pages/home/competitionRegistration/competitionRegistration.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./competitionRegistration.vue?vue&type=script&lang=js& */ 53);
/* harmony import */ var _ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 53:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/frontEnd/project/studioAssessment/studioAssessmentApp/pages/home/competitionRegistration/competitionRegistration.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var RotateCard = function RotateCard() {__webpack_require__.e(/*! require.ensure | components/content/RotateCard */ "components/content/RotateCard").then((function () {return resolve(__webpack_require__(/*! ../../../components/content/RotateCard.vue */ 159));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =



















































































































































































































































































{
  data: function data() {
    return {
      tipsContent: '',
      competitionKind: ['软件创新', '科技乐评', '算法比赛', '码上学习'],
      competitionIndex: 0,
      firstKindData: ['嵌入式', '软件组(web/小程序)'],
      firstKindIndex: 0,
      secondKindData: ['大一组', '大二以上组'],
      secondKindIndex: 0,
      thirdKindData: ['个人赛', '小组赛'],
      thirdKindIndex: 0,
      projectName: '1',
      stdNumberLeader: '2',
      classNumberLeader: '3',
      realNameLeader: '4',
      qNumberLeader: '5',
      classNameOne: '8',
      realNameOne: '9',
      classNameTwo: '8',
      realNameTwo: '9',
      classNameThree: '8',
      realNameThree: '9',
      classNameFour: '8',
      realNameFour: '9',
      classNumberAlgorithm: 'z',
      realNameAlgorithm: 's',
      qNumberAlgorithm: 'w',
      classNumberStuding: 'e',
      realNameStuding: 'r' };


  },
  components: {
    RotateCard: RotateCard },


  methods: {
    selectTab: function selectTab(index) {
      this.competitionIndex = index;
    },
    choseFirstKind: function choseFirstKind(e) {
      this.firstKindIndex = e.detail.value;
    },
    choseSecondKind: function choseSecondKind(e) {
      this.secondKindIndex = e.detail.value;
    },
    choseThirdKind: function choseThirdKind(e) {
      this.thirdKindIndex = e.detail.value;
      console.log(this.thirdKindIndex);
    },
    confirmSignUpTechnology: function confirmSignUpTechnology() {// 科技月评软件组比赛报名

    },
    confirmSignUpInnovate: function confirmSignUpInnovate() {// 软件创新软件组比赛报名

    },
    confirmSignUpAlgorithm: function confirmSignUpAlgorithm() {// 算法比赛报名

    },
    confirmSignUpStuding: function confirmSignUpStuding() {// 码上学习报名

    } } };exports.default = _default;

/***/ }),

/***/ 54:
/*!*****************************************************************************************************************************************************************!*\
  !*** D:/frontEnd/project/studioAssessment/studioAssessmentApp/pages/home/competitionRegistration/competitionRegistration.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../ANEW/software/HBuilderX.3.3.3.20211225/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./competitionRegistration.vue?vue&type=style&index=0&lang=scss& */ 55);
/* harmony import */ var _ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ANEW_software_HBuilderX_3_3_3_20211225_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_competitionRegistration_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 55:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/frontEnd/project/studioAssessment/studioAssessmentApp/pages/home/competitionRegistration/competitionRegistration.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[48,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/competitionRegistration/competitionRegistration.js.map