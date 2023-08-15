var line = "||";
var amount = "||";

count(0);
function count(bar) {
	amount = amount + line;
	if (document.loading != null) {
		document.loading.chart.value = amount;
		document.loading.percent.value = bar + "%";
	}
}

function myIsNaN(value) {
	return typeof value === 'number' && !isNaN(value);
}

//开始加载
function startLoad() {
	var otherDiv = document.getElementById('container');
	//隐藏
	otherDiv.style.display = "none";
}

var process = 0;
// 加载过程
function onProgress(xhr) {
	var tempprocess = (xhr.loaded / xhr.total * 100);
	if (myIsNaN(tempprocess)) {
		process = tempprocess;
		console.log('已加载' + process + '%');
		count(process);
	}
}

// 加载完成
function onLoad() {
	console.log('onLoad');
	//获取要显示的div对象
	var otherDiv = document.getElementById('container');
	//显示
	otherDiv.style.display = "block";
	//隐藏table
	if (document.getElementById('table') != null)
		document.getElementById('table').style.display = "none";
}

//选中某个模型
function onModelClicked(modelname) {
	console.log('onModelClicked:' + modelname);

	switch (modelname) {
		case "qu_baohe":

			break;
		case "qu_luyang":

			break;
		case "qu_shushan":

			break;
		case "qu_yaohai":

			break;
		case "sheng_jiangsu":

			break;
		case "sheng_shanghai":

			break;
		case "sheng_zhejiang":

			break;
		case "shi_anqing":

			break;
		case "shi_bengbu":

			break;
		case "shi_chaohu":

			break;
		case "shi_chizhou":

			break;
		case "shi_chuzhou":

			break;
		case "shi_fuyang":

			break;
		case "shi_bozhou":

			break;
		case "shi_hefei":

			break;
		case "shi_huaibei":

			break;
		case "shi_huainan":

			break;
		case "shi_huangshan":

			break;
		case "shi_liuan":

			break;
		case "shi_maanshan":

			break;
		case "shi_suzhou":

			break;
		case "shi_tongling":

			break;
		case "shi_wuhu":

			break;
		case "shi_xuancheng":

			break;
		case "xian_changfeng":

			break;
		case "xian_feidong":

			break;
		case "xian_feixi":

			break;
		case "xian_lujiang":

			break;
		case "shi_tuopin":

			break;
		// case "a_dibiaozhan":
		// 	//应该没这个跳转链接
		// 	break;
		case "a_pinpai":

			break;
		case "a_linchang":

			break;
		case "a_linmu":

			break;
		default:
			break;
	}
}