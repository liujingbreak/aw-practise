/**
 * This file is generated by @wfh/tool-misc
 */
import {ConfigHandler, DrcpSettings, InjectorConfigHandler} from '@wfh/plink';

const workspaceSetting: ConfigHandler & InjectorConfigHandler = {
  /** Change settings of Plink and other Plink compliant packages */
  onConfig(setting: DrcpSettings, cliOpt: NonNullable<DrcpSettings['cliOptions']>): void {
    // Run command "plink setting" to see details of setting properties
    setting.port = 8080;
    setting['@wfh/assets-processer'].proxyToDevServer = {target: 'http://localhost:14333'};
  },
  /** For Node.js runtime, replace module in "require()" or import syntax */
  setupNodeInjector(factory, setting) {
    // factory.fromPlinkPackage('@wfh/foobar').alias('moduleA', 'moduleB');
  },
  /** For Client framework build tool (React, Angular), replace module in "require()" or import syntax */
  setupWebInjector(factory, setting) {
    // factory.fromPlinkPackage('@wfh/foobar').alias('moduleA', 'moduleB');
  }
};

export default workspaceSetting;
