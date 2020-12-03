// 引入核心模块里面的Component
import { Component } from '@angular/core';

// 装饰器
@Component({
  // 使用这个组件的名称
  selector: 'app-root',
  // html
  templateUrl: './app.component.html',
  // css
  styleUrls: ['./app.component.scss']
})

// 暴露模块
export class AppComponent {
  // 定义属性
  title = 'angular-demo';
  // 构造函数
  constructor() {
    // todo
  }
}
