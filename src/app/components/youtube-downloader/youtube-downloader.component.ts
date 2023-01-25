import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { VideoDownloaderService } from 'src/app/service/video-downloader.service';

@Component({
  selector: 'app-youtube-downloader',
  templateUrl: './youtube-downloader.component.html',
  styleUrls: ['./youtube-downloader.component.scss']
})
export class YoutubeDownloaderComponent implements OnInit {
  urlString:string ='';

  tabs = [
    { title: 'Video',  type:'Video',  content: 'First Tab Content' },
    { title: 'Audio', type:'Audio', content: 'Second Tab Content', active: true },
 ];

 videoDetails:any;
 hasVideoDetails: any;
 videos:any[] = [];
 audios:any[] = [];

  constructor(public requestService: VideoDownloaderService) { }

  ngOnInit(): void {
  }

  submitUrl() {
    this.hasVideoDetails =  true;
    this.requestService.downloadYoutubeVideoPost(this.urlString).subscribe((res:any) => {
      this.urlString = ""
      if(res) {
        this.hasVideoDetails = false;
        this.videos = res.formats.filter((x:any) => x.hasAudio && x.hasVideo);
        this.audios = res.formats.filter((x:any) => x.hasAudio && !x.hasVideo && x.container !== 'mp4');
        this.videoDetails = res.videoDetails;
      }
    })
  }

  convertSizeToMb(contentLength:any){
    contentLength = Number(contentLength);
    return Math.round((contentLength / 1024)/1024) ;
  }
  download(url:any){
    debugger
console.log(url);

  }
}
