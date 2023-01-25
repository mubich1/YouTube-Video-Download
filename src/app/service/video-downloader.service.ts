import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import JsFileDownloader from 'js-file-downloader';

@Injectable({
  providedIn: 'root'
})
export class VideoDownloaderService {

  constructor(private http: HttpClient,) { }


  async downloadTwitterVideo(url: string){
    const response = await fetch(`https://api-v1.majhcc.com/api/tw?url=` + url);
    const data = await response.json();
    return data;
}
  async downloadTiktokVideo(url: string){
    const response = await fetch(`https://api-v1.majhcc.com/api/tk?url=` + url);
    const data = await response.json();
    return data;
}
  async downloadYoutubeVideo(url: string){
    const response = await fetch(`https://api-v1.majhcc.com/api/dl/yt?url=` + url);
    const data = await response.json();
    return data;
}
  async downloadSnapchatVideo(username: string){
    const response = await fetch(`https://api-v1.majhcc.com/api/snapchat?username=` + username);
    const data = await response.json();
    return data;
}

 downloadYoutubeVideoPost(url: string){
  return this.http.post('http://localhost:3000/api/youtube/downloader', {url: url});
}

fileDownloader(fileUrl:any) {
  new JsFileDownloader({ 
    url: fileUrl
  })
  .then((res) => {
    console.log(res, 'res')
    // Called when download ended
  })
  .catch((error) =>  {
    console.log(error, 'error')
    // Called when an error occurred
  });
}
}
