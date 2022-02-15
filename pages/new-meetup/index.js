import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetUp = ()=>{
    const router = useRouter();
    async function meetUpHandler (enteredMeetupData){
        const response = await fetch('/api/new-meetup',{
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = response.json();
        console.log(data);
        router.push('/');
        // console.log(enteredMeetupData);
    }
    return(<NewMeetupForm onAddMeetup={meetUpHandler}/>)
};
export default NewMeetUp;