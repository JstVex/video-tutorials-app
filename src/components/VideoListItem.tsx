import { IonImg, IonItem, IonLabel, IonNote } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { Video } from '../data/videos';
import "./VideoListItem.css"

interface VideoListItemProps {
    video: Video;
}

const VideoListItem: React.FC<VideoListItemProps> = ({ video }) => {
    const history = useHistory();

    return (
        <IonItem button onClick={() => history.push(`/video/${video.id}`)} className='video-item' style={{ padding: '0' }}>
            <div className='container'>
                <IonImg src={video.thumbNail} className='img' />
                <IonLabel className='video-label'>
                    <h2>{video.title}</h2>
                    <IonNote>{video.description}</IonNote>
                </IonLabel>
            </div>
        </IonItem>
    );
};

export default VideoListItem;
