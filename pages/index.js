import { MongoClient } from 'mongodb';
import Meetuplist from '../components/meetups/MeetupList';


const HomePage = (props) =>{
   return(<Meetuplist meetups = {props.meetups}/>);
};

export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect(
      'mongodb+srv://pratik:qwertyuiop@cluster0.drwzp.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();
  
    const meetupsCollection = db.collection('meetups');
  
    const meetups = await meetupsCollection.find().toArray();
  
    client.close();
  
    return {
      props: {
        meetups: meetups.map((meetup) => ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        })),
      },
      revalidate: 1,
    };
  }

export default HomePage;