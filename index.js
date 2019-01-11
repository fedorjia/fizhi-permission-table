module.exports = {
	/**********************************
	 * 帐号
	 **********************************/
	"/account": {
		// 帐号列表
		"get": "account:list",
		// 帐号添加
		"post": "account:create"
	},
	"/account/[0-9]+": {
		// 帐号查看
		"get": "account:view",
		// 帐号修改
		"put": "account:update",
		// 帐号删除
		"delete": "account:delete"
	},
	"/account/[0-9]+/active": {
		// 帐号激活
		"patch": "account:active"
	},
	"/account/[0-9]+/inactive": {
		// 帐号注销
		"patch": "account:inactive"
	},

	/**********************************
	 * 资产
	 **********************************/
	"/asset/info": {
		// 资产列表
		"get": "asset:list",
		// 资产添加
		"post": "asset:create"
	},
	"/asset/info/[0-9]+": {
		// 资产详情
		"get": "asset:view",
		// 资产修改
		"put": "asset:update",
		// 资产删除
		"delete": "asset:delete"
	},

	/**********************************
	 * 部门
	 **********************************/
	"/asset/department": {
		// 部门列表
		"get": "asset_department:list",
		// 部门添加
		"post": "asset_department:create"
	},
	"/asset/department/[0-9]+": {
		// 部门更新
		"put": "asset_department:update",
		// 部门删除
		"delete": "asset_department:delete"
	},

	/**********************************
	 * 资产编组
	 **********************************/
	"/asset/group": {
		// 资产编组列表
		"get": "asset_group:list",
		// 资产编组添加
		"post": "asset_group:create"
	},
	"/asset/group/[0-9]+": {
		// 资产编组更新
		"put": "asset_group:update",
		// 资产编组删除
		"delete": "asset_group:delete"
	},
	"/asset/group/[0-9]+/asset": {
		// 资产编组下的资产列表
		"get": "asset_group:asset_list"
	},
	"/asset/group/[0-9]+/asset/[0-9]+": {
		// 资产编组下资产删除
		"delete": "asset_group:asset_delete"
	},

	/**********************************
	 * 环节
	 **********************************/
	"/looplink": {
		// 环节定义列表
		"get": "looplink:list"
	},
	"/looplink/[0-9]+/department": {
		// 环节下部门列表
		"get": "looplink:list_department"
	},
	"/looplink/[0-9]+/account": {
		// 环节下帐号列表
		"get": "looplink:list_account",
		// 环节下帐号删除
		"delete": "looplink:delete_account"
	},
	"/looplink/record": {
		// 当前环节记录
		"get": "looplink:list_record",
		// 上传环节数据
		"post": "looplink:create_record"
	},
	"/looplink/history": {
		// 历史环节记录
		"get": "looplink:list_history"
	},

	/**********************************
	 * 盘点
	 **********************************/
	"/check": {
		// 当前盘点记录
		"get": "check:list",
		// 上传盘点数据
		"post": "check:create"
	},
	"/check/history": {
		// 历史盘点记录
		"get": "check:list_history"
	},
	"/check/asset/[0-9]+/manual": {
		// 手动盘点
		"post": "check:manual"
	},
	"/check/asset/[0-9]+/repair": {
		// 申请报修
		"post": "check:repair_request",
		// 确认报修
		"put": "check:repair_done"
	},
	"/check/asset/[0-9]+/scrap": {
		// 申请报废
		"post": "check:scrap_request",
		// 确认报废
		"put": "check:scrap_done"
	},

	/**********************************
	 * 报表
	 **********************************/
	"/chart": {
		// 查看报表
		"get": "chart:view"
	}
}