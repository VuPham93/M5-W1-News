import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newArticle = new EventEmitter();
  article = {
    title: '',
    url: '',
    likes: 0
  }

  addArticle() {
    this.newArticle.emit(this.article);
  }
}
