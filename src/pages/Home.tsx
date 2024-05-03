import { useState } from 'react';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import { Video, getVideos } from '../data/videos';
import VideoListItem from '../components/VideoListItem';


const Home: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useIonViewWillEnter(() => {
    const videos = getVideos();
    setVideos(videos);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Video Tutorials</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Videos
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid style={{ justifyItems: 'center' }}>
          <IonRow>
            {videos.map(video => (
              <IonCol sizeXs="12" sizeSm="8" sizeMd="6" sizeLg="4" key={video.id}>
                <VideoListItem video={video} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Home;
