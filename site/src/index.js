import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { configure } from 'mobx'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import enUS from 'antd/lib/locale/en_US'
import 'moment/locale/zh-cn'

import injects from './store'
import App     from './App'

import './less/global.less'
import './less/var.less';

configure({enforceActions: 'observed'})

ReactDOM.render(
	<Provider {...injects}>
		<ConfigProvider locale={enUS}>
					<App/>
		</ConfigProvider>
	</Provider>
	,
	document.getElementById('root')
)
