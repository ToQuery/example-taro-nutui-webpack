import { defineConfig, type UserConfigExport } from '@tarojs/cli'
// import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path';

import devConfig from './dev'
import prodConfig from './prod'
// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数

// @ts-ignore
export default defineConfig<'vite'>(async (merge, { command, mode }) => {
  const baseConfig: UserConfigExport<'vite'> = {
    projectName: 'taro-nutui-bug',
    date: '2024-8-19',
    designWidth: 375,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: ['@tarojs/plugin-html'],
    defineConstants: {
    },
    copy: {
      patterns: [
      ],
      options: {
      }
    },
    framework: 'react',
    compiler: {
      vitePlugins: [vitePluginImp({
        libList: [
          {
            libName: '@nutui/nutui-react-taro',
            style: (name) => {
              return `@nutui/nutui-react-taro/dist/esm/${name}/style/css`
            },
            replaceOldImport: false,
            camel2DashComponentName: false,
          }
        ]
      })],
      type: 'vite'
    },
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
    },
    // sass: {
    //   resource: [
    //     path.resolve(__dirname, '..', 'src/styles/custom-theme.scss')
    //   ]
    // },
    cache: {
      enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    mini: {
      // imageUrlLoaderOption: {
      //   limit: 10240
      // },
      postcss: {
        // 小程序端样式引用本地资源内联
        // url: {
        //   enable: true,
        //   config: {
        //     limit: 10240 // 设定转换尺寸上限
        //   }
        // },
        pxtransform: {
          enable: true,
          config: {
            selectorBlackList: ['nut-']
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
    },
    h5: {
      publicPath: '/',
      staticDirectory: 'static',

      miniCssExtractPluginOption: {
        ignoreOrder: true,
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[name].[chunkhash].css'
      },
      postcss: {
        autoprefixer: {
          enable: true,
          config: {}
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
    },
    rn: {
      appName: 'taroDemo',
      postcss: {
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        }
      }
    },
  }
  if (process.env.NODE_ENV === 'development') {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig)
  }
  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig)
})
