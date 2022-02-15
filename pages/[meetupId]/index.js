import { useRouter } from "next/router";
import { DUMMY_MEETUPS } from "../index";
import MeetUpDetails from "../../components/meetups/MeetUpDetails";
import { ObjectId, MongoClient } from "mongodb";

const MeetUpId = (props)=>{
    return(<MeetUpDetails meetUpData= {props.meetupData}/>);
};

export async function getStaticPaths() {
    const client = await MongoClient.connect(
      'mongodb+srv://pratik:qwertyuiop@cluster0.drwzp.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();
  
    const meetupsCollection = db.collection('meetups');
  
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  
    client.close();
  
    return {
      fallback: false,
      paths: meetups.map((meetup) => ({
        params: { meetupId: meetup._id.toString() },
      })),
    };
}
  
export async function getStaticProps(context) {
    // fetch data for a single meetup
  
    const meetupId = context.params.meetupId;
  
    const client = await MongoClient.connect(
      'mongodb+srv://pratik:qwertyuiop@cluster0.drwzp.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();
  
    const meetupsCollection = db.collection('meetups');
  
    const selectedMeetup = await meetupsCollection.findOne({
      _id: ObjectId(meetupId),
    });
  
    client.close();
  
    return {
      props: {
        meetupData: {
          id: selectedMeetup._id.toString(),
          title: selectedMeetup.title,
          address: selectedMeetup.address,
          image: selectedMeetup.image,
          description: selectedMeetup.description,
        },
      },
    };
}
  
export default MeetUpId;