---
description: uniapp
title: wgt热更新代码
readingTime: true
tag:
  - 文章
# recommend: 1
---

```javascript

<script>

	const dcRichAlert = uni.sutils.isApp() ? uni.requireNativePlugin('DCloud-RichAlert') : null,
		config = uni.config.version;
export default {
	data: () => ({ versionData: {}, downType: 'localDown', dlgButtons: [{ title: Message.LG_OK, titleColor: '#e03636' }, { title: Message.LG_CANCEL, titleColor: '#434343' }] }),
	created() {
		uni.sutils.isIos() && this.dlgButtons.reverse();
	},
	methods: {
		check(e) {
			if (uni.sutils.isH5()) return e && uni.core.toast(Message.H5_ERR);
			let t = this;
			if (!this._checkConfig()) return;
			let s = new Date().getTime();
			uni.request({
				url: config.cfgUrl + '?_t=' + s,
				dataType: 'json',
				success: s => {
					if (200 != s.statusCode) return uni.core.toast(Message.CHECK_ERR);
					if (Array.isArray(s.data)) {
						let e = s.data.filter(e => 1 == e.current);
						if (0 == e.length) return uni.core.toast(Message.PARAMS_ERR);
						t.versionData = e[0];
					} else 'object' == typeof s.data && (t.versionData = s.data);
					t._checkVersion(e);
				},
				fail: e => {
					uni.core.toast(Message.CHECK_ERR);
				}
			});
		},
		_checkVersion(e) {
			if (!uni.sutils.isApp()) return uni.core.toast(Message.H5_ERR);
			plus.runtime.getProperty(plus.runtime.appid, t => {
				let s = null;
				if (
					(this.versionData.allUp
					 ? (s = this.versionData.All)
					 : uni.sutils.isAndroid()
					 ? (s = this.versionData.Android)
					 : uni.sutils.isIos() && (s = this.versionData.Ios),
					 !s)
				)
					return uni.core.toast(Message.PARAMS_ERR);
				t.version == s.version ? e && e() : this._showDialog(s);
			});
		},
		_checkConfig: () => (config ? !!config.cfgUrl || (uni.core.toast(Message.URL_NULL), !1) : (uni.core.toast(Message.CFG_NULL), !1)),
		_showDialog(e) {
			let { cfgUrl: t, dlgTitle: s, dlgContent: i, dlgButtons: o, dlgTitleColor: n, downType: l } = config,
				{ contentTitle: r, content: a, uptype: u, downUrl: c, force: d } = e;
			(r = ('all' == u ? '[整包更新]' : '[增量更新]') + r),
				(a = r + '\n\n' + a),
				l && (this.downType = l),
				dcRichAlert.show({ title: s || Message.UP_TITLE, titleColor: n || '#101010', content: i || a, contentAlign: 'left', buttons: this.dlgButtons }, e => {
					uni.sutils.isAndroid()
						? 0 == e.index
						? this._androidDownload(u, c)
						: 'true' == d && plus.runtime.quit()
						: uni.sutils.isIos() && (1 == e.index ? this._iosDownload(u, c) : 'true' == d && plus.runtime.quit());
				});
		},
		_androidDownload(e, t) {
			'openUrl' == this.downType ? plus.runtime.openURL(t) : this._fileDownload(e, t);
		},
		_iosDownload(e, t) {
			'min' == e ? this._fileDownload(e, t) : plus.runtime.openURL(t);
		},
		_fileDownload(e, t) {
			if (!t) return uni.core.toast(Message.DURL_NULL);
			let s = plus.nativeUI.showWaiting('资源包下载中...', { padding: '20px', back: 'none' });
			uni.downloadFile({
				url: t,
				success: t => {
					200 == t.statusCode &&
						plus.runtime.install(
							t.tempFilePath,
							{ force: !1 },
							t => {
								'all' == e && plus.runtime.quit(),
									uni.core.toast(Message.INSTALL_DONE),
									setTimeout(t => {
										'min' == e && plus.runtime.restart();
									}, 1e3);
							},
							e => {
								uni.core.toast(Message.INSTALL_ERR);
							}
						);
				},
				fail: () => {
					s.close(), uni.core.toast(Message.DOWN_ERR);
				}
			}).onProgressUpdate(e => {
				s.setTitle(`资源包下载中...(${e.progress}%)`), 100 == e.progress && s.close();
			});
		}
	}
};
let Message = {
	UP_TITLE: '版本更新提示',
	LG_OK: '确认更新',
	LG_CANCEL: '取消',
	CHECK_ERR: '版本检查失败',
	H5_ERR: 'h5不支持版本更新',
	CFG_NULL: '【版本更新】config.js文件不存在！',
	URL_NULL: '【版本更新】配置文件地址未配置！',
	DURL_NULL: '【版本更新】下载地址为空！',
	PARAMS_ERR: '【版本更新】后端参数配置错误',
	DOWN_ERR: '【版本更新】安装包下载失败',
	INSTALL_ERR: '【版本更新】资源包安装失败',
	INSTALL_DONE: '【版本更新】更新成功，即将重启App'
};
</script>
```
