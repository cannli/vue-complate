const overview = '/overview'
const assertPackage = '/assertPackage'
export const data = {
  // 项目概况
  baseInfo: [{name: '项目基本信息', path: overview + '/baseInfo'}],
  dataImportHistory: [{name: '历史数据上传', path: overview + '/dataImportHistory'}],
  dataImportHistoryDataImport: [
    {name: '历史数据上传', path: overview + '/dataImportHistory'},
    {name: '历史数据概况', path: overview + '/dataImportHistory/dataImport'}
    ],
  dataEvaluate: [{name: '历史数据评估', path: overview + '/dataEvaluate'}],
  dataAddProject: [{name: '新建项目', path: overview + '/dataAddProject'}],


  // 资产包管理
  packageList:[{name: '资产包列表', path: assertPackage + '/packageList'}],
  packageListPackageDetails:[{name: '资产包列表', path: assertPackage + '/packageList'},{name: '资产包概况', path: assertPackage + 'packageList/packageDetails'}],
}
