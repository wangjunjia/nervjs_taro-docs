import React from 'react'

import Taro from '../index'

declare module './index' {
  namespace getAppInfo {
    /** 应用信息 */
    interface AppInfo {
      platform: string
      taroVersion: string
      designWidth: number
    }
  }

  namespace getCurrentInstance {
    interface Current {
      app: AppInstance | null
      router: RouterInfo | null
      page: PageInstance | null
      onReady: string
      onHide: string
      onShow: string
      preloadData?: Record<any, any>
      /**
       * RN 私有对象navigationRef，用于使用底层接口控制路由
       */
      rnNavigationRef?: React.RefObject<any>
    }
  }

  namespace setGlobalDataPlugin {
    /** Vue3 插件，用于设置 `getApp()` 中的全局变量 */
    interface Plugin {
      install (app: any, data: any): void
    }
  }

    /** @ignore */
  interface TARO_ENV_TYPE {
    [TaroGeneral.ENV_TYPE.WEAPP]: TaroGeneral.ENV_TYPE.WEAPP
    [TaroGeneral.ENV_TYPE.WEB]: TaroGeneral.ENV_TYPE.WEB
    [TaroGeneral.ENV_TYPE.RN]: TaroGeneral.ENV_TYPE.RN
    [TaroGeneral.ENV_TYPE.SWAN]: TaroGeneral.ENV_TYPE.SWAN
    [TaroGeneral.ENV_TYPE.ALIPAY]: TaroGeneral.ENV_TYPE.ALIPAY
    [TaroGeneral.ENV_TYPE.TT]: TaroGeneral.ENV_TYPE.TT
    [TaroGeneral.ENV_TYPE.QQ]: TaroGeneral.ENV_TYPE.QQ
    [TaroGeneral.ENV_TYPE.JD]: TaroGeneral.ENV_TYPE.JD
  }

  interface TaroStatic {
    /** @ignore */
    Events: {
      new (): TaroGeneral.Events
    }

    /** 事件中心
     * @supported global
     */
    eventCenter: TaroGeneral.Events

    /** @ignore */
    ENV_TYPE: TARO_ENV_TYPE

    /** 获取环境变量
     * @supported global
     */
    getEnv(): TaroGeneral.ENV_TYPE

    /** 尺寸转换
     * @supported global
     */
    pxTransform(size: number, designWidth?: number): string

    /** 尺寸转换初始化
     * @supported global
     */
    initPxTransform(config: {
      baseFontSize?: number
      deviceRatio?: TaroGeneral.TDeviceRatio
      designWidth?: number
      targetUnit?: string
      unitPrecision?: number
    }): void

    /** @ignore */
    initAppInfo(appInfo: getAppInfo.AppInfo): void

    /** 小程序获取和 Taro 相关的 App 信息
     * @supported weapp, alipay, jd, qq, swan, tt
     */
    getAppInfo(): getAppInfo.AppInfo

    /** 小程序引用插件 JS 接口
     * @supported weapp, alipay, h5, rn, jd, qq, swan, tt, quickapp
     */
    requirePlugin(pluginName: string): any

    /** 获取当前页面实例
     * @supported global
     */
    getCurrentInstance(): getCurrentInstance.Current

    /** @ignore */
    Current: getCurrentInstance.Current

    /** Vue3 插件，用于设置 `getApp()` 中的全局变量
     * @supported weapp, alipay, h5, rn, jd, qq, swan, tt, quickapp
     * @example
     * ```js
     * // 使用插件
     * const App = createApp(...)
     * App.use(setGlobalDataPlugin, {
     *   xxx: 999
     * })
     * // 获取全局变量
     * Taro.getApp().xxx
     * ```
     */
    setGlobalDataPlugin: setGlobalDataPlugin.Plugin

    /** 获取自定义 TabBar 对应的 React 或 Vue 组件实例
     * @supported weapp
     * @param page 小程序页面对象，可以通过 Taro.getCurrentInstance().page 获取
     */
    getTabBar<T>(page: Current['page']): T | undefined
  }
}
