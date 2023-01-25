import { Component } from '@angular/core';
import { VideoDownloaderService } from './service/video-downloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private VideoDownloaderService: VideoDownloaderService) {

  }

  ngOninit() {}
 

  download(url:any) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload =  (response:any) => {
      console.log(response, 'response')
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(response);
      var tag = document.createElement('a');
      tag.href = imageUrl;
      tag.target = '_blank';
      tag.download = 'sample.mp4';
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
    };
    xhr.onerror = err => {
      alert('Failed to download picture');
    };

  }


 

}
