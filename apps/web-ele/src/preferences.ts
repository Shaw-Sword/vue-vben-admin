import { defineOverridesPreferences } from '@vben/preferences';

/**
 * @description 项目配置文件
 * 只需要覆盖项目中的一部分配置，不需要的配置不用覆盖，会自动使用默认配置
 * !!! 更改配置后请清空缓存，否则可能不生效
 */
export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    name: import.meta.env.VITE_APP_TITLE,
    watermark: false,
    loginExpiredMode: 'modal', // 登录超时会打开登录弹窗
  },
  theme: {
    mode: 'light',
  },
  widget: {
    /** 是否启用语言切换部件 */
    languageToggle: false,
  },
  logo: {
    enable: true,
    fit: 'contain',
    source: '/static/logo.svg',
  },
  copyright: {
    companyName: 'zhfz',
    companySiteLink: 'https://gitee.com/Potassium-Nitrate',
    date: '2025',
    enable: false,
    icp: '',
    icpLink: '',
    settingShow: false,
  },
});
