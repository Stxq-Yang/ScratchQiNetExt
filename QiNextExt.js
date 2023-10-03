const qi_net_extension_icon = "https://m.xiguacity.cn/avatar/629d9a8a2acdd279416ae1f7/20f1b6be645f8e8bc9bddfc9a0515240.jpg?x-oss-process=image%2Fresize%2Cs_150%2Fformat%2Cwebp";
const qi_net_extension_picture = "https://img2.baidu.com/it/u=633757967,821499179&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500";
const qi_net_extension_id= "QiNetExt";

class QiNetExt {
	constructor(runtime) {
		this.runtime = runtime;
		this.step = this.runtime._step;
		this.request = new XMLHttpRequest();
		this._formatMessage = runtime.getFormatMessage({
			"zh-cn": {
				"QiNetExt.name": "[beta]Qi网络库",
				"QiNetExt.Open": "打开连接 类型[type] 服务器[serverURL] 异步执行[ansyc]",
				"QiNetExt.send": "发送请求 数据[data]",
				"QiNetExt.setHeader": "设置请求头 头[header] 值[value]",
				"QiNetExt.responseText": "响应返回"
			},
			"en": {
				"QiNetExt.name": "[beta]QiNetLib",
				"QiNetExt.Open": "Open type[type] server[serverURL] ansyc[ansyc]",
				"QiNetExt.send": "send data[data]",
				"QiNetExt.setHeader": "setRequestHeader header[header] value[value]",
				"QiNetExt.responseText": "responseText"
			}
		});
	}

	formatMessage(id) {
		return this._formatMessage({
			id,
			default: id,
			description: id
		});
	}

	getInfo() {
		return {
			id: qi_net_extension_id,
			name: this.formatMessage("QiNetExt.name"),
			color1: "#6A5ACD",
			color2: "#6495ED",
			blocks: [
				{
					opcode: "Open",
					blockType: "command",
					text: this.formatMessage("QiNetExt.Open"),
					arguments: {
						type: {
							type: "string",
							menu: "sendType"
						},
						serverURL: {
							type: "string",
							defaultValue: ""
						},
						ansyc: {
							type: {
								type: "Boolean",
								menu: "bool",
							}
						}
					}
				},
				{
					opcode: "send",
					blockType: "command",
					text: this.formatMessage("QiNetExt.send"),
					arguments: {
						data: {
							type: "string",
							defaultValue: ""
						}
					}
				},
				{
					opcode: "setHeader",
					blockType: "command",
					text: this.formatMessage("QiNetExt.setHeader"),
					arguments: {
						header: {
							type: "string",
							defaultValue: ''
						},
						value: {
							type: "string",
							defaultValue: ''
						}
					}
				},
				{
					opcode: "responseText",
					blockType: "reporter",
					text: this.formatMessage("QiNetExt.responseText"),
					arguments: {}
				}
			],
			menus: {
				sendType: [
					{
						text: "POST",
						value: "POST",
					},
					{
						text: "GET",
						value: "GET",
					},
					{
						text: "PUT",
						value: "PUT",
					},
					{
						text: "DELETE",
						value: "DELETE",
					}
				],
				bool: [
					{
						text: "true",
						value: "true",
					},
					{
						text: "false",
						value: "false",
					}
				]
			}
		};
	}

	Open(args) {
		this.request.open(args.type, args.serverURL, args.ansyc);
	}

	send(args) {
		this.request.send(args.data);
	}

	setHeader(args) {
		this.request.setRequestHeader(args.header, args.value);
	}

	responseText() {
		return this.request.responseText;
	}
}

const QiNetExtInstance = new QiNetExt();

export default QiNetExtInstance;
