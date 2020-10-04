require.config({
	urlArgs: "v=1.48",
	baseUrl: "js/lib"
});

require(['jquery'], function ($) {
	/**
	 * 存储获取数据函数
	 * @function get 存储数据
	 * @function set 获取数据
	 */
	var store = {
		/**
		 * 存储名称为key的val数据
		 * @param {String} key 键值
		 * @param {String} val 数据
		 */
		set: function (key, val) {
			if (!val) {
				return;
			}
			try {
				var json = JSON.stringify(val);
				if (typeof JSON.parse(json) === "object") { // 验证一下是否为JSON字符串防止保存错误
					localStorage.setItem(key, json);
				}
			} catch (e) {
				return false;
			}
		},
		/**
		 * 获取名称为key的数据
		 * @param {String} key 键值
		 */
		get: function (key) {
			return JSON.parse(localStorage.getItem(key));
		},
		has: function (key) {
			if (localStorage.getItem(key)) {
				return true;
			} else {
				return false;
			}
		},
		del: function (key) {
			localStorage.removeItem(key);
		}
	};

	// 存储内容容器
	var Storage = [];

	/**
	 * 加载存储内容
	 */
	var loadStorage = {
		/**
		 * 初始化存储内容
		 */
		initBookMark: function () {
			Storage.bookMark = [{
				name: "精选",
				url: "choice()",
				icon: "icon/discover.png"
			}, {
				name: "微博",
				url: "https://weibo.com",
				icon: "icon/weibo.png"
			}, {
				name: "Bilibili",
				url: "https://m.bilibili.com",
				icon: "icon/bilibilibog.png"
			}, {
				name: "1111",
				url: "https://www.baidu.com",
				icon: "icon/6v.jpg"
			}, {
				name: "2222",
				url: "https://www.zhihu.com",
				icon: "icon/zhihu.png"	
			}, {
				name: "淘宝",
				url: "https://m.taobao.com",
				icon: "icon/taobao.png"
			}, {
				name: "贴吧",
				url: "https://tieba.baidu.com",
				icon: "icon/tieba.png"
			}, {
				name: "IT之家",
				url: "https://m.ithome.com",
				icon: "icon/ithome.png"
			}, {
				name: "网易",
				url: "https://3g.163.com",
				icon: "icon/netease.png"
			}];
			store.set("bookMark", Storage.bookMark);
		},
		initSetData: function () {
			Storage.setData = { engines: "quark", bookcolor: "black", searchHistory: "1" };
			store.set("setData", Storage.setData);
		},
		/**
		 * 加载设置数据 壁纸|LOGO|书签颜色|夜间模式
		 */
		applyItem: function () {
			if (store.has("setData")) {
				Storage.setData = store.get("setData");
			} else {
				this.initSetData();
			}
			if (store.has("bookMark")) {
				Storage.bookMark = store.get("bookMark");
			} else {
				this.initBookMark();
			}
			// 加载LOGO
			if (Storage.setData.logo) {
				$(".logo").html('<img src="' + Storage.setData.logo + '" />');
			} else {
				$(".logo").html('<svg t="1574658155783" class="icon" viewBox="0 0 3027 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2654" width="100%"><path d="M1288.347826 525.133913c0 142.135652-111.193043 246.873043-247.652174 246.873044s-247.652174-104.737391-247.652174-246.873044C793.043478 381.996522 904.236522 278.26087 1040.695652 278.26087s247.652174 103.735652 247.652174 246.873043z m-108.410435 0c0-88.82087-64.445217-149.593043-139.241739-149.593043S901.453913 436.313043 901.453913 525.133913c0 87.930435 64.445217 149.593043 139.241739 149.593044s139.241739-61.773913 139.241739-149.593044z" fill="#EA4335" p-id="2655"></path><path d="M1822.608696 525.133913c0 142.135652-111.193043 246.873043-247.652174 246.873044s-247.652174-104.737391-247.652174-246.873044c0-143.026087 111.193043-246.873043 247.652174-246.873043s247.652174 103.735652 247.652174 246.873043z m-108.410435 0c0-88.82087-64.445217-149.593043-139.241739-149.593043s-139.241739 60.772174-139.241739 149.593043c0 87.930435 64.445217 149.593043 139.241739 149.593044s139.241739-61.773913 139.241739-149.593044z" fill="#FBBC05" p-id="2656"></path><path d="M2334.608696 293.175652v443.213913c0 182.316522-107.52 256.77913-234.629566 256.779131-119.652174 0-191.666087-80.027826-218.824347-145.474783l94.386087-39.290435c16.806957 40.18087 57.989565 87.596522 124.326956 87.596522 81.363478 0 131.784348-50.198261 131.784348-144.695652v-35.506087h-3.784348c-24.264348 29.94087-71.012174 56.097391-130.003478 56.097391-123.436522 0-236.521739-107.52-236.521739-245.871304 0-139.353043 113.085217-247.763478 236.521739-247.763478 58.88 0 105.627826 26.156522 130.003478 55.206956h3.784348v-40.180869h102.956522z m-95.276522 232.848696c0-86.928696-57.989565-150.483478-131.784348-150.483478-74.796522 0-137.46087 63.554783-137.460869 150.483478 0 86.038261 62.664348 148.702609 137.460869 148.702609 73.794783 0 131.784348-62.664348 131.784348-148.702609z" fill="#4285F4" p-id="2657"></path><path d="M2504.347826 33.391304v723.478261h-105.73913V33.391304h105.73913z" fill="#34A853" p-id="2658"></path><path d="M2916.396522 606.386087l84.146087 56.097391c-27.158261 40.18087-92.605217 109.412174-205.690435 109.412174-140.243478 0-244.98087-108.410435-244.98087-246.873043 0-146.810435 105.627826-246.873043 232.848696-246.873044 128.111304 0 190.775652 101.954783 211.255652 157.050435l11.241739 28.048696-330.017391 136.681739c25.266087 49.530435 64.556522 74.796522 119.652174 74.796522 55.206957 0 93.495652-27.158261 121.544348-68.34087z m-259.005218-88.82087l220.605218-91.603478c-12.132174-30.831304-48.64-52.313043-91.603479-52.313043-55.095652 0-131.784348 48.64-129.001739 143.916521z" fill="#EA4335" p-id="2659"></path><path d="M392.793043 460.911304V356.173913H745.73913c3.450435 18.253913 5.231304 39.846957 5.231305 63.22087 0 78.58087-21.481739 175.749565-90.713044 244.980869-67.33913 70.121739-153.377391 107.52-267.353043 107.52C181.648696 771.895652 4.006957 599.81913 4.006957 388.563478 4.006957 177.307826 181.648696 5.231304 392.904348 5.231304c116.869565 0 200.125217 45.857391 262.678261 105.627826l-73.906087 73.906087c-44.855652-42.073043-105.627826-74.796522-188.883479-74.796521-154.267826 0-274.921739 124.326957-274.921739 278.594782 0 154.267826 120.653913 278.594783 274.921739 278.594783 100.062609 0 157.050435-40.18087 193.558261-76.688696 29.606957-29.606957 49.085217-71.902609 56.765218-129.669565l-250.323479 0.111304z" fill="#4285F4" p-id="2660"></path></svg>');
			}
			// 夜间模式 和 壁纸
			var nightMode = {
				on: function () {
					$("body").removeClass('theme-black theme-white').addClass('theme-white');
					$("body").css("background", "");
					$("#nightCss").removeAttr('disabled');
				},
				off: function () {
					if (Storage.setData.wallpaper) {
						$("body").css("background", "url(" + Storage.setData.wallpaper + ") center center / cover no-repeat");
					} else {
						$("body").css("background", "");
					}
					$("body").removeClass('theme-black theme-white').addClass('theme-' + Storage.setData.bookcolor);
					$("#nightCss").attr('disabled', true);
				}
			};
			if (Storage.setData.nightMode === "1") {
				nightMode.on();
			} else {
				nightMode.off();
			}
			// 删除掉VIA浏览器夜间模式的暗色支持
			$("head").on("DOMNodeInserted DOMNodeRemoved", function (evt) {
				if (evt.target.id === "via_inject_css_night") {
					if (evt.type === "DOMNodeInserted") {
						$("#via_inject_css_night").html("");
						nightMode.on();
					} else if (evt.type === "DOMNodeRemoved") {
						nightMode.off();
					}
				}
			});
			$("#via_inject_css_night").html("");
		}
	};
	loadStorage.applyItem();

	/**
	 * DOM长按事件
	 */
	$.fn.longPress = function (fn) {
		var timeout = void 0,
			$this = this,
			startPos,
			movePos,
			endPos;
		for (var i = $this.length - 1; i > -1; i--) {
			$this[i].addEventListener("touchstart", function (e) {
				var touch = e.targetTouches[0];
				startPos = { x: touch.pageX, y: touch.pageY };
				timeout = setTimeout(function () {
					if ($this.attr("disabled") === undefined) {
						fn();
					}
				}, 700);
			}, { passive: true });
			$this[i].addEventListener("touchmove", function (e) {
				var touch = e.targetTouches[0];
				movePos = { x: touch.pageX - startPos.x, y: touch.pageY - startPos.y };
				(Math.abs(movePos.x) > 10 || Math.abs(movePos.y) > 10) && clearTimeout(timeout);
			}, { passive: true });
			$this[i].addEventListener("touchend", function () {
				clearTimeout(timeout);
			}, { passive: true });
		}
	};

	/**
	 * 文件上传函数
	 * @function callback 回调函数qu
	 */
	var uploadFile = function (callback) {
		var input = $('<input type="file">');
		input.bind("change", callback);
		input.click();
	}

	/**
	 * 首页书签模块
	 * @function init 初始化
	 * @function bind 绑定事件
	 * @function del 删除书签
	 * @function add 添加书签
	 */
	var bookMark = {
		init: function () {
			var _ = this;
			_.$bookmark = $('.bookmark');
			var html = '';
			for (var i = 0; i < Storage.bookMark.length; i++) {
				html += '<div class="list" data-url="' + Storage.bookMark[i].url + '"><div class="img" style="background-image:url(' + Storage.bookMark[i].icon + ')"></div><div class="text">' + Storage.bookMark[i].name + "</div></div>";
			}
			_.$bookmark.html(html);
			_.bind();
		},
		bind: function () {
			var _ = this;
			// 绑定书签长按事件
			_.$bookmark.longPress(function () {
				if (_.status !== "editing") {
					_.status = "editing";
					$('.addbook').remove();
					require(['jquery-sortable'], function () {
						_.$bookmark.sortable({
							animation: 150,
							fallbackTolerance: 3,
							touchStartThreshold: 3,
							ghostClass: "ghost",
							filter: ".delbook",
							onEnd: function (evt) {
								var startID = evt.oldIndex,
									endID = evt.newIndex;
								if (startID > endID) {
									Storage.bookMark.splice(endID, 0, Storage.bookMark[startID]);
									Storage.bookMark.splice(startID + 1, 1);
								} else {
									Storage.bookMark.splice(endID + 1, 0, Storage.bookMark[startID]);
									Storage.bookMark.splice(startID, 1);
								}
								store.set("bookMark", Storage.bookMark);
							}
						});
					})
					$(document).click(function () {
						$(document).unbind("click");
						$(".delbook").addClass("animation");
						$(".delbook").on('transitionend', function (evt) {
							if (evt.target !== this) {
								return;
							}
							$(".delbook").remove();
							_.$bookmark.sortable("destroy");
							_.status = "";
						});
					});
					var $list = _.$bookmark.find(".list");
					for (var i = $list.length; i > -1; i--) {
						$list.eq(i).find(".img").prepend('<div class="delbook"></div>');
					}
				}
			});
			_.$bookmark.on('click', function (evt) {
				if (evt.target !== this || _.status === 'editing' || $('.addbook').hasClass('animation') || Storage.bookMark.length >= 20) {
					return;
				}
				if ($('.addbook').length === 0) {
					_.$bookmark.append('<div class="list addbook"><div class="img"><svg viewBox="0 0 1024 1024"><path d="M736.1 480.2H543.8V287.9c0-17.6-14.4-32-32-32s-32 14.4-32 32v192.2H287.6c-17.6 0-32 14.4-32 32s14.4 32 32 32h192.2v192.2c0 17.6 14.4 32 32 32s32-14.4 32-32V544.2H736c17.6 0 32-14.4 32-32 0.1-17.6-14.3-32-31.9-32z" fill="#555"></path></svg></div></div>');
					$('.addbook').click(function () {
						$('.addbook').remove();
						// 取消书签编辑状态
						$(document).click();
						// 插入html
						$('#app').append('<div class="addbook-shade"><div class="addbook-from"><div class="addbook-title">添加书签</div><div class="addbook-content"><input type="text" class="addbook-input addbook-name" placeholder="名字" /><input type="text" class="addbook-input addbook-url" placeholder="网址" value="http://" /><div id="addbook-upload">点击选择图标</div></div><div class="addbook-btn"><a class="addbook-close">取消</a><a class="addbook-ok">确定</a></div></div></div>');
						//绑定事件
						$("#addbook-upload").click(function () {
							uploadFile(function () {
								var file = this.files[0];
								var reader = new FileReader();
								reader.onload = function () {
									$("#addbook-upload").html('<img src="' + this.result + '"></img><div>' + file.name + "</div>");
								};
								reader.readAsDataURL(file);
							});
						});
						$(".addbook-ok").click(function () {
							var name = $(".addbook-name").val(),
								url = $(".addbook-url").val(),
								icon = $("#addbook-upload img").attr("src");
							if (name.length && url.length) {
								if (!icon) {
									// 绘制文字图标
									var canvas = document.createElement("canvas");
									canvas.height = 100;
									canvas.width = 100;
									var context = canvas.getContext("2d");
									context.fillStyle = "#f5f5f5";
									context.arc(50, 50, 46, Math.PI * 2, 0, true);
									context.fill();
									context.fillStyle = "#222";
									context.font = "40px Arial";
									context.textAlign = "center";
									context.textBaseline = "middle";
									context.fillText(name.substr(0, 1), 50, 52);
									icon = canvas.toDataURL("image/png");
								}
								$(".addbook-close").click();
								bookMark.add(name, url, icon);
							}
						});
						$(".addbook-close").click(function () {
							$(".addbook-shade").css({ "animation": "fadeOut forwards .3s", "pointer-events": "none" });
							$(".addbook-from").css("animation", "down2 forwards .3s");
							setTimeout(function () {
								$(".addbook-shade").remove();
							}, 300);
						});
						$(".addbook-shade").click(function (evt) {
							if (evt.target === evt.currentTarget) {
								$(".addbook-close").click();
							}
						});
					})
				} else {
					$(".addbook").addClass("animation");
					setTimeout(function () {
						$(".addbook").remove();
					}, 400);
				}
			});
			_.$bookmark.on('click', '.list', function (evt) {
				evt.stopPropagation();
				var dom = $(evt.currentTarget);
				if (_.status !== "editing") {
					var url = dom.data("url");
					if (url) {
						switch (url) {
							case "choice()":
								choice();
								break;
							default:
								location.href = url;
						}
					}
				} else {
					if (evt.target.className === "delbook") {
						_.del(dom.index());
					}
				}
			});
		},
		del: function (index) {
			var _ = this;
			_.$bookmark.css("overflow", "visible");
			var dom = _.$bookmark.find('.list').eq(index);
			dom.css({ transform: "translateY(60px)", opacity: 0, transition: ".3s" });
			dom.on('transitionend', function (evt) {
				if (evt.target !== this) {
					return;
				}
				dom.remove();
				_.$bookmark.css("overflow", "hidden");
			});
			Storage.bookMark.splice(index, 1);
			store.set("bookMark", Storage.bookMark);
		},
		add: function (name, url, icon) {
			var _ = this;
			url = url.match(/:\/\//) ? url : "http://" + url;
			var i = Storage.bookMark.length - 1;
			var dom = $('<div class="list" data-url="' + url + '"><div class="img" style="background-image:url(' + icon + ')"></div><div class="text">' + name + '</div></div>');
			_.$bookmark.append(dom);
			dom.css({ marginTop: "60px", opacity: "0" }).animate({ marginTop: 0, opacity: 1 }, 300);
			Storage.bookMark.push({ name: name, url: url, icon: icon });
			store.set("bookMark", Storage.bookMark);
		}
	};
	// 初始化首页书签模块
	bookMark.init();

	/**
	 * 搜索历史模块
	 * @function init 初始化
	 * @function load 加载HTML
	 * @function bind 绑定事件
	 * @function add 添加历史
	 * @function empty 清空历史
	 */
	var searchHistory = {
		init: function () {
			var _ = this;
			_.$history = $('.history');
			var arr = store.get("history");
			if (arr === null) {
				arr = [];
			}
			Storage.history = arr.slice(0, 10);
			_.load();
			_.bind();
		},
		load: function () {
			var _ = this;
			var html = '';
			var l = Storage.history.length;
			for (var i = 0; i < l; i++) {
				html += '<li>' + Storage.history[i] + '</li>';
			}
			_.$history.find('.content').html(html);
			if (l >= 1) {
				$('.emptyHistory').show();
			} else {
				$('.emptyHistory').hide();
			}
		},
		bind: function () {
			var _ = this;
			// 监听touch事件，防止点击后弹出或收回软键盘
			$('.emptyHistory')[0].addEventListener("touchstart", function (e) {
				e.preventDefault();
			}, false);
			$('.emptyHistory')[0].addEventListener("touchend", function (e) {
				if ($('.emptyHistory').hasClass('animation')) {
					_.empty();
				} else {
					$('.emptyHistory').addClass('animation');
				}
			}, false);
			_.$history.click(function (evt) {
				if (evt.target.nodeName === "LI") {
					$('.search-input').val(evt.target.innerText).trigger("propertychange");
					$('.search-btn').click();
				}
			});
		},
		add: function (text) {
			if (Storage.setData.searchHistory === "1") {
				var _ = this;
				var pos = Storage.history.indexOf(text);
				if (pos !== -1) {
					Storage.history.splice(pos, 1);
				}
				Storage.history.unshift(text);
				_.load();
				store.set("history", Storage.history);
			}
		},
		empty: function () {
			var _ = this;
			Storage.history = [];
			_.load();
			store.set("history", Storage.history);
		}
	}
	// 初始化搜索历史模块
	searchHistory.init();

	/**
	 * 更改地址栏URL参数
	 * @param {string} param 参数
	 * @param {string} value 值
	 * @param {string} url 需要更改的URL,不设置此值会使用当前链接
	 */
	var changeParam = function (param, value, url) {
		url = url || location.href;
		var reg = new RegExp("(^|)" + param + "=([^&]*)(|$)");
		var tmp = param + "=" + value;
		return url.match(reg) ? url.replace(eval(reg), tmp) : url.match("[?]") ? url + "&" + tmp : url + "?" + tmp;
	};

	// 更改URL，去除后面的参数
	history.replaceState(null, document.title, location.origin + location.pathname);

	// 绑定主页虚假输入框点击事件
	$(".ornament-input-group").click(function () {
		$('body').css("pointer-events", "none");
		history.pushState(null, document.title, changeParam("page", "search"));
		$(".s-temp").focus();
		// 隐藏主页
		$(".ornament-input-group,.bookmark").addClass("animation");
		// 显示搜索页
		$(".page-search").show();
		setTimeout(function () {
			$(".page-search").on('transitionend', function (evt) {
				if (evt.target !== this) {
					return;
				}
				$(".page-search").off('transitionend');
				$(".search-input").val('').focus();
				$('body').css("pointer-events", "");
			}).addClass("animation");
			$(".history").show().addClass("animation");
			$(".input-bg").addClass("animation");
			$(".shortcut").addClass("animation");
		}, 1);
	});

	$(".page-search").click(function (evt) {
		if (evt.target === evt.currentTarget) {
			history.go(-1);
		}
	});

	// 返回按键被点击
	window.addEventListener("popstate", function (e) {
		if ($('.page-search').is(":visible")) {
			$('body').css("pointer-events", "none");
			history.replaceState(null, document.title, location.origin + location.pathname);
			//主页
			$(".ornament-input-group,.bookmark").removeClass("animation");
			//搜索页
			$(".history").removeClass("animation");
			$(".input-bg").removeClass("animation");
			$(".shortcut").removeClass("animation");
			$(".page-search").removeClass("animation");
			$(".page-search").on('transitionend', function (evt) {
				if (evt.target !== this) {
					return;
				}
				$(".page-search").off('transitionend');
				$(".page-search").hide();
				//搜索页内容初始化
				$(".suggestion").html("");
				$(".search-btn").html("取消");
				$(".shortcut1").show();
				$(".shortcut2,.shortcut3,.empty-input").hide();
				$(".search-input").val('');
				$('body').css("pointer-events", "");
				$('.emptyHistory').removeClass('animation');
			});
		}
	}, false);

	$(".suggestion").click(function (evt) {
		if (evt.target.nodeName === "SPAN") {
			$('.search-input').focus().val($(evt.target).parent().text()).trigger("propertychange");
			return;
		} else {
			searchText(evt.target.innerText);
		}

	});

	$(".search-input").on("input propertychange", function () {
		var _ = this;
		var wd = $(_).val();
		$(".shortcut1,.shortcut2,.shortcut3").hide();
		if (!wd) {
			$(".history").show();
			$(".empty-input").hide();
			$(".search-btn").html("取消");
			$(".shortcut1").show();
			$(".suggestion").hide().html('');
		} else {
			$(".history").hide();
			$(".empty-input").show();
			$(".search-btn").html(/[\w\-_]+(\.[\w\-_]+)?([0-9a-z_!~*'().&=+$%-]+:)?([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?.*\.(?:(?!(aac|ai|aif|apk|arj|asp|aspx|atom|avi|bak|bat|bin|bmp|cab|cda|cer|cfg|cfm|cgi|class|cpl|cpp|cs|css|csv|cur|dat|db|dbf|deb|dll|dmg|dmp|doc|drv|ejs|eot|eps|exe|flv|fnt|fon|gif|gz|htm|icns|ico|img|ini|iso|jad|jar|java|jpeg|jpg|js|json|jsp|key|lnk|log|mdb|mid|midi|mkv|mov|mpa|mpeg|mpg|msi|odf|odp|ods|odt|ogg|otf|part|pdf|php|pkg|pls|png|pps|ppt|pptx|psd|py|rar|rm|rpm|rss|rtf|sav|sql|svg|svgz|swf|swift|sys|tar|tex|tgz|tif|tmp|toast|ttf|txt|vb|vcd|vob|wav|wbmp|webm|webp|wks|wma|wmv|woff|wpd|wpl|wps|wsf|xhtml|xlr|xls|xml|zip)).)+/.test(wd) ? "进入" : "搜索");
			escape(wd).indexOf("%u") < 0 ? $(".shortcut2").show() : $(".shortcut3").show();
			$.ajax({
				url: "https://suggestion.baidu.com/su",
				type: "GET",
				dataType: "jsonp",
				data: { wd: wd, cb: "sug" },
				timeout: 5000,
				jsonpCallback: "sug",
				success: function (res) {
					if($(_).val() !== wd){
						return;
					}
					var data = res.s;
					var isStyle = $(".suggestion").html();
					var html = "";
					for (var i = data.length; i > 0; i--) {
						var style = "";
						if (isStyle === "") {
							style = "animation: fadeInDown both .5s " + (i - 1) * 0.05 + 's"';
						}
						html += '<li style="' + style + '"><div>' + data[i - 1].replace(wd, '<b>' + wd + '</b>') + "</div><span></span></li>";
					}
					$(".suggestion").show().html(html).scrollTop($(".suggestion")[0].scrollHeight);
				}
			});
			$.ajax({
				url: "https://quark.sm.cn/api/qs",
				type: "GET",
				dataType: "jsonp",
				data: { query: wd },
				timeout: 5000,
				success: function (res) {
					var data = res.data;
					var html = '<li>快搜:</li>';
					for (var i = 0, l = data.length; i < l; i++) {
						html += '<li>' + data[i] + '</li>';
					}
					$('.shortcut3').html(html);
				}
			});
		}
	});

	$(".empty-input").click(function () {
		$(".search-input").focus().val("").trigger("propertychange");
	});

	$(".shortcut1,.shortcut2").click(function (evt) {
		$(".search-input").focus().val($(".search-input").val() + evt.target.innerText).trigger("propertychange");
	});

	$(".shortcut3").click(function (evt) {
		if (evt.target.nodeName === "LI") {
			var text = evt.target.innerText;
			var data = {
				百科: "https://baike.baidu.com/item/",
				视频: "https://www.soku.com/m/y/video?q=",
				豆瓣: "https://m.douban.com/search/?query=",
				新闻: "https://news.baidu.com/news#/search/",
				图片: "https://cn.bing.com/images/search?q=",
				微博: "https://m.weibo.cn/search?containerid=100103type=1&q=",
				音乐: "http://m.music.migu.cn/v3/search?keyword=",
				知乎: "https://www.zhihu.com/search?q=",
				小说: "https://m.qidian.com/search?kw=",
				旅游: "https://h5.m.taobao.com/trip/rx-search/list/index.html?keyword=",
				地图: "https://m.amap.com/search/mapview/keywords=",
				电视剧: "https://m.v.qq.com/search.html?keyWord=",
				股票: "https://emwap.eastmoney.com/info/search/index?t=14&k=",
				汽车: "http://sou.m.autohome.com.cn/zonghe?q="
			}
			if (data[text]) {
				location.href = data[text] + $(".search-input").val();
			}
		}
	});

	$(".search-btn").click(function () {
		var text = $(".search-input").val();
		if ($(".search-btn").text() === "进入") {
			!text.match(/^(ht|f)tp(s?):\/\//) && (text = "http://" + text);
			history.go(-1);
			location.href = text;
		} else {
			if (!text) {
				$(".search-input").blur();
				history.go(-1);
			} else {
				searchText(text);
			}
		}
	});

	$(".search-input").keydown(function (evt) {
		// 使用回车键进行搜索
		evt.keyCode === 13 && $(".search-btn").click();
	});

	function searchText(text) {
		if (!text) {
			return;
		}
		searchHistory.add(text);
		history.go(-1);
		setTimeout(function () { // 异步执行 兼容QQ浏览器
			if (Storage.setData.engines === "via") {
				window.via.searchText(text);
			} else {
				location.href = {
					baidu: "https://www.baidu.com/s?wd=%s",
					quark: "https://quark.sm.cn/s?q=%s",
					google: "https://www.google.com.hk/search?q=%s",
					bing: "https://cn.bing.com/search?q=%s",
					sm: "https://m.sm.cn/s?q=%s",
					haosou: "https://www.so.com/s?q=%s",
					sogou: "https://www.sogou.com/web?query=%s",
					diy: Storage.setData.diyEngines
				}[Storage.setData.engines].replace("%s", text);
			}
		}, 1);
	}

	//精选页面
	function choice() {
		// 构建HTML
		var data = { '常用': [{ hl: "百度", shl: "百度一下你就知道", img: "baidu", url: "https://m.baidu.com" }, { hl: "腾讯", shl: "手机腾讯网", img: "qq", url: "https://xw.qq.com" }, { hl: "新浪", shl: "联通世界的超级平台", img: "sina", url: "https://sina.cn" }, { hl: "谷歌", shl: "最大的搜索引擎", img: "google", url: "https://www.google.com.hk" }, { hl: "搜狐", shl: "懂手机更懂你", img: "sina", url: "https://m.sohu.com" }, { hl: "网易", shl: "各有态度", img: "netease", url: "https://3g.163.com" }, { hl: "起点中文网", shl: "精彩小说大全", img: "qidian", url: "https://m.qidian.com" }, { hl: "淘宝", shl: "淘我喜欢", img: "taobao", url: "https://m.taobao.com" }, { hl: "京东", shl: "多好快省品质生活", img: "jd", url: "https://m.jd.com" }, { hl: "百度贴吧", shl: "最大的中文社区", img: "tieba", url: "http://c.tieba.baidu.com" }, { hl: "12306", shl: "你离世界只差一张票", img: "12306", url: "https://www.12306.cn" }, { hl: "飞猪", shl: "阿里旅行再升级", img: "flypig", url: "https://www.fliggy.com" }, { hl: "查快递", shl: "快递查询", img: "express_100", url: "https://m.kuaidi100.com" }, { hl: "优酷", shl: "热门视频全面覆盖", img: "youku", url: "https://www.youku.com" }, { hl: "爱奇艺", shl: "中国领先的视频门户", img: "iqiyi", url: "https://m.iqiyi.com" }, { hl: "斗鱼", shl: "每个人的直播平台", img: "douyu", url: "https://m.douyu.com" }, { hl: "虎牙", shl: "中国领先的互动直播平台", img: "huya", url: "https://m.huya.com" }, { hl: "美团", shl: "吃喝玩乐全都有", img: "meituan", url: "http://i.meituan.com" }, { hl: "小米", shl: "小米官网", img: "xiaomi", url: "https://m.mi.com" }, { hl: "58同城", shl: "让生活更简单", img: "tongcheng", url: "https://m.58.com" }, { hl: "九游", shl: "发现更多好游戏", img: "game_9", url: "http://a.9game.cn" }, { hl: "虎扑", shl: "最篮球的世界", img: "hupu", url: "https://m.hupu.com" }], '科技': [{ hl: "知乎", shl: "知识分享社区", img: "zhihu", url: "https://www.zhihu.com" }, { hl: "36kr", shl: "互联网创业资讯", img: "kr36", url: "https://36kr.com" }, { hl: "少数派", shl: "高质量应用推荐", img: "sspai", url: "https://sspai.com" }, { hl: "爱范儿", shl: "泛科技媒体", img: "ifanr", url: "https://www.ifanr.com" }, { hl: "ZEALER", shl: "电子产品评测网站", img: "zealer", url: "https://m.zealer.com" }, { hl: "瘾科技", shl: "科技新闻和测评", img: "engadget", url: "https://cn.engadget.com" }, { hl: "虎嗅网", shl: "科技媒体", img: "huxiu", url: "https://m.huxiu.com" }, { hl: "品玩", shl: "有品好玩的科技", img: "pingwest", url: "https://www.pingwest.com" }, { hl: "简书", shl: "优质原创的内容社区", img: "jianshu", url: "https://www.jianshu.com" }, { hl: "V2EX", shl: "关于分享和探索的地方", img: "v2ex", url: "https://www.v2ex.com" }], '生活': [{ hl: "豆瓣", shl: "一个神奇的社区", img: "douban", url: "https://m.douban.com/home_guide" }, { hl: "轻芒杂志", shl: "生活兴趣杂志", img: "qingmang", url: "http://zuimeia.com" }, { hl: "ONE", shl: "韩寒监制", img: "one", url: "http://m.wufazhuce.com" }, { hl: "蚂蜂窝", shl: "旅游攻略社区", img: "mafengwo", url: "https://m.mafengwo.cn" }, { hl: "小红书", shl: "可以买到国外的好东西", img: "xiaohongshu", url: "https://www.xiaohongshu.com" }, { hl: "什么值得买", shl: "应该能省点钱吧", img: "smzdm", url: "https://m.smzdm.com" }, { hl: "淘票票", shl: "不看书，就看几场电影吧", img: "taopiaopiao", url: "https://dianying.taobao.com" }, { hl: "下厨房", shl: "是男人就学做几道菜", img: "xiachufang", url: "https://m.xiachufang.com" }, { hl: "ENJOY", shl: "高端美食团购", img: "enjoy", url: "https://enjoy.ricebook.com" }], '工具': [{ hl: "豌豆荚设计", shl: "发现最优美的应用", img: "wandoujia", url: "https://m.wandoujia.com/award" }, { hl: "喜马拉雅听", shl: "音频分享平台", img: "ximalaya", url: "https://m.ximalaya.com" }, { hl: "第二课堂", shl: "守护全国2亿青少年健康成长", img: "2-class", url: "https://m.2-class.com/" }, { hl: "Mozilla", shl: "学习web开发的最佳实践", img: "mozilla", url: "https://developer.mozilla.org/zh-CN" }, { hl: "网易公开课", shl: "人chou就要多学习", img: "netease_edu_study", url: "http://m.open.163.com" }, { hl: "石墨文档", shl: "可多人实时协作的云端文档", img: "sm", url: "https://shimo.im" }] },
			html = '<div class="page-bg"></div><div class="page-choice"><div class="page-content"><ul class="choice-ul">',
			tabHtml = '<li class="current">捷径</li>',
			contentHtml = `<li class="choice-cut swiper-slide">
    <div class="list w2 h2">
        <a class="flex-1" href="https://quark.sm.cn/s?q=%E4%BB%8A%E5%A4%A9%E5%A4%A9%E6%B0%94">
            <div class="content weather">
                <div>访问中</div>
                <div></div>
                <div></div>
            </div>
        </a>
        <a class="flex-right">
            <div class="content" style="background-image:linear-gradient(148deg, rgb(0, 188, 150) 2%, rgb(129, 239, 201) 98%)">
                <div class="hl">一言</div>
                <div class="shl" id="hitokoto" style="text-align: center;top: 36px;height: 96px;white-space: pre-line;left: 15px;right: 15px;">
                    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
                </div>
            </div>
        </a>
    </div>
    <div class="list h3">
        <div class="flex-left">
            <div class="list cmp-flex">
                <a href="https://music.timeg.cn">
                    <div class="content" style="background-image:linear-gradient(-36deg, #ffaa59 0%, rgb(250, 218, 142) 99%)">
                        <div class="hl">音乐</div>
                        <div class="cmp-icon" style="bottom: 0px; width: 47px; height: 45px; background-image: url(https://dl.img.timecdn.cn/2020/03/16/yinyue.png!h.webp);"></div>
                    </div>
                </a>
            </div>
            <div class="list cmp-flex">
                <a href="https://img.timeg.cn">
                    <div class="content" style="background-image:linear-gradient(136deg, rgb(137, 172, 237) 0%, rgb(28, 79, 189) 99%)">
                        <div class="hl">图库</div>
                        <div class="cmp-icon" style="bottom: 0px; width: 47px; height: 45px; background-image: url(https://dl.img.timecdn.cn/2020/03/16/tupian.png!h.webp);"></div>
                    </div>
                </a>
            </div>
        </div>
        <a class="flex-1 content" href="https://s.weibo.com/top/summary" style="background-image:linear-gradient(135deg, rgb(34, 34, 80) 1%, rgb(60, 60, 89) 100%)">
            <div class="hl relative">热搜榜</div>
            <div class="news-list"></div>
        </a>
    </div>
    <div class="list">
        <a class="flex-left content" href="https://pan.timeg.cn" style="background-image:linear-gradient(-36deg, rgb(3, 122, 113) 0%, rgb(19, 235, 213) 99%)">
            <div class="hl">网盘</div>
            <div class="cmp-icon" style="right: 0px; bottom: 0px; width: 47px; height: 45px; background-image: url(https://dl.img.timecdn.cn/2020/03/16/yunpan.png!h.webp);"></div>
        </a>
        <a class="flex-1 content" href="https://quark.sm.cn/api/rest?method=quark_fanyi.dlpage&from=smor&safe=1&schema=v2&format=html&entry=shortcuts" style="background-image:linear-gradient(-36deg, rgb(97, 71, 183) 0%, rgb(132, 113, 196) 99%)">
            <p class="hl">夸克翻译</p>
            <p class="shl">夸克翻译</p>
            <div class="cmp-icon" style="right: 18px; top: 25px; width: 70px; height: 65px; background-image: url(https://dl2.img.timecdn.cn/2020/03/16/fanyi.png!h.webp);"></div>
        </a>
    </div>
    <div class="list h2">
        <a class="flex-1 content" href="https://quark.sm.cn/s?q=%E7%83%AD%E6%90%9C&tab=zhihu" style="background-image:linear-gradient(135deg, rgb(52, 55, 60) 0%, rgb(77, 78, 86) 100%)">
            <p class="hl relative">知乎热榜</p>
            <div class="audio-list">
                <div class="slick-track" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"></div>
            </div>
            <div class="cmp-icon" style="width: 146px;height: 99px;right: 10px;bottom: 0;background-image: url(https://dl.img.timecdn.cn/2020/03/16/zhihu.png!h.webp);"></div>
        </a>
    </div>
    <div class="list">
        <a class="flex-1 content" href="https://xw.qq.com" style="background-image:linear-gradient(to right bottom, #becce9, #98b1cf)">
            <p class="hl" style="left: 76px;top: 30px;">腾讯新闻</p>
            <p class="shl" style="left: 76px;top: 51px;">新闻</p>
            <div class="cmp-icon" style="left: 20px; top: 23px; width: 44px; height: 43.6px; background-image: url(https://dl2.img.timecdn.cn/2020/03/16/tencent.png!h.webp);"></div>
        </a>
        <a class="flex-right content" style="background-image:linear-gradient(136deg, rgb(255, 81, 81) 0%, rgb(255, 111, 88) 100%)" href="https://quark.sm.cn/api/rest?method=learning_mode.home&format=html&schema=v2">
            <div class="hl">夸克学习</div>
            <div class="cmp-icon" style="top: 44.5px; width: 42.5px; height: 45.5px; background-image: url(https://dl2.img.timecdn.cn/2020/03/16/xuexi.png!h.webp);"></div>
        </a>
    </div>
    <div class="list w2">
        <a class="flex-left content" href="https://quark.sm.cn/s?q=垃圾分类" style="background-image:linear-gradient(to right bottom, #7cecc6, #15b695)">
            <div class="hl">垃圾分类</div>
            <div class="cmp-icon" style="right: 0px; bottom: 0px; width: 47px; height: 45px; background-image: url(https://dl2.img.timecdn.cn/2020/03/16/laji.png!h.webp);"></div>
        </a>
        <a class="flex-1 content" href="https://quark.sm.cn/api/rest?format=html&method=lawservice.home&schema=v2" style="background-image:linear-gradient(136deg, rgb(38, 85, 248) 0%, rgb(20, 152, 230) 100%)">
            <p class="hl">夸克法律检索</p>
            <p class="shl">专业权威法律检索</p>
            <div class="cmp-icon" style="right: 19px; top: 21px; width: 80px; height: 70px; background-image: url(https://dl.img.timecdn.cn/2020/03/16/falv.png!h.webp);"></div>
        </a>
    </div>
</li>`;

		$.each(data, function (i, n) {
			tabHtml += "<li>" + i + "</li>";
			contentHtml += '<li class="choice-li swiper-slide">';
			for (var i = 0, l = n.length; i < l; i++) {
				contentHtml += '<a href="' + n[i].url + '"><div><img src="img/choice/' + n[i].img + '.png" /><p>' + n[i].hl + '</p><p>' + n[i].shl + '</p></div></a>';
			}
			contentHtml += '</li>';
		});

		// HTML添加到APP
		$('#app').append(html + tabHtml + '<span class="active-span"></span></ul><div class="choice-swipe"><ul class="swiper-wrapper"><div style="position:absolute;text-align:center;top:50%;width:100%;margin-top:-64px;color:#444">正在加载页面中...</div></ul></div><div class="choice-close"></div></div></div>');

		var dom = $(".choice-ul li");
		var width = dom.width();
		$(".active-span").css("transform", "translate3d(" + (width / 2 - 9) + "px,0,0)");

		setTimeout(function () {
			$(".page-bg").addClass("animation");
			$(".page-choice").addClass("animation");
		}, 1);

		// 动画完成后加载，防止过渡动画卡顿
		$(".page-choice").on("transitionend", function (evt) {
			// 过滤掉子元素
			if (evt.target !== this) {
				return;
			}
			$(".page-choice").off("transitionend");
			$('.swiper-wrapper').html(contentHtml);
			// 绑定事件
			var last_page = 0;

			require(['Swiper'], function (Swiper) {
				var swiper = new Swiper('.choice-swipe', {
					on: {
						slideChange: function () {
							var i = this.activeIndex;
							dom.eq(last_page).removeClass("current");
							$(".active-span").css("transform", "translate3d(" + (width * i + width / 2 - 9) + "px,0,0)");
							dom.eq(i).addClass("current");
							last_page = i;
						}
					}
				});

				// 绑定TAB点击事件
				$(".choice-ul").click(function (evt) {
					if (evt.target.nodeName == "LI") {
						swiper.slideTo($(evt.target).index());
					}
				});
			})

			// 绑定关闭按钮事件
			$(".choice-close").click(function () {
				$(".page-choice").css('pointer-events', 'none').removeClass("animation");
				$(".page-bg").removeClass("animation");
				$(".page-choice").on('transitionend', function (evt) {
					if (evt.target !== this) {
						return;
					}
					$(".page-choice").remove();
					$(".page-bg").remove();
				});
			});

			// 地理位置|天气|气温|空气质量
			$.ajax({
				url: "https://jsonp.afeld.me/?callback=weather&url=https%3A%2F%2Fai.sm.cn%2Fquark%2F1%2Fapi%3Fformat%3Djson%26method%3Dweather",
				type: "get",
				dataType: "jsonp",
				success: function (res) {
					var data = res.data;
					var color1 = data.color1;
					var color2 = data.color2;
					var location = data.location;
					var temp = data.temp;
					var air = data.air;
					var weather = data.weather;
					var html = '<div>' + temp + '</div><div>' + weather + '</div><div>' + location + ' · ' + air + '</div><div class="cmp-icon" id="lottie-box" style="background-image: url(' + data.lottie + ');"></div>';
					$('.weather').html(html).css("background-image", "linear-gradient(-33deg," + color1 + " 0%," + color2 + " 99%)");
				}
			})

			// 微博热搜
			$.ajax({
				url: "https://s.weibo.com/ajax/jsonp/gettopsug?_cb=gettopsug",
				type: "get",
				dataType: "jsonp",
				jsonpCallback: "gettopsug",
				success: function (res) {
					var data = res.data;
					var html = '';
					for (var i = 0; i < 4; i++) {
						html += '<div class="news-item"><div class="news-item-count">' + (i + 1) + '</div><div class="news-item-title">' + data.list[i].word + '</div><div class="news-item-hot">' + data.list[i].num + '</div></div>';
					}
					$('.news-list').html(html);
				}
			});

			//知乎热榜
			$.ajax({
				url: "https://quark.sm.cn/api/rest?method=Newstoplist.zhihu",
				type: "get",
				dataType: "jsonp",
				success: function (res) {
					var data = res.data;
					var html = '';
					for (var i = 0; i < 8; i++) {
						html += '<div class="audio-item"><div class="audio-item-icon"></div><div class="audio-item-title">' + data[i].title + '</div></div>'
					}
					for (var i = 0; i < 2; i++) {
						html += '<div class="audio-item"><div class="audio-item-icon"></div><div class="audio-item-title">' + data[i].title + '</div></div>'
					}
					var $slick_track = $('.audio-list').find('.slick-track');
					$slick_track.html(html);
					var curIndex = 2;
					setInterval(function () {
						$slick_track.css({
							transform: "translate3d(0px, -" + curIndex * 27 + "px, 0px)",
							transition: "transform 500ms ease 0s"
						});
						curIndex += 2;
						$slick_track.on('transitionend', function (evt) {
							$slick_track.off('transitionend').css({
								transition: ""
							})
							if (curIndex >= 10) {
								curIndex = 2;
								$slick_track.css({
									transform: "translate3d(0px, 0px, 0px)"
								})
							}
						});
					}, 5000);
				}
			});

		})
	}

	$(".logo").click(() => {
		if (window.via) {
			self.location = "folder://";
		}
	}).longPress(() => {
		$('#app').append(`<div class="set-from">
			<div class="set-header">
				<div class="set-back"></div>
				<p class="set-logo">主页设置</p>
			</div>
			<ul class="set-option-from">
				<li class="set-option" data-value="engines">
					<div class="set-text">
						<p class="set-title">搜索引擎</p>
					</div>
					<select class="set-select">
						<option value="quark">夸克</option>
						<option value="via" style="display:none">跟随VIA</option>
						<option value="baidu">百度</option>
						<option value="google">谷歌</option>
						<option value="bing">必应</option>
						<option value="sm">神马</option>
						<option value="haosou">好搜</option>
						<option value="sogou">搜狗</option>
						<option value="diy">自定义</option>
					</select>
				</li>
				<li class="set-option" data-value="wallpaper">
					<div class="set-text">
						<p class="set-title">壁纸</p>
					</div>
				</li>
				<li class="set-option" data-value="logo">
					<p class="set-title">LOGO</p>
				</li>
				<li class="set-option" data-value="bookcolor">
					<div class="set-text">
						<p class="set-title">图标颜色</p>
					</div>
					<select class="set-select">
						<option value="black">深色图标</option>
						<option value="white">浅色图标</option>
					</select>
				</li>
				<li class="set-option" data-value="nightMode">
					<div class="set-text">
						<p class="set-title">夜间模式</p>
					</div>
					<select class="set-select">
						<option value="0">关闭</option>
						<option value="1">开启</option>
					</select>
				</li>
				<li class="set-option" data-value="searchHistory">
					<div class="set-text">
						<p class="set-title">记录搜索历史</p>
					</div>
					<select class="set-select">
						<option value="0">关闭</option>
						<option value="1">开启</option>
					</select>
				</li>
				<li class="set-option" data-value="delLogo">
					<p class="set-title">恢复默认壁纸和LOGO</p>
				</li>
				<li class="set-option" data-value="export">
					<div class="set-text">
						<p class="set-title">导出主页数据</p>
					</div>
				</li>
				<li class="set-option" data-value="import">
					<div class="set-text">
						<p class="set-title">导入主页数据</p>
					</div>
				</li>
				<li class="set-option">
					<div class="set-text">
						<p class="set-title">关于</p>
						<p class="set-description">原作者：BigLop<br>改版：TimeG<br>当前版本：1.48（20200316修改版）</p>
					</div>
				</li>
			</ul>
		</div>`);

		$(".set-from").show();

		if (window.via) { // 只有VIA浏览器才能显示
			$('option[value=via]').show();
		}

		$.each(Storage.setData, function (i, n) {
			var select = $(".set-option[data-value=" + i + "]").find(".set-select");
			if (select) {
				select.val(n);
			}
		});

		$(".set-back").click(function () {
			$(".set-from").css("pointer-events", "none").removeClass("animation");
			$(".set-from").on('transitionend', function (evt) {
				if (evt.target !== this) {
					return;
				}
				$(".set-from").remove();
			});
		});

		$(".set-option").click(function () {
			var value = $(this).data("value");
			if (value === "wallpaper") {
				uploadFile(function () {
					var file = this.files[0];
					var reader = new FileReader();
					reader.onload = function () {
						Storage.setData.wallpaper = this.result;
						store.set("setData", Storage.setData);
						$("body").css("background", "url(" + Storage.setData.wallpaper + ") center center / cover no-repeat");
					};
					reader.readAsDataURL(file);
				});
			} else if (value === "logo") {
				uploadFile(function () {
					var file = this.files[0];
					var reader = new FileReader();
					reader.onload = function () {
						Storage.setData.logo = this.result;
						store.set("setData", Storage.setData);
						$(".logo").html('<img src="' + Storage.setData.logo + '" />');
					};
					reader.readAsDataURL(file);
				});
			} else if (value === "delLogo") {
				Storage.setData.wallpaper = "";
				Storage.setData.logo = "";
				Storage.setData.bookcolor = "black";
				store.set("setData", Storage.setData);
				location.reload();
			} else if (value === "openurl") {
				open($(this).find('.set-description').text());
			} else if (value === "export") {
				var oInput = $('<input>');
				oInput.val('{"bookMark":' + JSON.stringify(store.get('bookMark')) + '}');
				document.body.appendChild(oInput[0]);
				oInput.select();
				document.execCommand("Copy");
				alert('已复制到剪贴板，请粘贴保存文件。');
				oInput.remove();
			} else if (value === "import") {
				var data = prompt("在这粘贴主页数据");
				try {
					data = JSON.parse(data);
					store.set("bookMark", data.bookMark);
					alert("导入成功!");
					location.reload();
				} catch (e) {
					alert("导入失败!");
				}
			}
		});

		$(".set-select").change(function () {
			var dom = $(this),
				item = dom.parent().data("value"),
				value = dom.val();
			if (item === "engines" && value === "diy") {
				var engines = prompt("输入搜索引擎网址，（用“%s”代替搜索字词）");
				if (engines) {
					Storage.setData.diyEngines = engines;
				} else {
					dom.val(Storage.setData.engines);
					return;
				}
			}
			// 保存设置
			Storage.setData[item] = value;
			store.set("setData", Storage.setData);
			// 应用设置
			loadStorage.applyItem();
		});
		$(".set-from").addClass('animation');
	});

	// 下滑进入搜索
	require(['touchSwipe'], function () {
		$(".page-home").swipe({
			swipeStatus: function (event, phase, direction, distance) {
				if ($('.delbook').length !== 0) {
					return;
				}
				if (phase === 'move') {
					if (distance <= 10 || direction !== "down") {
						return;
					}
					var height = $(document).height();
					$('.ornament-input-group').css({ 'transform': 'translate3d(0,' + (distance / height) * 70 + 'px,0)', 'transition': 'none' });
					$('.logo').attr("disabled", "disabled").css({ 'opacity': 1 - (distance / height) * 4, 'transition': 'none' });
					$('.bookmark').attr("disabled", "disabled").css({ 'opacity': 1 - (distance / height) * 4, 'transform': 'scale(' + (1 - (distance / height) * .2) + ')', 'transition': 'none' });
				} else if (phase === 'end' || phase === 'cancel') {
					$('.logo').removeAttr("disabled").removeAttr('style');
					$('.bookmark').removeAttr("disabled").removeAttr('style');
					$('.ornament-input-group').removeAttr('style');
					if (distance >= 100 && direction === "down") {
						$('.ornament-input-group').click();
						$('.logo').css('opacity', '0');
						$('.bookmark').css('opacity', '0');
						setTimeout(function () {
							$('.logo').css('opacity', '');
							$('.bookmark').css('opacity', '');
						}, 200);
					}
				}
			}
		});
	})

});