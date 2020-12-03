import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  /* 
  声明属性的几种方式： 
    public:   共有        可以在类里面或者类外面使用
    protected 保护类型    当前类和子类里面才能使用
    private   私有        当前类才能使用      
  */

  title: string = '我是新闻组件!'
  public student: any = '我是学生'

  public userInfo: any = {
    username: '张三',
    age: 19
  }

  public message: any

  public content = '<h3>我是3级标题</h3>'

  // public list: any[] = ['11', '22', '33']
  public list: Array<any> = ['11', '22', '33']

  public imgUrl: string = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=387639067,1599589691&fm=26&gp=0.jpg'

  public flag: boolean = true

  public status: number = 1

  public today: Date = new Date()

  public keywords: string = ''

  constructor() {
    this.message = '属性赋值'
  }

  ngOnInit(): void {
  }

  run() {
    console.log('执行自定义方法')
  }
  getMsg() {
    console.log('获取到的message： ' + this.message)
  }
  set() {
    this.title = '我是新闻组件22！'
    console.log('改变了title')
  }

  changeText() {
    console.log('change')
    this.keywords = '改变后的值'
  }

}
