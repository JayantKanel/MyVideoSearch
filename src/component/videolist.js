function List(props){
    if(!props.videos){
        return(
            <div>Loading</div>
        );
    }
    console.log(props.videos);
    const List=props.videos.map((video)=>{
        const imageUrl=video.snippet.thumbnails.default.url;
    return(
      <a href="/gotodetails">
          <div className="video-list-media">
               <div className="media-left">
                   <img className="media-object" src={imageUrl}></img>
               </div>
               <div className="media-body">
                   <div className="media-heading">
                       {video.snippet.title}
                   </div>
               </div>
           </div>
      </a>
    );
    })
    return(
        <ul className="col-md-4 list-group">
            {List}
        </ul>
    );
}
export default List;