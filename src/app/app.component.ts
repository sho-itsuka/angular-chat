import { Component } from '@angular/core';

import { Comment } from './class/comment';

const COMMENTS: Comment[] = [
  { name: '武井　賢治', message: 'お疲れ様です' },
  { name: '木村　次郎', message: 'ありがとうございます。' },
  { name: '工藤　三郎', message: '宜しくお願いします' }
]

@Component({
  selector:    'ac-root',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  comments = COMMENTS
}
