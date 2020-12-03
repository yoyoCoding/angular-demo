import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'

// let storage = new StorageService()

@Component({
  selector: 'app-todoList',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.scss']
})
export class TodoListComponent implements OnInit {
  public item: string = ''
  public todoList: any[] = []
  public doneList: any[] = []

  constructor(public storage: StorageService) { // 依赖注入服务
    this.todoList = storage.get('todoList') || []
    this.doneList = storage.get('doneList') || []
   }

  ngOnInit(): void {
    console.log('刷新出发oninit生命周期！')
  }

  //清除storage
  clearStorage() {
    this.storage.remove('todoList')
    this.storage.remove('doneList')
    this.todoList = []
    this.doneList = []
  }

  // 添加待做项目
  addItem(e) {
    if(e.keyCode === 13) {
      let val = e.target.value
      if(val) {
        this.todoList.push(val)
        this.storage.set('todoList', this.todoList)
        this.item = ''
      }
    }
  }

  // 待做项目 -> 已经完成
  addToDone(val) {
    this.todoList = this.todoList.filter((item) => item !== val)
    this.doneList.push(val)
    this.storage.set('doneList', this.doneList)
    this.storage.set('todoList', this.todoList)
  }

  // 已经完成 -> 待做
  removeFromDone(val) {
    this.doneList = this.doneList.filter((item) => item !== val)
    this.todoList.push(val)
    this.storage.set('doneList', this.doneList)
    this.storage.set('todoList', this.todoList)
  }

}
