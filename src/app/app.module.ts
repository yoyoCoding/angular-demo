/* 根模块，告诉Angualr如何组装应用 */

// 浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
// Angular核心模块
import { NgModule } from '@angular/core';
// 引入表单模块（数据双向绑定）
import { FormsModule } from '@angular/forms'

// 根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { TodoListComponent } from './components/todoList/todoList.component';

// 引入并配置服务service
import { StorageService } from './services/storage.service'

/* 装饰器，接受一个元数据对象，告诉Angualr如何编译和启动应用 */
@NgModule({
  // 配置当前模块运行的组件
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    TodoListComponent
  ],
  // 配置当前模块运行依赖的其他模块
  imports: [
    BrowserModule,
    FormsModule
  ],
  // 配置项目所需的服务
  providers: [StorageService],
  // 指定应用的主视图（称为根组件）通过引导AppModule来启动应用，这里一般写的是根组件
  bootstrap: [AppComponent]
})
// 导出根模块（不需要导出任何东西，因为其他组件不需要导入根模块）
export class AppModule { }
