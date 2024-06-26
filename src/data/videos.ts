export interface Video {
    id: number;
    title: string;
    description: string;
    date?: string;
    detailedDescription?: string;
    videoId: string;
    thumbNail: string;
}

const videos: Video[] = [
    { id: 1, title: 'React Tutorial', description: 'Learn the basic features of React and how we can build websites using React', date: '01 May 2024', videoId: '6Gi_MPmazC0', thumbNail: "/thumbnails/react-thumbnail.png" },
    { id: 2, title: 'HTML The Basics ', description: 'Learn the basics of HyperText Markup Language (HTML)', date: '01 May 2024', videoId: 'Z1neJhEEoFA', thumbNail: "https://img.youtube.com/vi/Z1neJhEEoFA/hqdefault.jpg" },
    { id: 3, title: 'CSS Flexbox', description: 'Learn one of the most used properities of CSS: Flexbox', date: '01 May 2024', videoId: 'TohziRysKKY', thumbNail: "https://img.youtube.com/vi/TohziRysKKY/hqdefault.jpg" },
    { id: 4, title: 'Node, Express and Mongodb', description: 'Learn how to create server, routes and databse for your backend', date: '01 May 2024', videoId: 'jCScjzA2rzg', thumbNail: "https://img.youtube.com/vi/jCScjzA2rzg/hqdefault.jpg" },
    { id: 5, title: 'Figma Basic Tutorial ', description: 'Learn how to use Figma and its tools and how to create aesthetics web design', date: '01 May 2024', videoId: '9VrSP55iTSc', thumbNail: "https://img.youtube.com/vi/9VrSP55iTSc/hqdefault.jpg" },
];

export const getVideos = () => videos;

export const getVideo = (id: number) => videos.find(video => video.id === id);
