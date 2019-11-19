function one() {
    var LEssTime = document.querySelectorAll("#LESStime div.c div");
    var CSS1 = [
        ["Print media styles", "Typography", "Code", "Grid system", "Tables", "Forms", "Buttons", "Responsive utilities"],
        ["印刷媒体样式", "版式", "码", "网格系统", "桌子", "形式", "纽扣", "响应式实用程序"]
    ];
    var component1 = [
        [" Glyphicons",
            "Button groups",
            "Input groups",
            "Navs",
            "Navbar",
            "Breadcrumbs",
            "Pagination",
            "Pager",
            "Labels",
            "Badges",
            "Jumbotron",
            "Thumbnails",
            "Alerts",
            "Progress bars",
            "Media items",
            "List groups",
            "Panels",
            "Responsive embed",
            "Wells",
            "Close icon"
        ],
        [
            "雕ly",
            "按钮组",
            "输入组",
            "资产净值",
            "导航栏",
            "面包屑",
            "分页",
            "传呼机",
            "标签",
            "徽章",
            "巨无霸",
            "缩图",
            "快讯",
            "进度条",
            "媒体项目",
            "清单群组",
            "面板",
            "响应式嵌入",
            "韦尔斯",
            "关闭图示"
        ]
    ];
    var JavaScriptAssembly = [
        [
            "Component animations(for JS)   (includes Collapse)",
            "Dropdown",
            "Tooltip",
            "Popover",
            "Modal",
            "Carousel",
        ],
        [
            "组件动画（用于JS） （包括折叠）",
            "落下",
            "工具提示",
            "弹窗",
            "资本金",
            "轮播"
        ]
    ];
    Css(CSS1, LEssTime[0]);
    Css(component1, LEssTime[1]);
    Css(JavaScriptAssembly, LEssTime[2]);


    var btnLes = document.querySelector(".a button");
    var btnLes1 = document.querySelectorAll(".c input");
    btnLes.onclick = function () {
        for (let n = 0; n < btnLes1.length; n++) {
            console.log(btnLes1[n].getAttribute("checked"));
            if (btnLes1[n].getAttribute("checked")) {
                btnLes1[n].removeAttribute("checked");
            } else {
                btnLes1[n].setAttribute("checked", "true");
            }
        }
    }
    var LEssTime1 = document.querySelectorAll("#LESStime1 div.cc div");
    var LinkedTo = [
        ["Alert dismissal", "Advanced buttons", "Carousel functionality", "Dropdowns", "Modals", "Tooltips", "Popovers(requires Tooltips)", "Togglable tabs"],
        ["警报解除", "进阶按钮", "轮播功能", "下拉菜单", "模态", "工具提示", "弹出窗口（需要工具提示）", "可切换的标签"]
    ];
    var Magic = [
        [
            "Affix",
            "Collapse",
            "Scrollspy",
            "Transitions(required for any kind of animation)"
        ],
        [
            "词缀",
            "坍方",
            "滚动式",
            "过渡（任何类型的动画都需要）"
        ]
    ];
    Css(LinkedTo, LEssTime1[0]);
    Css(Magic, LEssTime1[1]);
    var LEssTime2 = document.querySelector("#LESStime2 div.color1");
    var LEssTime3 = document.querySelector("#LESStime2 div.Scaffolding");
    var gray = [
        [
            "@gray-base",
            " @gray-darker",
            "@gray-dark",
            "@gray",
            "@gray-light",
            "@gray-lighter",
            "@brand-primary",
            "@brand-success",
            "@brand-info",
            "@brand-warning",
            "@brand-danger"
        ],
        [
            "#000",
            "lighten(@gray-base, 13.5%)",
            "lighten(@gray-base, 20%)",
            "lighten(@gray-base, 33.5%)",
            "lighten(@gray-base, 46.7%)",
            "lighten(@gray-base, 93.5%)",
            "darken(#428bca, 6.5%)",
            "#5cb85c",
            "#5bc0de",
            "#f0ad4e",
            "#d9534f"
        ]
    ];
    var Scaffoldin = [
        [
            "@body-bg",
            "@text-color",
            "@link-color",
            "@link-hover-color",
            "@link-hover-decoration"
        ],
        [
            "#fff",
            "@gray-dark",
            "@brand-primary",
            "darken(@link-color, 15%)",
            "underline"
        ],
        [
            "Background color for <body>.",
            "Global text color on <body>.",
            "Global textual link color.",
            "Link hover color set via darken() function.",
            "Link hover decoration."
        ]
    ];
    LEssvariables(gray[0], gray[1], LEssTime2);
    var icon1 = [
        [
            "@icon-font-path",
            "@icon-font-name",
            "@icon-font-svg-id"
        ],
        [
            "'../fonts/'",
            "'glyphicons - halflings - regular'",
            "'glyphicons_halflingsregular'"
        ],
        [
            "Load fonts from this directory.",
            "File name for all font files.",
            "Element ID within SVG icon file."
        ]
    ];
    var icon1Lang = [
        [
            "@图标字体路径",
            "@图标字体名称",
            "@图标字体SVG ID",
        ],
        ["从此目录加载字体。",
            "所有字体文件的文件名。",
            "SVG图标文件中的元素ID。"
        ]
    ];
    var Components1 = [
        [
            "@padding-base-vertical",
            "@padding-base-horizontal",
            "@padding-large-vertical",
            "@padding-large-horizontal",
            "@padding-small-vertical",
            "@padding-small-horizontal",
            "@padding-xs-vertical",
            "@padding-xs-horizontal",
            "@line-height-large",
            "@line-height-small",
            "@border-radius-base",
            "@border-radius-large",
            "@border-radius-small",
            "@component-active-color",
            "@component-active-bg",
            "@caret-width-base",
            "@caret-width-large"
        ],
        [
            "6px",
            "12px",
            "10px",
            "16px",
            "5px",
            "10px",
            "1px",
            "5px",
            "1.3333333",
            "1.5",
            "4px",
            "6px",
            "3px",
            "#fff",
            "@brand-primary",
            "4px",
            "5px"
        ]
    ];
    var Components2 = [
        [
            "垂直填充基",
            "水平填充基",
            "大垂直填充",
            "大水平填充",
            "小垂直填充",
            "小水平填充",
            "垂直填充X",
            "水平填充X",
            "线条高度大",
            "线条高度小",
            "边界半径基",
            "边界半径大",
            "边界半径小",
            "组件活动颜色",
            "组件活动BG",
            "插入符号宽度基",
            "插入符号宽度大"
        ]
    ];
    var ico = document.querySelector("#LESStime2  div.Lange");
    var i1 = document.querySelector("#LESStime2  div.Components");
    Iconography(icon1, icon1Lang, ico);
    Iconography(Components1, Components2, i1);
    function Iconography(a, b, c) {
        var lang = [
            [
                "活动项的全局颜色（例如，导航或下拉菜单）。",
                "活动项目（例如，导航或下拉菜单）的全局背景色。",
                "border用于生成表示下拉列表的插入符号的的宽度。",
                "对于较大的组件，小车的大小会略有增加。"
            ],
            [
                "Global color for active items (e.g., navs or dropdowns).",
                "Global background color for active items (e.g., navs or dropdowns).",
                "Carets increase slightly in size for larger components."
            ]
        ];
        for (let s = 0; s < a[0].length; s++) {
            var div = document.createElement("div");
            div.setAttribute("class", "col-md-4");
            var label = document.createElement("label");
            label.innerHTML = a[0][s];
            label.setAttribute("for", "");
            label.setAttribute("title", b[0][s]);
            var ipt = document.createElement("input");
            ipt.setAttribute("type", "text");
            ipt.setAttribute("value", a[1][s]);
            ipt.setAttribute("class", "form-control"); label.appendChild(ipt);
            if (a[0].length > 3) {
                if (s >= a[0].length - 4) {
                    var p = document.createElement("p");
                    p.innerHTML = lang[1][(s - 1) - (a[0].length - 5)];
                    p.setAttribute("title", lang[0][(s - 1) - (a[0].length - 5)]);
                    if ((s - 1) - (a[0].length - 5) == 2) {
                        var code1 = document.createElement("code");
                        p.innerHTML = "Width of the ";
                        code1.innerHTML = "body";
                        p.appendChild(code1);
                        p.innerHTML += "for generating carets that indicate dropdowns.";
                    }
                    if ((s - 1) - (a[0].length - 5) == 3) {
                        p.innerHTML = lang[1][lang[1].length - 1];
                        p.setAttribute("title", lang[0][lang[0].length - 1]);
                    }
                    label.appendChild(p);
                }
            }

            div.appendChild(label);
            c.appendChild(div);
        }
    }
    function LEssvariables(a, b, c) {
        for (let i = 0; i < a[0].length; i++) {
            var div = document.createElement("div");
            div.setAttribute("class", "col-md-4");
            var leb = document.createElement("label");
            leb.setAttribute("class", "form");
            leb.innerHTML = a[0];
            var ipt = document.createElement("input");
            ipt.setAttribute("type", "text");
            ipt.setAttribute("class", "form-control");
            ipt.setAttribute("value", b[i]);
            leb.appendChild(ipt);
            div.appendChild(leb);

            c.appendChild(div);
        }

    }
    function Css(a, b, c) {
        for (let s = 0; s < a[0].length; s++) {
            var le = document.createElement("label");
            le.innerHTML = a[0][s];
            le.setAttribute("title", a[1][s]);
            var inp = document.createElement("input");
            inp.setAttribute("type", "checkbox");
            inp.setAttribute("checked", "true");
            inp.setAttribute("class", "pull-left");
            var div = document.createElement("div");
            le.appendChild(inp);
            div.appendChild(le);
            b.appendChild(div);
        }
    }
    var tab = document.querySelector("#LESStime2 .tabB");
    var Tables1 = [
        ["@table-cell-padding",
            "@table-condensed-cell-padding",
            "@table-bg",
            "@table-bg-accent",
            "@table-bg-hover",
            "@table-bg-active",
            "@table-border-color"],
        [
            "8px",
            "5px",
            "transparent",
            "#f9f9f9",
            "#f5f5f5",
            "@table-bg-hover",
            "#ddd"
        ],
        [
            "可用单元格填充",
            "表格压缩单元格填充",
            "表格背景",
            "表背景重音",
            "表背景悬停",
            "表背景激活",
            "表背景边框颜色"
        ]
    ];
    ta(Tables1, tab);
    function ta(a, b) {
        for (let s = 0; s < a[0].length; s++) {
            var le = document.createElement("label");
            le.innerHTML = a[0][s];
            le.setAttribute("title", a[2][s]);
            var inp = document.createElement("input");
            inp.setAttribute("type", "text");
            inp.setAttribute("value", a[1][s]);
            inp.setAttribute("class", "form-control");
            var div = document.createElement("div");
            div.setAttribute("class", "col-md-4");
            var ip = document.createElement("p");
            ip.innerHTML = "Padding for ";
            var ip1 = document.createElement("code");
            var ip2 = document.createElement("code");
            ip1.innerHTML = "th";
            ip.innerHTML += "s and ";
            ip2.innerHTML = "td";
            ip.innerHTML += "s.";
            if (s == 1) {
                ip.innerHTML = "Padding for cells in";
                ip1.innerHTML = ".table-condensed.";
                ip.appendChild(ip1);
            } else if (s == 2) {
                ip.innerHTML = "Default background color used for all tables.";
            } else if (s == 3) {
                ip.innerHTML = "Background color used for";
                ip1.innerHTML = ".table - striped.";
                ip.appendChild(ip1);
            } else if (s == 4) {
                ip.innerHTML = "Background color used for"
                ip1.innerHTML = ".table - hover.";
                ip.appendChild(ip1);
            } else if (s == 5) {
                ip.innerHTML = "";
            } else if (s == 6) {
                ip.innerHTML = "Border color for table and cell borders.";
            } else {
                ip.appendChild(ip2);
            }
            le.appendChild(inp);
            le.appendChild(ip);
            div.appendChild(le);
            b.appendChild(div);
        }
    }
    var buttons = document.querySelector("#LESStime2 .but");
    var buttons1 = [
        ["@btn-font-weight", "normal"],
        ["@btn-default-color", "#333"],
        ["@btn-default-bg", "#fff"],
        ["@btn-default-border", "#ccc"],
        ["@btn-primary-color", "#fff"],
        ["@btn-primary-bg", "@brand-primary"],
        ["@btn-primary-border", "darken(@btn-primary-bg, 5%)"],
        ["@btn-success-color", "#fff"],
        ["@btn-success-bg", "@brand-success"],
        ["@btn-success-border", "darken(@btn-success-bg, 5%)"],
        ["@btn-info-color", "#fff"],
        ["@btn-info-bg", "@brand-info"],
        ["@btn-info-border", "darken(@btn-info-bg, 5%)"],
        ["@btn-warning-color", "#fff"],
        ["@btn-warning-bg", "@brand-warning"],
        ["@btn-warning-border", "darken(@btn-warning-bg, 5%)"],
        ["@btn-danger-color", "#fff"],
        ["@btn-danger-bg", "@brand-danger"],
        ["@btn-danger-border", "darken(@btn-danger-bg, 5%)"],
        ["@btn-link-disabled-color", "@gray-light"],
        ["@btn-border-radius-base", "@border-radius-base"],
        ["@btn-border-radius-large", "@border-radius-large"],
        ["@btn-border-radius-small", "@border-radius-small"]
    ];
    but(buttons1, buttons);
    function but(a, b, c, d) {
        for (let s = 0; s < a.length; s++) {
            var le = document.createElement("label");
            le.innerHTML = a[s][0];
            var inp = document.createElement("input");
            inp.setAttribute("type", "text");
            inp.setAttribute("value", a[s][1]);
            inp.setAttribute("class", "form-control");
            var div = document.createElement("div");
            div.setAttribute("class", "col-md-4");
            le.appendChild(inp);
            div.appendChild(le);
            b.appendChild(div);
        }
    }
    // var forms = document.querySelector("#LESStime2 .forms");
    var forms1 = [
        ['@input-bg', '#fff'],
        ['@input-bg-disabled', '@gray-lighter'],
        ['@input-color', '@gray'],
        ['@input-border', '#ccc'],
        ['@input-border-radius', '@border-radius-base'],
        ['@input-border-radius-large', '@border-radius-large'],
        ["@input-border-radius-small", "@border-radius-small"],
        ["@input-border-focus", "#66afe9"],
        ['@input-color-placeholder', "#999"],
        ['@input-height-base', '(@line-height-computed + (@padding-base-vertical * 2) + 2)'],
        ['@input-height-large', '(ceil(@font-size-large * @line-height-large) + (@padding-large-vertical * 2) + 2)'],
        ['@input-height-small', '(floor(@font-size-small * @line-height-small) + (@padding-small-vertical * 2) + 2)'],
        ['@form-group-margin-bottom', '15px'],
        ['@legend-color', '@gray-dark'],
        ['@legend-border-color', "#e5e5e5"],
        ['@input-group-addon-bg', '@gray-lighter'],
        ['@input-group-addon-border-color', '@input-border'],
        ['@cursor-disabled', 'not-allowed', 'Disabled cursor for form controls and buttons.']
    ];
    var Dropdowns = document.querySelector("#LESStime2 .Dropdowns"); var Dropdowns1 = [
        ['@dropdown-bg', "#fff"],
        ['@dropdown-border', 'rgba(0,0,0,.15)'],
        ['@dropdown-fallback-border', '#ccc'],
        ['@dropdown-divider-bg', '#e5e5e5'],
        ['@dropdown-link-color', '@gray-dark'],
        ['@dropdown-link-hover-color', 'darken(@gray-dark, 5%)'],
        ['@dropdown-link-hover-bg', '#f5f5f5'],
        ['@dropdown-link-active-color', '@component-active-color'],
        ['@dropdown-link-active-bg', '@component-active-bg'],
        ['@dropdown-link-disabled-color', '@gray-light'],
        ['@dropdown-header-color', '@gray-light'],
        ['@dropdown-caret-color', '#000']
    ];
    // var Media = document.querySelector("#LESStime2 .Media");
    var Medi1 = [
        ['@screen-xs', '480px'],
        ['@screen-xs-min', '@screen-xs'],
        ['@screen-phone', '@screen-xs-min'],
        ['@screen-sm', '768px'],
        ['@screen-sm-min', '@screen-sm'],
        ['@screen-tablet', '@screen-sm-min'],
        ['@screen-md', '992px'],
        ['@screen-md-min', '@screen-md'],
        ['@screen-desktop', '@screen-md-min'],
        ['@screen-lg', '1200px'],
        ['@screen-lg-min', '@screen-lg'],
        ['@screen-lg-desktop', '@screen-lg-min'],
        ['@screen-xs-max', '(@screen-sm-min - 1)'],
        ['@screen-sm-max', '(@screen-md-min - 1)'],
        ['@screen-md-max', '(@screen-lg-min - 1)']
    ];
    // var Grid = document.querySelector("#LESStime2 .Grid");
    var Grid1 = [
        ["@grid-columns", '12', 'Number of columns in the grid.'],
        ['@grid-gutter-width', '30px', 'Padding between columns. Gets divided in half for the left and right.'],
        ['@grid-float-breakpoint', '@screen-sm-min', 'Point at which the navbar becomes uncollapsed.'],
        ['@grid-float-breakpoint-max', '(@grid-float-breakpoint - 1)', 'Point at which the navbar begins collapsing.']
    ];
    // var Grid = document.querySelector("#LESStime2 .Container");
    var Container1 = [
        ["@container-tablet", '(720px + @grid-gutter-width)'],
        ['@container-sm', '@container-tablet'],
        ['@container-desktop', '(940px + @grid-gutter - width)'],
        ['@container-md', '@container-desktop'],
        ['@container-large-desktop', '(1140px + @grid-gutter-width)'],
        ['@container-lg', '@container-large-desktop']
    ];
    // var Navbar = document.querySelector("#LESStime2 .Navbar");
    var Navbar1 = [
        ['@navbar-height', '50px'],
        ['@navbar-margin-bottom', '@line-height-computed'],
        ['@navbar-border-radius', '@border-radius-base'],
        ['@navbar-padding-horizontal', 'floor((@grid-gutter-width / 2))'],
        ['@navbar-padding-vertical', '((@navbar-height - @line-height-computed) / 2)'],
        ['@navbar-collapse-max-height', '340px'],
        ['@navbar-default-color', '#777'],
        ['@navbar-default-bg', '#f8f8f8'],
        ['@navbar-default-border', 'darken(@navbar-default-bg, 6.5%)'],
        ['@navbar-default-link-color', '#777'],
        ['@navbar-default-link-hover-color', '#333'],
        ['@navbar-default-link-hover-bg', 'transparent'],
        ['@navbar-default-link-active-color', '#555'],
        ['@navbar-default-link-active-bg', 'darken(@navbar-default-bg, 6.5%)'],
        ['@navbar-default-link-disabled-color', '#ccc'],
        ['@navbar-default-link-disabled-bg', 'transparent'],
        ['@navbar-default-brand-color', '@navbar-default-link-color'],
        ['@navbar-default-brand-hover-color', 'darken(@navbar-default-brand-color, 10%)'],
        ['@navbar-default-brand-hover-bg', 'transparent'],
        ['@navbar-default-toggle-hover-bg', '#ddd'],
        ['@navbar-default-toggle-icon-bar-bg', '#888'],
        ['@navbar-default-toggle-border-color', '#ddd']
    ];
    // var Inverted = document.querySelector("#LESStime2 .Inverted ");
    var Inverted1 = [
        ['@navbar-inverse-color', 'lighten(@gray-light, 15%)'],
        ['@navbar-inverse-bg', '#222'],
        ['@navbar-inverse-border', 'darken(@navbar-inverse-bg, 10%)'],
        ['@navbar-inverse-link-color', 'lighten(@gray-light, 15%)'],
        ['@navbar-inverse-link-hover-color', '#fff'],
        ['@navbar-inverse-link-hover-bg', 'transparent'],
        ['@navbar-inverse-link-active-color', '@navbar-inverse-link-hover-color'],
        ['@navbar-inverse-link-active-bg', 'darken(@navbar-inverse-bg, 10%)'],
        ['@navbar-inverse-link-disabled-color', '#444'],
        ['@navbar-inverse-link-disabled-bg', 'transparent'],
        ['@navbar-inverse-brand-color', '@navbar-inverse-link-color'],
        ['@navbar-inverse-brand-hover-color', '#fff'],
        ['@navbar-inverse-brand-hover-bg', 'transparent'],
        ['@navbar-inverse-toggle-hover-bg', '#333'],
        ['@navbar-inverse-toggle-icon-bar-bg', '#fff'],
        ['@navbar-inverse-toggle-border-color', '#333']
    ];
} one();
