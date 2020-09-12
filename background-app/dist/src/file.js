"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var setting_1 = require("./setting");
function hasConfig() {
    // eslint-disable-next-line no-undef
    return new Promise(function (resolve) {
        fs_1.default.exists(setting_1.setting.workspace + '/' + setting_1.setting.encryptedDataFileName, function (exist) {
            resolve(exist);
        });
    });
}
function unzipData() {
    //todo
}
exports.fileUtils = {
    hasConfig: hasConfig,
    unzipData: unzipData,
};
