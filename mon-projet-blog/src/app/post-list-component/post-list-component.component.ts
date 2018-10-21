import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;
  @Input() postAuteur: string;

  constructor() { }

  ngOnInit() {
  }

  onPlus() {
    this.postLoveIts = this.postLoveIts + 1;
  }

  onMoins() {
    this.postLoveIts = this.postLoveIts - 1;
  }

}
