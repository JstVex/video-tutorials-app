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
  IonSearchbar,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import { Video, getVideos } from '../data/videos';
import VideoListItem from '../components/VideoListItem';


const Home: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [searchVideos, setSearchVideos] = useState('');

  useIonViewWillEnter(() => {
    const videos = getVideos();
    setVideos(videos);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchVideos.toLowerCase())
  );

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle slot="start">Video Tutorials</IonTitle>
          <IonSearchbar
            slot="end"
            value={searchVideos}
            onIonChange={e => setSearchVideos(e.detail.value!)}
            placeholder="Search videos"
          />
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
            {filteredVideos.map(video => (
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
