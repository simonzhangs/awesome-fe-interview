(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{373:function(n,s,a){"use strict";a.r(s);var r=a(3),e=Object(r.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("// 冒泡排序\n//时间复杂度（平均）：O（n^2）\n//时间复杂度（最坏）：O（n^2）\n//时间复杂度（最好）：O（n）\n//空间复杂度（）：O（1）\n//稳定性：稳定")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("function bubbleSort(arr) {\n    const len = arr.length;\n    for(let i=0;i<len;i++){\n        let flag = false;\n        for(let j=0;j<len-1;j++){\n            if(arr[j] > arr[j+1]) {\n                [arr[j], arr[j+1]] = [arr[j+1],arr[j]];\n                flag = true;\n            }\n        }\n        if(flag == false) return arr;\n    }\n    return arr;\n}\n\nlet arr = [6,5,3,2,22,56];\nconsole.log(bubbleSort(arr))\n\n\n\nfunction bubbleSort1(arr) {\n    const len = arr.length;\n    for(let i=0;i<len;i++){\n        let flag = false;\n        for(let j=0;j<len-1;j++){\n            if(arr[j] > arr[j+1]) {\n                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];\n                flag = true;\n            }\n            if(flag = false) return arr;\n        }\n    }\n    return arr;\n}\n\nconsole.log(bubbleSort1(arr))\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);