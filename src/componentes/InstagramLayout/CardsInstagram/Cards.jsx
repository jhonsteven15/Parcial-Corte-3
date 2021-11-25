import Stories from "../StoriesInstagram/Stories";
import Card from "./Card";

const Cards = () =>{
    const _stylesCards = {
      cards:{
        width: '600px'
      }
    }
    const commentsOne = [
        {
            user: "raffagrassetti",
            text: "Woah dude, this is awesome! 🔥",
            id: 1,
        },
        {
            user: "therealadamsavage",
            text: "Like!",
            id: 2,
          },
          {
            user: "mapvault",
            text: "Niceeeee!",
            id: 3,
          },
        ];

    const commentsTwo = [
        {
            user: "mapvault",
            text: "Amazing content, keep it up!",
            id: 4,
          },
        ];
      
    const commentsThree = [
        {
            user: "dadatlacak",
            text: "Love this!",
            id: 5,
        },
        ];
    
    return(
      <div style={_stylesCards.cards}>
        
      <Stories/>

      <Card
        accountName="rafagrassetti"
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="mapvault"
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="therealadamsavage"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="dadatlacak"
        image="https://picsum.photos/800/1000"
        comments={commentsThree}
        likedByText="mapvault"
        likedByNumber={90}
        hours={4}
      />
            <Card
        accountName="rafagrassetti"
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="mapvault"
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="therealadamsavage"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="rafagrassetti"
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={16}
      />
            <Card
        accountName="rafagrassetti"
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="mapvault"
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="therealadamsavage"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="rafagrassetti"
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="mapvault"
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="therealadamsavage"
        likedByNumber={47}
        hours={12}
      />
    </div>
    );

}
export default Cards