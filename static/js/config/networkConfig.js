var httpUrlData = {                            
	login: {name: "登录", url: "/MarkSixGame/User/login", server: "MarkSixGame"},
	getGameData: {name: "获取游戏数据", url: "/MarkSixGame/Game/getGameData", server: "MarkSixGame"},
	generalBet : {name: "普通下注", url: "/MarkSixBet/Bet/generalBet", server: "MarkSixBet"},
	multiNumBet: {name: "连码下注", url: "/MarkSixBet/Bet/multiNumBet", server: "MarkSixBet"},
	getInstantResultNum: {name: "获取即时开奖号码", url: "/MarkSixGame/Game/getInstantResultNum", server: "MarkSixGame"},
	listLotteryResult: {name: "分页查询开奖结果", url: "/MarkSixGame/LotteryResult/listLotteryResult", server: "MarkSixGame"},
	listDailyLedger: {name: "账户历史查询每日总账", url: "/MarkSixGame/GameRecord/listDailyLedger", server: "MarkSixGame"},
	listClearedOrder: {name: "账户历史查询已结注单", url: "/MarkSixGame/GameRecord/listClearedOrder", server: "MarkSixGame"},
	listBetDetail: {name: "查询下注明细", url: "/MarkSixGame/GameRecord/listBetDetail", server: "MarkSixGame"},
	updatePassword: {name: "修改密码", url: "/MarkSixGame/User/updatePassword", server: "MarkSixGame"},
	listNotice: {name: "查询公告", url: "/MarkSixGame/Notice/listNotice", server: "MarkSixGame"},
	getMemberMaterial: {name: "查询会员资料", url: "/MarkSixGame/User/getMemberMaterial", server: "MarkSixGame"},
	getCurrentResultNum: {name: "查询当前期开奖号码", url: "/MarkSixGame/Game/getCurrentResultNum", server: "MarkSixGame"},
	verifyCheckCodeToken: {name: "验证安全token", url: "/MarkSixGame/CheckCode/verifyCheckCodeToken", server: "MarkSixGame"}
} 