import styles from './MeetUpDetails.module.css';
const MeetUpDetails = (props)=>{
    console.log(props);
    return(
        <section className={styles.details}>
            <img src={props.meetUpData.image} alt={props.meetUpData.title} />
            <h1>{props.meetUpData.title}</h1>
            <address>{props.meetUpData.address}</address>
            <p>{props.meetUpData.description}</p>
        </section>
    );
};
export default MeetUpDetails;
