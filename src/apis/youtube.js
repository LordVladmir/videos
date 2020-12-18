import axios from 'axios';

const KEY = 'AIzaSyCuLSVUXvCy5Kvc1Xhm-ebOagdzzmJLYXc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY,
    }
});