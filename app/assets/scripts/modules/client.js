import io from 'socket.io-client';

export default class Client {

    constructor(videoElement = null) {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.onConnect);
        this.socket.on('movieChunk', this.onMovieChunk);
        this.socket.on('lastChunk', this.onLastChunk);
        this.socket.on('disconnect', () => console.log('disconnect'));
        this.socket.owner = this;
        this.sourceBuffer = null;
        this.video  = videoElement;

        const mimeCodec     = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
        this.mediaSource   = new MediaSource();
        
        const that = this;

        if (this.video !== null) {
            this.video.src = URL.createObjectURL(this.mediaSource);
        }

        this.mediaSource.addEventListener('sourceopen', () => {
            that.sourceBuffer = that.mediaSource.addSourceBuffer(mimeCodec);

            console.log(that, that.sourceBuffer);
        });

    }

    onConnect() {
        this.emit('startStream');
    };

    onDisconnect() {
        console.log('disconnect');
    }

    onMovieChunk(data) {
        this.owner.sourceBuffer.appendBuffer(data);
    }

    onLastChunk() {
        this.owner.mediaSource.endOfStream();  
    }

}

