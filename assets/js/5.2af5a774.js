(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{176:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),r("p",[e._v("原因大概是因为，数组名在绝大多数情况下会被隐式转换成指向数组首个元素的指针，而如果存储引用的数组合法的话，也就意味着存在指向引用的指针，而引用只是对象的别名，并没有大小，这也就导致指针其实并不能指向引用，而是只能指向引用所绑定的对象，另外指向引用的指针也无法像其他类型的指针一样进行指针的算术运算。因此存储引用的数组是非法的。")]),e._v(" "),e._m(8),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.open-std.org/JTC1/SC22/WG21/docs/papers/2010/n3092.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("FCD(n3092)"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://stackoverflow.com/questions/1164266/why-are-arrays-of-references-illegal/33850870",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why are arrays of references illegal?"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://stackoverflow.com/questions/5460562/why-it-is-impossible-to-create-an-array-of-references-in-c",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why it is impossible to create an array of references in c++?"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.codeproject.com/Questions/203511/Why-array-of-references-not-allowed-in-C",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why array of references not allowed in C++"),r("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"函数形参的一些注意点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数形参的一些注意点","aria-hidden":"true"}},[this._v("#")]),this._v(" 函数形参的一些注意点")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"参数传递"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数传递","aria-hidden":"true"}},[this._v("#")]),this._v(" 参数传递")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("参数传递分为值传递和引用传递，其中值传递分为以变量形参和指针形参，值传递均是通过拷贝实参的方式，来对形参进行初始化，而指针形参之所以能改变函数外变量的值，是因为尽管指针的值是拷贝的，导致和变量形参一样无法修改指针本身的值，但指针可以通过解引用符间接访问指针所指的对象，从而达到修改指针所指对象值的目的。但引用传递并不产生拷贝，因此在大的类类型对象或者容器对象时为了避免拷贝带来的低效，可以采用引用形参避免拷贝，而且对于有的类类型(包括IO类型在内)根本就不支持拷贝操作时，也就只能采用引用形参。")]),this._v(" "),t("li",[this._v("对于引用形参需要特别注意的是，如果函数无需改变引用形参的值，最好将其声明为常量引用。常量引用除了能避免对引用对象的修改；由于并不能用常量、字符串字面值等对非常量引用初始化，而可以对常量引用初始化的原因，常量引用还能接受更多的实参类型。")]),this._v(" "),t("li",[this._v("因此，相比于C语言中常常使用指针类型的形参访问函数外部的对象，C++更建议使用引用类型的形参替代指针。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"数组引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组引用","aria-hidden":"true"}},[this._v("#")]),this._v(" 数组引用")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("对于数组和引用,如下声明是非法的")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("int i = 0, j = 0;\nint &arr[] = { i, j };\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("在VS2017 community的默认编译器及默认设置下，会产生"),t("code",[this._v("array of reference is not allowed")]),this._v("的报错。在google上搜索该错误后发现，在C++11标准草稿n3092的8.3.2/5中写道")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("There shall be no references to references, no arrays of references,and no pointers to references.\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference","aria-hidden":"true"}},[this._v("#")]),this._v(" Reference")])}],!1,null,null,null);t.default=a.exports}}]);