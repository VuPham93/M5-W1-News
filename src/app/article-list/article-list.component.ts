import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  articles = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40',
      likes: 20
    },
    {
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html',
      likes: 30
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7',
      likes: 40
    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/',
      likes: 50
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/',
      likes: 60
    }
  ];

  @Input() article;

  addArticle() {
    this.articles.push(Object.assign({}, this.article));
  }

  delete(id) {
    this.articles.splice(id,1);
  }

  public edit:boolean = false;
  public detail:boolean = false;
  selectedArticle

  showEdit(art) {
    this.edit = !this.edit;
    this.selectedArticle = art;
  }



  showDetail(art) {
    this.detail = !this.detail;
    this.selectedArticle = art;
  }

  showList() {
    if (this.edit == true) {
      this.edit = !this.edit;
    }
    if (this.detail == true) {
      this.detail = !this.detail;
    }
  }
}
