(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{174:function(e,a,t){"use strict";t.r(a);var r=t(0),n=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://stackoverflow.com/questions/3601602/what-are-rvalues-lvalues-xvalues-glvalues-and-prvalues",target:"_blank",rel:"noopener noreferrer"}},[e._v("What are rvalues, lvalues, xvalues, glvalues, and prvalues?"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.open-std.org/JTC1/SC22/WG21/docs/papers/2010/n3092.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("FCD(n3092)"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.zhihu.com/question/28039779",target:"_blank",rel:"noopener noreferrer"}},[e._v("C++ 中的左值、右值、左值引用、右值引用、引用分别是什么，有哪些关系？"),t("OutboundLink")],1)])])])},[function(){var e=this.$createElement,a=this._self._c||e;return a("h1",{attrs:{id:"lvalue-rvalue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lvalue-rvalue","aria-hidden":"true"}},[this._v("#")]),this._v(" lvalue&rvalue")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"缘由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缘由","aria-hidden":"true"}},[this._v("#")]),this._v(" 缘由")])},function(){var e=this.$createElement,a=this._self._c||e;return a("ul",[a("li",[this._v("左值右值的概念最早是从C里面来的，是用来区分赋值运算符左侧运算对象和右侧运算对象的，左值可以左右都放，右值只能放右边，不能放左边。")]),this._v(" "),a("li",[this._v("但在引入C++中概念变得复杂，也不再是之前代表赋值语句左右的左值和右值。简单归纳是：右值，是用的对象的值(内容)；左值，用的是对象的身份(在内存中的位置)。")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"c-11中的变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-11中的变化","aria-hidden":"true"}},[this._v("#")]),this._v(" C++11中的变化")])},function(){var e=this.$createElement,a=this._self._c||e;return a("ul",[a("li",[this._v("而在C++11中为了适应新特性的要求，对左值右值进行了细化，即表达式的值有:lvalue、glvalue、xvalue、rvalue、prvalue五种。其关系如下图："),a("br"),this._v(" "),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2018/jpeg/104558/1542613221856-4c2b11fe-1a05-4d33-a5cc-90b3eabcb875.jpeg",alt:"lvaluervalue"}}),a("br"),this._v("\n官方定义为：")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("— An lvalue (so called, historically, because lvalues could appear on the left-hand side of an assignment\nexpression) designates a function or an object. [ Example: If E is an expression of pointer type, then\n*E is an lvalue expression referring to the object or function to which E points. As another example,\nthe result of calling a function whose return type is an lvalue reference is an lvalue. —end example ]\n— An xvalue (an “eXpiring” value) also refers to an object, usually near the end of its lifetime (so that its\nresources may be moved, for example). An xvalue is the result of certain kinds of expressions involving\nrvalue references (8.3.2). [ Example: The result of calling a function whose return type is an rvalue\nreference is an xvalue. —end example ]\n— A glvalue (“generalized” lvalue) is an lvalue or an xvalue.\n— An rvalue (so called, historically, because rvalues could appear on the right-hand side of an assignment\nexpressions) is an xvalue, a temporary object (12.2) or subobject thereof, or a value that is not\nassociated with an object.\n— A prvalue (“pure” rvalue) is an rvalue that is not an xvalue. [ Example: The result of calling a function\nwhose return type is not a reference is a prvalue. The value of a literal such as 12, 7.3e5, or true is\nalso a prvalue. —end example ]\n")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("ul",[a("li",[this._v("从官方定义中可以知道，总的类别上其实还是glvalue(也就是原来的lvalue)和rvalue两大块。而在glvalue中非即将被销毁(我的理解是非暂时变量)的部分为lvalue，就比如一些求值结果为左值的运算符和运算对象构成的表达式(比如，定义中的*E，以及&i,a[index]等)，以及返回值类型为前者的函数(比如int & foo())。而prvalue最直接的例子是纯数字，除掉prvalue部分的rvalue即为xvalue(比如返回值类型为prvalue的函数int foo())。")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference","aria-hidden":"true"}},[this._v("#")]),this._v(" Reference")])}],!1,null,null,null);a.default=n.exports}}]);