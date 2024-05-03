import { useState } from 'react';
import { IonBackButton, IonButtons, IonTitle, IonContent, IonHeader, IonPage, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router';
import './ViewVideo.css';
import { getVideo } from '../data/videos';

function ViewVideo() {
    const [video, setVideo] = useState<any>();
    const params = useParams<any>();

    useIonViewWillEnter(() => {
        const video = getVideo(parseInt(params.id, 10));
        setVideo(video);
    });

    return (
        <IonPage id="view-video-page">
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="Back" defaultHref="/home"></IonBackButton>
                    </IonButtons>
                    <IonTitle>{video?.title}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <div className='container'>
                    <div>
                        <div className="video-container">
                            {video && <YouTube videoId={video.videoId} />}
                        </div>
                        <div>
                            <div className='wrapper'>
                                <h1 className="title">{video?.title}</h1>
                                <p className="date">{video?.date}</p>
                            </div>
                            {video?.detailedDescription ?
                                <p className="description">
                                    {video?.detailedDescription}
                                </p>
                                :
                                <p className="description">
                                    {video?.description}
                                </p>
                            }
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default ViewVideo;
