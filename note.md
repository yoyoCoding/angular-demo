## angular学习笔记

### 创建项目
`ng new projectName`

### 项目结构说明
```javascript
angular-demo
├─ .browserslistrc              // 支持浏览器配置文件
├─ .editorconfig
├─ .gitignore
├─ angular.json
├─ e2e
│  ├─ protractor.conf.js
│  ├─ src
│  │  ├─ app.e2e-spec.ts
│  │  └─ app.po.ts
│  └─ tsconfig.json
├─ karma.conf.js
├─ note.md
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ app                       // 组件、服务 *
│  │  ├─ app.component.html         // 根组件html
│  │  ├─ app.component.scss         // 根组件scss
│  │  ├─ app.component.spec.ts      // 测试文件
│  │  ├─ app.component.ts           // 根组件ts
│  │  └─ app.module.ts              // 根模块(告诉Angualr如何组装应用)
│  ├─ assets                    // 静态资源 *
│  │  └─ .gitkeep
│  ├─ environments
│  │  ├─ environment.prod.ts
│  │  └─ environment.ts
│  ├─ favicon.ico
│  ├─ index.html                // html入口文件 *
│  ├─ main.ts                   // 项目入口文件 *
│  ├─ polyfills.ts              // 填充库文件 (比如配置global变量)
│  ├─ styles.scss               // 全局样式文件 *
│  └─ test.ts                   // 测试入口文件
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.spec.json
└─ tslint.json
```

### 自定义组件
使用angular-cli快速创建组件  
`ng g` 命令展示可使用的 `ng` 命令，`ng g component components/news` 表示在 `app/components` 文件夹下新建一个 `news` 组件  
组件引用方式：  
+ 根模块引入组件 (`angualr-cli` 方式创建会自动引入)
+ 根html文件引用组件(组件名称为 `selector` 指定名称)，`<app-news></app-news>`

### 数据操作&指令

**定义属性**  
>Q：定义对象使用 `object` 类型无法访问报错？
  
**绑定数据**  
+ 直接绑定 `{{ msg }}`
+ 属性绑定 `[title] = "msg"`
+ 绑定html `<div [innerHTML] = "content"></div>`
+ 简单运算 `{{ 1+2 }}`

**循环渲染数组**  
使用指令 `*ngFor="let item of arr;let key=index"`

**引入图片**  
+ 本地图片：图片文件放到静态资源文件夹 `assets`, 引入时 `assets/xx/xx.png`
+ 线上图片： `[src] = "xxxxx"`

**条件判断**  
使用指令 `*ngIf` , 不存在 `else`

**switch** 
使用指令 `ngSwitch` `*ngSwitchCase=` `*ngSwitchDefault`
```html
<div [ngSwitch]="status">
    <span *ngSwitchCase="1">正常</span>
    <span *ngSwitchCase="0">删除</span>
    <span *ngSwitchDefault>默认</span>
</div>
```

**属性 `[ngClass]`、`[ngStyle]`** 
动态class语法：`<p [ngClass]="{'red': flag, 'orange': !flag}">[ngClass]展示</p>`  
动态style语法：`<p [ngStyle]="{color: 'orange'}">[ngStyle]展示</p>`

**管道**  
用于过滤数据，比如时间戳转为日期格式 `{{ today | date: 'yyyy-MM-dd HH:mm:ss' }}` 

>Q：自定义管道？

**绑定事件**  
语法：`<button (click)="run($event)">执行事件</button>`

**双向数据绑定**
双向数据绑定只针对表单元素来说，需要在根模块中引入 `FormsModule` 模块，表单属性 `[(ngModel)]="keywords"`

### 服务
服务 `service` 实现公共方法  
**创建使用服务命令**  
+ 使用命令 `ng g service services/storage`
+ 在根模块引入并配置服务 `service` ：在根模块中引入服务，并在 `providers` 中配置服务
+ 在组件中使用需要再次引入服务，[***不推荐***] 并实例化服务 `new YourService()`，[***推荐***] 在组件的 `constructor` 方法调用时当做参数传入 `constructor(public yourservice:YourService)`  

>组件中可以使用service，但是service不可以调用组件方法，service之间可以相互调用