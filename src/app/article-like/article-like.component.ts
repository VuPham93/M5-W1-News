import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-like',
  templateUrl: './article-like.component.html',
  styleUrls: ['./article-like.component.css']
})
export class ArticleLikeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @Input()article

  likeThis() {
    this.article.likes++;
  }
}
