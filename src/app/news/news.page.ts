import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData("everything?q=tesla&from=2021-09-22&sortBy=publishedAt").subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

  onGoToNewsSinglePage(news) {
    this.newsService.currentArticle = news;
    this.router.navigate(['/news-single']);
  }

}
