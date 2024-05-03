export interface Video {
    id: number;
    title: string;
    description: string;
    date?: string;
    videoId: string;
    thumbNail: string;
}

const videos: Video[] = [
    { id: 1, title: 'React Tutorial', description: 'Learn the basic features of React and how we can build websites using React', date: '01 May 2024', videoId: 'Z1neJhEEoFA', thumbNail: "/thumbnails/react-thumbnail.png" },
    { id: 2, title: 'HTML The Basics ', description: 'Learn the basics of HyperText Markup Language (HTML)', date: '01 May 2024', videoId: 'Z1neJhEEoFA', thumbNail: "https://img.youtube.com/vi/Z1neJhEEoFA/0.jpg" },
    { id: 3, title: 'CSS Flexbox', description: 'Learn one of the most used properities of CSS: Flexbox', date: '01 May 2024', videoId: 'Z1neJhEEoFA', thumbNail: "https://img.youtube.com/vi/Z1neJhEEoFA/0.jpg" },
    { id: 4, title: 'Backend with Node and Express', description: 'Learn how to create server and routes for your backend', date: '01 May 2024', videoId: 'Z1neJhEEoFA', thumbNail: "https://img.youtube.com/vi/Z1neJhEEoFA/0.jpg" },
];

export const getVideos = () => videos;

export const getVideo = (id: number) => videos.find(video => video.id === id);
